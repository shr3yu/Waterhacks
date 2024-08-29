import React from "react";
import Navbar from "../assets/Navbar";
import "./Test.css"; // Import CSS file for styling
import image from "../assets/pollutants.png"

const Test = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="heading">
          Want to organize a charity event about a water-related sustainability issue?
        </h1>
        <p className="paragraph">
        Waterlinks is your one-stop shop for organizing any local, small-scale charity event throughout all the stages of development, including connecting with and applying to work with charities, as well as planning.
        </p>
        <div className="info-box">
          <img src={image} alt="Information" className="info-image" />
          <div className="info-text">
            <h1>Fact of the day</h1>
            <p className="paragraph"> According to Statistics Canada, approximately 142, 006 tonnes of pollutants were released to water in 2022.</p>
            <p className="bottom-aligned"> Photographer: Lu Guang <br></br> Location: Tianjin’s North Canal and Ziya River. <br></br> Description: Rubbish piles high in severely polluted water. </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Test;
