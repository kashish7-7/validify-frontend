import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer'; // ✅ Make sure the path is correct
import Home from './assets/components/Home';

import Register from './assets/components/Register';
import HowItWorks from './assets/components/HowItWorks';

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
}

export default App;
