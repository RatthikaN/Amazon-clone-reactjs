import React from "react";
import { Link } from "react-router-dom";
import amazon_logo from "./assets/amazon_logo.png"; // make sure the path is correct
import "./Footer.css"; // Import the plain CSS

export const Footer = () => {
  const backtotop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="back-to-top" onClick={backtotop}>
        Back to top
      </div>

      <div className="footer-links">
        <ul>
          <p className="footer-title">Get to Know Us</p>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
        </ul>

        <ul>
          <p className="footer-title">Connect with Us</p>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>

        <ul>
          <p className="footer-title">Make Money with Us</p>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>

        <ul>
          <p className="footer-title">Let Us Help You</p>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
        </ul>
      </div>

      <Link to="/" className="footer-logo-link">
        <div className="footer-logo">
          <img src={amazon_logo} alt="amazon" />
        </div>
      </Link>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <div>© 2025, Amazon.com, Inc. or its affiliates</div>
      </div>
    </footer>
  );
};
