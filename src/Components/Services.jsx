import React from "react";
import "./Services.css";
import frontend from "../assets/frontend.webp";
import responsive from "../assets/responsive.webp";
import UI from "../assets/UI.jpg";
import git from "../assets/git.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-containers">
        <div className="services-container">
          <img src={responsive} alt="" />
          <h2>Responsive Web Design</h2>
          <p>
            Crafting visually appealing, websites that look great on any device.
            Ensuring a seamless user experience with flexible and adaptive
            layouts.
          </p>
        </div>
        <div className="services-container">
          <img src={frontend} alt="" />
          <h2>Frontend Development</h2>
          <p>
            Building robust and dynamic user interfaces using HTML, CSS, and
            JavaScript in frameworks like React.js and Tailwind CSS to create
            interactive web applications.
          </p>
        </div>
        <div className="services-container">
          <img src={UI} alt="" />
          <h2>UI/UX Design</h2>
          <p>
            Designing engaging user interfaces with a focus on user experience
            employing best practices to create visually consistent and
            user-friendly designs.
          </p>
        </div>
        <div className="services-container">
          <img src={git} alt="" />
          <h2>Version Control with Git</h2>
          <p>
            Utilizing Git and GitHub for efficient version control and
            collaboration managing codebases and facilitating teamwork on
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
