import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info">
          <h1>Digital Library</h1>
          <h3>Mirpur-2,Dhaka</h3>
          <h3>Rupnagor</h3>
          <h3>1234-5678</h3>
          <h3>Bangladesh</h3>
          <h3>Something@gmail.com</h3>
        </div>

        <div className="social">
          <div className="social-link">
            <FaFacebookSquare className="fa-icon1" />
          </div>
          <div className="social-link">
            <FaTwitter className="fa-icon2" />
          </div>
          <div className="social-link">
            <FaLinkedin className="fa-icon3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
