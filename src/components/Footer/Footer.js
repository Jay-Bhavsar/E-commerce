import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-section">
          <h4>Address</h4>

          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="/">Payment Options</a>
            </li>
            <li>
              <a href="/shop">Return</a>
            </li>
            <li>
              <a href="/about">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <span>
            <input
              type="text"
              placeholder="Enter your Email address"
              className="subscribeinput"
            />
          </span>{" "}
          <span>
            <button className="submitButton">Subscribe</button>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} 2022 Meubel House. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
