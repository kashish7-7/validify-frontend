import { Link } from 'react-router-dom';
import React from 'react';
import './HowItWorks.css';
import htwImage from '../images/htwimg1.png';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="htw-left">
        <h1 className="htw-title">How we do it?</h1>

        <div className="step">
          <h2>🟧 Step 1: Search the Business</h2>
          <p>Enter the Instagram handle, Facebook page, or website URL into our search bar.</p>
        </div>

        <div className="step">
          <h2>🟧 Step 2: We Collect and Verify Documents</h2>
          <p>We request legal documents from the business and check their legitimacy.</p>
        </div>

        <div className="step">
          <h2>🟧 Step 3: Analyze Reviews</h2>
          <p>We gather real customer feedback from multiple sources.</p>
        </div>

        <div className="step">
          <h2>🟧 Step 4: Generate a Trust Report</h2>
          <p>You get a clear status — Trusted, Caution Advised, or Not Verified.</p>
        </div>

        <div className="step">
          <h2>🟧 Step 5: Businesses Get Registered on Validify</h2>
          <p>Verified businesses are officially listed on Validify.</p>
        </div>

        <Link to="/register">
          <button className="register-now-btn">
            Click here to Register Now!
          </button>
        </Link>
      </div>

      <div className="htw-right">
        <img src={htwImage} alt="How it works" />
      </div>
    </section>
  );
}

export default HowItWorks;
