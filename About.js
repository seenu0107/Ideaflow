import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";


const About = () => {
  return (
    <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading backed">
        Backed by world-class investors and partners
        </h1>
    <div className="about-section-container">
     <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> 
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={pic2} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={pic3} alt="" />
      </div>
      <div className="about-section-image-container">
      <h2 className="primary-heading" >+33More</h2>
      </div>

      
      

        
        
      </div>
    </div>
  );
};

export default About;