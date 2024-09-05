import React, { useState } from "react";
import Navbar from "../assets/Navbar";
import "./Profile.css";
import profileImage from "../assets/Turtle.png";
const Profile = () => {
  const [Causes, setCauses] = useState(false);
  const [skills, setSkills] = useState(false);
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="profile-info">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <div className="profile-details">
            <h1 className="profile-name">Team Tracy's Turtles</h1>
          </div>
        </div>
        <div className="paragraph">
          A group of students from a variety of computer science and
          math-related fields dedicated to using their skills to design
          solutions to real-world issues.
        </div>
        <div  className="section-box">
          <div>
            <p className="title">Causes and Interests</p>
            <ul className="small-paragraph">
              <li>Accessibility</li>
              <li>Awareness</li>
              <li>Local Beach Clean Up</li>
              {Causes && (
                <>
                  <li>Global Warming</li>
                  <li>Deforestation</li>
                  <li>Marine Life</li>
                </>
              )}
              <p className="see-more-text" onClick={() => setCauses(!Causes)}>
                {Causes ? "See Less" : "See More"}
              </p>
            </ul>
          </div>
          <div>
            <p className="title">Skills</p>
            <ul className="small-paragraph">
              <li>Programming</li>
              <li>Mathematics</li>
              <li>Teamwork & Collaboration</li>
              {skills && (
                <>
                  <li>Leadership</li>
                  <li>Graphic Design</li>
                </>
              )}
              <p className="see-more-text" onClick={() => setSkills(!skills)}>
                {skills ? "See Less" : "See More"}
              </p>
            </ul>
          </div>
          <div>
            <p className="title">Charity organization experience</p>
            <ul className="small-paragraph">
              <li className="experience">
                <p>[Name of event]</p>
                <p>MM / YY</p>
                <p>[Summary of task]</p>
                <p>[Impact made]</p>
                <p>[Media (optional)]</p>
              </li>
              <p className="see-more-text">
                See More
              </p>
            </ul>
          </div>
          <div>
            <p className="title">Volunteering experience</p>
            <ul className="small-paragraph">
              <li className="experience">
                <p>[Organization name]</p>
                <p>MM / YY</p>
                <p>[Description of work]</p>
                <p>[Media (optional)]</p>
              </li>
              <p className="see-more-text">
                See More
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
