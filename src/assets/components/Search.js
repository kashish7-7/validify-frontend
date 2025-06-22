import React, { useState } from 'react';

function Search({ backendUrl }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [requested, setRequested] = useState(false);


  const handleSearch = async () => {
    setRequested(false);

    if (!searchTerm.trim()) {
      alert('Please enter a business name.');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/search?term=${searchTerm}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Search error:', error);
      setResult({ message: '❌ Server not responding' });
    }
  };

// Replace this with your actual backend URL on Vercel:

const BACKEND_URL = "https://validify-backend.vercel.app";
// Example usage:
fetch(`${BASE_URL}/search?term=tomb`)





  const sendRequestToValidify = async () => {
    try {
      const response = await fetch('http://localhost:5000/request-brand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName: searchTerm }),
      });
      const data = await response.json();
      setRequested(true);
      alert(data.message);
    } catch (error) {
      alert('❌ Failed to send request.');
    }
  };

  return (
   <div style={{ textAlign: 'center' }}>

      <input
        type="text"
        placeholder="Search a business or paste URL"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', borderRadius: '5px' }}
      />
     <button
  onClick={handleSearch}
  style={{
    marginLeft: '10px',
    padding: '10px 20px',
    border: '2px solid white',
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  }}
>
  Verify
</button>

      {result && (
  <div style={{ marginTop: '20px', fontSize: '18px', color: 'white' }}>

          <p>{result.message}</p>

          {/* Verified */}
          {result.status === 'verified' && result.business && (
            <div style={{ marginTop: '10px', textAlign: 'left', display: 'inline-block' }}>
              <p><strong>🌐 Website:</strong>{' '}
                {result.business.links?.website ? (
                  <a href={result.business.links.website} target="_blank" rel="noreferrer">
                    {result.business.links.website}
                  </a>
                ) : 'N/A'}
              </p>
              <p><strong>📸 Instagram:</strong>{' '}
                {result.business.links?.instagram ? (
                  <a href={result.business.links.instagram} target="_blank" rel="noreferrer">
                    {result.business.links.instagram}
                  </a>
                ) : 'N/A'}
              </p>
              <p><strong>📘 Facebook:</strong>{' '}
                {result.business.links?.facebook ? (
                  <a href={result.business.links.facebook} target="_blank" rel="noreferrer">
                    {result.business.links.facebook}
                  </a>
                ) : 'N/A'}
              </p>
            </div>
          )}

          {/* Not Verified */}
          {result.status === 'not_verified' && result.business && (
            <div style={{ marginTop: '10px', textAlign: 'left', display: 'inline-block', color: 'lightred' }}>
              <h3>❌ This website is <strong>Not Verified</strong></h3>
              <p>The business exists, but hasn't been verified for trust and reliability.</p>
              <p><strong>🌐 Website:</strong>{' '}
                {result.business.links?.website ? (
                  <a href={result.business.links.website} target="_blank" rel="noreferrer">
                    {result.business.links.website}
                  </a>
                ) : 'N/A'}
              </p>
              <p><strong>📸 Instagram:</strong>{' '}
                {result.business.links?.instagram ? (
                  <a href={result.business.links.instagram} target="_blank" rel="noreferrer">
                    {result.business.links.instagram}
                  </a>
                ) : 'N/A'}
              </p>
              <p><strong>📘 Facebook:</strong>{' '}
                {result.business.links?.facebook ? (
                  <a href={result.business.links.facebook} target="_blank" rel="noreferrer">
                    {result.business.links.facebook}
                  </a>
                ) : 'N/A'}
              </p>
            </div>
          )}

          {/* Not Found */}
          {result.status === 'not_found' && (
            <div style={{ marginTop: '10px', color: 'gray' }}>
              <p>No matching business found.</p>
              <button
                onClick={sendRequestToValidify}
                disabled={requested}
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: requested ? 'gray' : '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {requested ? '✅ Request Sent' : 'Click here to request Validify to verify this'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
