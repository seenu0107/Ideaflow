import React from "react";

import pic4 from "../Assets/pic4.jpeg";
const Work = () => {
  const workInfoData = [
    {
      image: pic4,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    // {
    //   image: ChooseMeals,
    //   title: "Choose How Often",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    // },
    // {
    //   image: DeliveryMeals,
    //   title: "Fast Deliveries",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    // },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* //<p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">Connecting people with matching puzzle pieces</h1>
        
      
        <p className="primary-text">
        There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s.
         Maybe the cure is currently separated in different people’s heads. How can we design 
         the web so that these half-formed solutions can come together?
‍
        </p>

        <p className="primary-text">
        -- Sir Tim Berners-Lee, Creator of the Web
‍
        </p>


      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={pic4} alt="" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;