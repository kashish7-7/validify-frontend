// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      {/* Left section */}
      <div className="footer-left">
        <h2>Trustworthy</h2>
        <p>Verify business and service providers easily today.</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/validify.in?igsh=dnRjYTZyYWZ2cm1v" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1Bg3fSqYne/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/validify-in/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        <p className="rights">@2025 All rights reserved.</p>
      </div>

      {/* Middle section */}
      <div className="footer-middle">
  <h4>Contact us:</h4>  <a href="mailto:support@validify.in" className="email-link">support@validify.in</a>
      
      </div>

      {/* Right section */}
      <div className="footer-right">
        <h4>Enter your business email here:</h4>
        <form className="footer-form">
          <input type="email" placeholder="Your business email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
