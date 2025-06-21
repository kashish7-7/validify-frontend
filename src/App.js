import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer'; // ✅ Make sure the path is correct
import Home from './assets/components/Home';

import Register from './assets/components/Register';
import HowItWorks from './assets/components/HowItWorks';
// Replace this with your actual backend URL on Vercel:
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = "https://validify-backend.vercel.app";
// Example usage:
fetch(`${BACKEND_URL}/search?term=${encodeURIComponent(term)}`)

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} /> {/* Default fallback */}
      </Routes>
      
      <Footer />
    </Router>
  );
 fetch(`${BACKEND_URL}/search?term=${encodeURIComponent(term)}`)
    .then(response => response.json())
    .then(data => {
      console.log('Search result:', data);
      // handle data in your app state here
    })
    .catch(error => {
      console.error('Error fetching from backend:', error);
    });
}

export default App;
