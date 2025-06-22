const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
// For local testing
if (require.main === module) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Backend running locally at http://localhost:${PORT}`);
  });
}

// Fix: Add missing comma after second origin in array
app.use(cors({
  origin: [
    "https://validify.in",
    "https://validifyin.netlify.app",
    "http://localhost:3000"
  ]
}));

// Optional: Handle preflight OPTIONS requests for CORS
app.options('*', cors({
  origin: [
    "https://validify.in",
    "https://validifyin.netlify.app",
    "http://localhost:3000"
  ]
}));

// File paths
const dataFilePath = path.join(__dirname, '../data.json');
const requestFilePath = path.join(__dirname, '../requests.json');
const clientReqFilePath = path.join(__dirname, '../client_requests.json');
const searchLogPath = path.join(__dirname, '../search_logs.json');

// Ensure JSON files exist
const ensureFileExists = (filePath, name) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    console.log(`📄 Created ${name}`);
  }
};

ensureFileExists(requestFilePath, 'requests.json');
ensureFileExists(clientReqFilePath, 'client_requests.json');
ensureFileExists(searchLogPath, 'search_logs.json');

// Load businesses from data.json
let businesses = [];
try {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  businesses = JSON.parse(rawData);
  console.log('✅ Loaded businesses:', businesses.length);
} catch (error) {
  console.error('❌ Error reading data.json:', error.message);
}

// Search endpoint
app.get('/search', (req, res) => {
  const term = req.query.term?.toLowerCase();
  if (!term) return res.json({ status: 'error', message: '❌ No search term provided.' });

  // Log search
  try {
    const logs = JSON.parse(fs.readFileSync(searchLogPath, 'utf-8'));
    logs.push({ term, searchedAt: new Date().toISOString() });
    fs.writeFileSync(searchLogPath, JSON.stringify(logs, null, 2));
  } catch (err) {
    console.error('❌ Logging failed:', err.message);
  }

  const business = businesses.find(b =>
    b.name.toLowerCase().includes(term) ||
    b.links?.website?.toLowerCase().includes(term)
  );

  if (business) {
    return res.json({
      status: business.verified ? 'verified' : 'not_verified',
      message: business.verified
        ? `✅ ${business.name} is verified.`
        : `⚠️ ${business.name} is not verified.`,
      business
    });
  }

  if (term === 'tomb') {
    return res.json({
      status: 'not_verified',
      message: '⚠️ tomb is not verified.',
      business: {
        name: 'tomb',
        links: {
          website: 'https://tomb.in',
          instagram: 'https://instagram.com/tomb',
          facebook: 'https://facebook.com/tomb'
        }
      }
    });
  }

  return res.json({ status: 'not_found', message: '❌ No matching business found.' });
});

// Register brand request
app.post('/request-brand', (req, res) => {
  const { brandName } = req.body;
  if (!brandName || brandName.trim() === '') {
    return res.status(400).json({ message: '❌ Brand name is required' });
  }

  try {
    const existingRequests = JSON.parse(fs.readFileSync(requestFilePath, 'utf-8'));
    existingRequests.push({ brandName: brandName.trim(), requestedAt: new Date().toISOString() });
    fs.writeFileSync(requestFilePath, JSON.stringify(existingRequests, null, 2));
    return res.json({ message: '✅ Request received. We’ll try to contact the brand!' });
  } catch (err) {
    return res.status(500).json({ message: '❌ Failed to store request.' });
  }
});

// Submit client verification form
app.post('/submit-client-request', (req, res) => {
  const { name, business, email, details } = req.body;
  if (!name || !business || !email) {
    return res.status(400).json({ message: '❌ Name, business name, and email are required.' });
  }

  try {
    const clients = JSON.parse(fs.readFileSync(clientReqFilePath, 'utf-8'));
    clients.push({
      name: name.trim(),
      business: business.trim(),
      email: email.trim(),
      details: details?.trim() || '',
      requestedAt: new Date().toISOString()
    });
    fs.writeFileSync(clientReqFilePath, JSON.stringify(clients, null, 2));
    return res.json({ message: '✅ Thank you! We’ll follow up by email.' });
  } catch (err) {
    return res.status(500).json({ message: '❌ Failed to save request.' });
  }
});

// Export for Vercel serverless deployment
module.exports = app;
module.exports.handler = serverless(app);
