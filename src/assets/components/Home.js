import React from 'react';
import './Home.css';
import Search from './Search';
import bg1 from '../images/backgroundsection1hm.png';
import bg2 from '../images/bghomes2.jpg';
import logo from '../images/logo.png';
import imgS3 from '../images/imgs3hp.png';

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

  <style>{`
    .what-we-do-section {
      background-size: cover;
      background-position: center;
      padding: 60px 20px;
    }

    .what-we-do-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      gap: 30px;
      flex-wrap: wrap;
    }

    /* Just the image itself on left */
    .logo-image {
      max-width: 400px;
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      object-fit: contain;
    }

    .text-content {
      flex: 1;
      color: black;
      max-width: 600px;
    }

    @media (max-width: 768px) {
      .what-we-do-section {
        padding: 40px 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
      }
      .what-we-do-container {
        flex-direction: column;
        text-align: center;
      }
      .logo-image {
        max-width: 100%;
        margin-bottom: 20px;
      }
      .text-content {
        max-width: 100%;
      }
    }
  `}</style>

  <div className="what-we-do-container">
    <img src={logo} alt="Validify logo" className="logo-image" />
    <div className="text-content">
      <h2>What We Do?</h2>
      <p><strong>Validify</strong> verifies the legitimacy of online businesses by collecting and reviewing their legal documents — whether they operate on Instagram, Facebook, or independent shopping websites. We also analyze customer reviews and social activity to determine whether a business is safe to buy from. Our goal is to help you shop online with confidence and avoid scams.</p>
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
