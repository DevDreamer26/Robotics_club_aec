import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IoCall, IoMail } from 'react-icons/io5';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate.push(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <Link to="/" className="footer-logo-link">
                  <span className="hidden-link-text">Sankardev Shishu Vidya Niketan, Golaghat</span>
                  <img src="images/logo-modified.png" alt="Logo" />
                </Link>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">Robotics Club of Assam Engineering College </h2>
                <p>
                  The Robotics Club of Assam Engineering College provides a platform for students to exhibit their
                  skills and talents in the field of robotics.
                </p>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Social Links</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="https://m.facebook.com/roboclubaec" target="_blank">
                      <FaFacebook /> Facebook
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="https://www.instagram.com/roboclubaec/" target="_blank">
                      <FaInstagram /> Instagram{' '}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="https://www.linkedin.com/company/robotics-club-assam-engineering-college/" target="_blank">
                      <FaLinkedin /> LinkedIn
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="https://www.youtube.com/@roboticsclubaec467" target="_blank">
                      <FaYoutube /> Youtube
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <Link to="/term">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link onClick={() => handleLinkClick('/')} to="/">Home</Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link onClick={() => handleLinkClick('/about')} to="/about">About us</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link onClick={() => handleLinkClick('/team')} to="/team">Team</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link onClick={() => handleLinkClick('/events')} to="/events">Events</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <Link onClick={() => handleLinkClick('/contact')} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                  {' '}
                  <Link to="tel:+916002920374">
                    <IoCall /> +91 6002920374{' '}
                  </Link>
                </p>
                <p className="footer-call-to-action-link-wrapper">
                  {' '}
                  <Link to="mailto:a@gmail.com">
                    <IoMail />roboclub@aec.ac.in{' '}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <Link to="https://bidyasagar.me" target="_blank">
                  ©2024. | Designed and Developed By: Bidyasagar Hazarika | All rights reserved.
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
