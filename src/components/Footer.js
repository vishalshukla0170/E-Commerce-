import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 A-Z Shopping Store. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
