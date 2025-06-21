import React from 'react';
import './Home.css';
import Search from './Search';

// If you plan to use it later for fetch
const BACKEND_URL = "https://validify-backend.vercel.app";

// Import images
import bgSection1 from '../images/backgroundsection1hm.png';
import bgSection2 from '../images/bghomes2.jpg';
import logo from '../images/logo.png';
import section3Image from '../images/imgs3hp.png';

function Home() {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section
        className="home-section-1"
        style={{
          backgroundImage: `url(${bgSection1})`,
        }}
      >
        <div className="overlay">
          <div className="blinking-bar"></div>
          <h1 className="main-heading">
            Worried About Online Scams? Let’s Verify That Business First.
          </h1>
          <p className="sub-heading">
            Search for Instagram, Facebook or any other online store to check if the business is safe and reliable to purchase from.
          </p>
          <div className="search-area">
            <Search />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="what-we-do-section"
        style={{
          backgroundImage: `url(${bgSection2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px 20px',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <div
          className="what-we-do-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            maxWidth: '1100px',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="logo-container"
            style={{
              flex: '1 1 300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="Validify logo"
              className="logo-image"
              style={{
                maxWidth: '280px',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
          </div>

          <div
            className="text-content"
            style={{
              flex: '1 1 600px',
              textAlign: 'left',
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
              What We Do?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                fontWeight: 'bold',
                lineHeight: '1.6',
                maxWidth: '600px',
              }}
            >
              <strong>Validify</strong> verifies the legitimacy of online businesses by collecting and reviewing their legal documents...
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Use Validify */}
      <section className="home-section-3">
        <h2 className="section3-heading">Why Use Validify?</h2>
        <div className="section3-content">
          <div className="section3-text">
            <div className="feature-block">
              <h3>Avoid online scams</h3>
              <h4>Stay protected from fake sellers and scam pages.</h4>
              <p>Validify verifies the legal identity and public reputation...</p>
            </div>
            <div className="feature-block">
              <h3>Works with Instagram, Facebook and Online Websites</h3>
              <h4>Check businesses across social platforms and independent sites.</h4>
              <p>Whether it’s an Instagram shop, Facebook seller, or a personal site...</p>
            </div>
            <div className="feature-block">
              <h3>Real User Reviews</h3>
              <h4>See what actual customers are saying.</h4>
              <p>Validify gathers and displays genuine reviews from people...</p>
            </div>
          </div>
          <div className="section3-image">
            <img src={section3Image} alt="Validify features" />
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="contact-section">
        <div className="contact-container">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-subheading">
            Have questions? Reach out to us for support or inquiries about business verification.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name"><h1>Enter your name</h1></label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email"><h2>Enter your email</h2></label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message"><h3>Describe your business verification queries</h3></label>
              <textarea id="message" placeholder="Write your query here..."></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Your Request</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
