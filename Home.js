import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          The Intelligence Amplification Company
          </h1>
          <p className="primary-text">
          We Are creating an ecosystem for humans and machines to work together to solve the worlds most 
          important problems. starting with a notebook that augments your intelligence.
          </p>
          
         
          <div className="navbar-links-container line">   
          <button className="secondary-button">
            Try Ideaflow Notes {" "}
          </button>
          
           
           <a href="">IOS</a>
           <a href="">Guide</a>
           <a href="">Twitter</a>
           <a href ="">NewsLetter</a>

           </div>
        


        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;