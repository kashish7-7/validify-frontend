import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    details: ''
  });

  // ✅ Define `setMessage` and `message` state
  const [message, setMessage] = useState('');

  // ✅ Define `backendURL` safely
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  // ✅ Single definition of `handleChange`
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.business || !formData.email) {
      setMessage('Please fill in all required fields.');
      return;
    }

    try {
      const res = await fetch(`${backendURL}/submit-client-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Server responded with an error');

      const data = await res.json();
      setMessage(data.message || 'Request submitted successfully!');
      setFormData({ name: '', business: '', email: '', details: '' });

    } catch (err) {
      console.error('Submission failed:', err.message);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <section className="register-header">
        <h1>Verify Your Business</h1>
        <p>Join Validify today and ensure your business is recognized as trustworthy and verified by users.</p>
      </section>

      <section className="register-form-section">
        <h2 className="form-heading">Fill out this form to submit your request</h2>
        <form className="business-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="business">Enter Your Business Name*</label>
            <input type="text" id="business" value={formData.business} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Provide your email address</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="details">Details about your business</label>
            <textarea id="details" value={formData.details} onChange={handleChange} rows="5" />
          </div>

          <button type="submit" className="submit-btn">Submit Verification Request</button>
        </form>

        {/* ✅ Conditional message rendering */}
        {message && <p className="form-message">{message}</p>}
      </section>
    </>
  );
};

export default Register;
