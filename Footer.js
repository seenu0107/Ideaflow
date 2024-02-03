import React from "react";
import logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <p className="primary-text">#rabbithole</p>
          <span>Memex</span>
          <span>Niklas Luhmann's Zettelkasten</span>
          <span>Collective IQ</span>
          <span>Intelligence Amplification</span>
          <span>Tim Berners -Lee 's Giant Global Graph</span>
          <span>Polymath Project</span>
          <span>Category Theory for Scientists</span>
          <span>ideaflowplan.jacobcolenet</span>
          <span>
          Privacy Policy
          </span>
        </div>
        <div className="footer-section-columns">
                  <p className="primary-text">Latest updates</p>

          <span>Blog</span>
          <span>Funding</span>
          <span>Bullet View</span>
          <span>Video</span>
        </div>
        <div className="footer-section-columns">
        <p className="primary-text">Contact</p>

          <span>Email</span>
          <span>Linkedin</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      
      
    </div>
    


    </div>
    
    
  );
};

export default Footer;