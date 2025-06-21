import React from 'react';
import './Home.css';
import Search from './Search';

const BACKEND_URL = "https://validify-backend.vercel.app";




function Home() {
 
  

  return (
    <>
      {/* Section 1: Hero Section */}
      <section
        className="home-section-1"
        style={{
          backgroundImage: `url(${require('../images/backgroundsection1hm.png')})`,
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


<section
  className="what-we-do-section"
  style={{
    backgroundImage: `url(${require('../images/bghomes2.jpg')})`,
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
    {/* Left: Logo Image */}
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
        src={require('../images/logo.png')}
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

    {/* Right: Text */}
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
        <strong>Validify</strong> verifies the legitimacy of online businesses by collecting and reviewing their legal documents — whether they operate on Instagram, Facebook, or independent shopping websites. We also analyze customer reviews and social activity to determine whether a business is safe to buy from. Our goal is to help you shop online with confidence and avoid scams.
      </p>
    </div>
  </div>
</section>



{/* Section 3: Why Use Validify */}
<section className="home-section-3">
  <h2 className="section3-heading">Why Use Validify?</h2>
  <div className="section3-content">

    {/* Left text area */}
    <div className="section3-text">
      <div className="feature-block">
        <h3>Avoid online scams</h3>
        <h4>Stay protected from fake sellers and scam pages.</h4>
        <p>
          Validify verifies the legal identity and public reputation of online businesses so you can shop with confidence.
        </p>
      </div>

      <div className="feature-block">
        <h3>Works with Instagram, Facebook and Online Websites</h3>
        <h4>Check businesses across social platforms and independent sites.</h4>
        <p>
          Whether it’s an Instagram shop, a Facebook seller, or a personal website, Validify helps you know who to trust.
        </p>
      </div>

      <div className="feature-block">
        <h3>Real User Reviews</h3>
        <h4>See what actual customers are saying.</h4>
        <p>
          Validify gathers and displays genuine reviews from people who have interacted with the business — helping you make informed decisions before you buy.
        </p>
      </div>
    </div>

    {/* Right image area */}
    <div className="section3-image">
<img src={require('../images/imgs3hp.png')} alt="Validify features" />
    </div>

  </div>
</section>

{/* Section 4: Get in Touch */}
<section className="contact-section">
  <div className="contact-container">
    <h1 className="contact-heading">Get in Touch</h1>
    <p className="contact-subheading">
      Have questions? Reach out to us for support or inquiries about business verification.
      We're here to help you ensure trustworthiness.
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


    </>
  );
}

export default Home;
