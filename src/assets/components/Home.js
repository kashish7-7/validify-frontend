import React from 'react';
import './Home.css';
import Search from './Search';
import bg1 from '../images/backgroundsection1hm.png';
import bg2 from '../images/bghomes2.jpg';
import logo from '../images/logo.png';
import imgS3 from '../images/imgs3hp.png';
style={{ backgroundImage: `url(${bg1})` }}
<img src={logo} alt="logo" />

function Home() {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section className="home-section-1" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="overlay">
          <div className="blinking-bar"></div>
          <h1 className="main-heading">Worried About Online Scams? Let’s Verify That Business First.</h1>
          <p className="sub-heading">
            Search for Instagram, Facebook or any other online store to check if the business is safe and reliable to purchase from.
          </p>
          <div className="search-area">
            <Search />
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="what-we-do-section" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="what-we-do-container">
          <div className="logo-container">
            <img src={logo} alt="Validify logo" className="logo-image" />
          </div>
          <div className="text-content">
            <h2>What We Do?</h2>
            <p><strong>Validify</strong> verifies the legitimacy of online businesses by collecting and reviewing their legal documents... (rest of content)</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="home-section-3">
        <h2 className="section3-heading">Why Use Validify?</h2>
        <div className="section3-content">
          <div className="section3-text">
            <div className="feature-block">
              <h3>Avoid online scams</h3>
              <p>Validify verifies the legal identity and public reputation of online businesses so you can shop with confidence.</p>
            </div>
            <div className="feature-block">
              <h3>Works with Instagram, Facebook and Online Websites</h3>
              <p>Whether it’s an Instagram shop, Facebook seller, or website, we help you know who to trust.</p>
            </div>
            <div className="feature-block">
              <h3>Real User Reviews</h3>
              <p>Genuine reviews from real customers help you decide better.</p>
            </div>
          </div>
          <div className="section3-image">
            <img src={imgS3} alt="Validify features" />
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="contact-section">
        <div className="contact-container">
          <h1 className="contact-heading">Get in Touch</h1>
          <p className="contact-subheading">Have questions? Reach out to us.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Enter your name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter your email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Describe your business verification queries</label>
              <textarea id="message" placeholder="Write your query here..." />
            </div>
            <button type="submit" className="submit-button">Submit Your Request</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
