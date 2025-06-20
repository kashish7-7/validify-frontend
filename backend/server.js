const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// File paths
const dataFilePath = path.join(__dirname, 'data.json');
const requestFilePath = path.join(__dirname, 'requests.json');
const clientReqFilePath = path.join(__dirname, 'client_requests.json');
const searchLogPath = path.join(__dirname, 'search_logs.json');

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
  console.log('🔍 Search term:', term);

  if (!term) {
    return res.json({ status: 'error', message: '❌ No search term provided.' });
  }

  // Log the search term
  try {
    const existingLogs = JSON.parse(fs.readFileSync(searchLogPath, 'utf-8'));
    existingLogs.push({
      term,
      searchedAt: new Date().toISOString()
    });
    fs.writeFileSync(searchLogPath, JSON.stringify(existingLogs, null, 2));
    console.log(`📝 Logged search: ${term}`);
  } catch (err) {
    console.error('❌ Failed to log search:', err.message);
  }

  // Search for matching business
  const business = businesses.find(b =>
    b.name.toLowerCase().includes(term) ||
    (b.links?.website?.toLowerCase().includes(term))
  );

  if (business) {
    console.log('✅ Found:', business.name);
    return res.json({
      status: business.verified ? 'verified' : 'not_verified',
      message: business.verified
        ? `✅ ${business.name} is verified.`
        : `⚠️ ${business.name} is not verified.`,
      business
    });
  }

  // Hardcoded fallback
  if (term === 'tomb') {
    console.log('⚠️ tomb is not verified (hardcoded)');
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

  console.log('❌ No matching business found');
  return res.json({ status: 'not_found', message: '❌ No matching business found.' });
});

// Handle brand request submission
app.post('/request-brand', (req, res) => {
  const { brandName } = req.body;

  if (!brandName || brandName.trim() === '') {
    return res.status(400).json({ message: '❌ Brand name is required' });
  }

  try {
    const existingRequests = JSON.parse(fs.readFileSync(requestFilePath, 'utf-8'));
    existingRequests.push({
      brandName: brandName.trim(),
      requestedAt: new Date().toISOString()
    });
    fs.writeFileSync(requestFilePath, JSON.stringify(existingRequests, null, 2));
    console.log(`📩 Brand request submitted: ${brandName}`);
    return res.json({ message: '✅ Request received. We’ll try to contact the brand!' });
  } catch (err) {
    console.error('❌ Failed to write to requests.json:', err.message);
    return res.status(500).json({ message: '❌ Failed to store request.' });
  }
});

// Handle client-submitted verification form requests
app.post('/submit-client-request', (req, res) => {
  const { name, business, email, details } = req.body;

  if (!name || !business || !email) {
    return res.status(400).json({ message: '❌ Name, business name, and email are required.' });
  }

  try {
    const existingClients = JSON.parse(fs.readFileSync(clientReqFilePath, 'utf-8'));
    existingClients.push({
      name: name.trim(),
      business: business.trim(),
      email: email.trim(),
      details: details?.trim() || '',
      requestedAt: new Date().toISOString()
    });
    fs.writeFileSync(clientReqFilePath, JSON.stringify(existingClients, null, 2));
    console.log(`📥 Client submitted request: ${name} - ${business}`);
    return res.json({ message: '✅ Thank you! We will send a follow-up via your registered Email ID.' });
  } catch (err) {
    console.error('❌ Failed to store client request:', err.message);
    return res.status(500).json({ message: '❌ Failed to save request.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
