import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Register from './assets/components/Register';
import HowItWorks from './assets/components/HowItWorks';

const BACKEND_URL = "https://validify-backend.vercel.app";
// You can also use environment variable like:
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/home" element={<Home backendUrl={BACKEND_URL} />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register backendUrl={BACKEND_URL} />} />
        <Route path="*" element={<Home backendUrl={BACKEND_URL} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
