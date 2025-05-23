import React, { useRef, useState } from 'react';
import '../styles/contact.css';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hshjqoj',  
      'template_9cji9ml',   
      form.current,
      'ecXh21KP0AIxd-XdS'      
    ).then(
      () => {
        setStatus('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setStatus('Failed to send. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
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
