import React from "react";
//import ProfilePic from "../Assets/john-doe-image.png";
import pic5 from "../Assets/pic5.jpeg"
//import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Testimonial</p> */}
        <h1 
        className="primary-heading">The auto-suggest layer for human thinking</h1>
        
        
      
        <p className="primary-text">
        Connect fragments of information from siloed sources faster than ever before
          </p>

          <p className="primary-text">
        Your organization's collective memory at your fingertips.
        </p>

        <button className="secondary-button"> 
          Learon More
        </button>
      </div>
      <div className="testimonial-section-bottom">
        <img src={pic5} alt="" />
        
        
      </div>
    </div>
  );
};

export default Testimonial;