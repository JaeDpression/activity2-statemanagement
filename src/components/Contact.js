// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
