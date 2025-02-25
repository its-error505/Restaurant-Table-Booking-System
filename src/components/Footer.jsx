import React from "react";
import "./Footer.css"; // Importing the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Sam's Cafe</h2>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Sam's Cafe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
