import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-info">
        <ul>
          <h3>About</h3>
          <Link to="/About" style={{ color: "black" }}>
            <li>About Digital Library</li>
          </Link>
          <li>Join us</li>
          <Link to="/Contact" style={{ color: "black" }}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <ul>
          <h3>Support</h3>
          <li>Help/FAQ</li>
          <li>Accessibility</li>
          <li>Publishers</li>
        </ul>
        <ul>
          <h3>Legal</h3>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Copyright</li>
        </ul>
        <ul>
          <h3 className="social">Social</h3>
          <div className="social-link">
            <FaFacebookSquare
              className="fa-icon"
              color="#222"
              fontSize="14px"
            />
            <li>Facebook</li>
          </div>
          <div className="social-link">
            <FaTwitter className="fa-icon" color="#222" fontSize="14px" />

            <li>Twitter</li>
          </div>
          <div className="social-link">
            <FaLinkedin
              className="fa-icon"
              margin="10px"
              color="#222"
              fontSize="14px"
            />
            <li>LinkedIn</li>
          </div>
        </ul>
      </div>
      <div className="copyright">
        <h3>Language:English</h3>
        <h3>Copyright &copy; 2021 Digital Library lnc.</h3>
      </div>
    </div>
  );
}

export default Footer;
