import React, { useRef, useState } from 'react';

import '../styles/contact.css';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt,FaEnvelope } from 'react-icons/fa';



const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
   
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error('DB store failed');
    await emailjs.sendForm(
        'service_hshjqoj',  
      'template_9cji9ml', 
      form.current,
       'ecXh21KP0AIxd-XdS');


    setStatus('Message sent successfully!');
    form.current.reset();
  } catch (error) {
    console.error(error);
    setStatus('Failed to send. Please try again.');
  }
};

  return (
    <section className="contact-section">
   <h2 className="contact-title">
  <FaEnvelope style={{ marginRight: '10px', verticalAlign: 'middle' }} />
  Contact Me
</h2>

      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}

        <div className="contact-icons">
          <a href="https://github.com/suryaj47" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/suryaprakash-j-1a9897257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/919543487046" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="tel:+919543487046">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
