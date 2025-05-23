import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p><strong>Phone:</strong> +91 7995445823</p>
          <p><strong>Email:</strong> sagaryarram2@gmail.com</p>
          <p><strong>Location:</strong> Palnadu, Andhra Pradesh, India</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;