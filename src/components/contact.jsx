import React, { useState } from 'react';
// import './ContactForm.css';
import '../components/contact.css'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!purpose) newErrors.purpose = 'Purpose is required';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the data (replace with your actual submission logic)
    const contactData = { name, email, purpose };
    console.log('Contact data:', contactData);
    setSubmitted(true);
    setName('');
    setEmail('');
    setPurpose('');
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      {submitted && <p>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="purpose">Purpose of Contact:</label>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
          {errors.purpose && <span className="error">{errors.purpose}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;