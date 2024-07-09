import React from "react";
import "./About.css";
import html_icon from "../assets/html.png";
import css_icon from "../assets/css.png";
import JavaScript_icon from "../assets/js.png";
import tailwind_icon from "../assets/tailwind.png";
import nodejs_icon from "../assets/node.png";
import mongodb_icon from "../assets/mongo.png";
import github_icon from "../assets/github.png";
import react_icon from "../assets/react.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="about-para">
            <p>
              With a strong foundation in HTML, CSS, and JavaScript, I
              specialize in crafting responsive, user-friendly interfaces that
              provide seamless user experiences.
            </p>
            <p>
              I am constantly learning and expanding my skill set to stay
              updated with the latest trends and technologies in the web
              development world.
            </p>
          </div>
          <div className="about-skills">
            <div>
              <h1>Skills:</h1>
            </div>

            <div className="about-skill">
              <img src={html_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={css_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={JavaScript_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={tailwind_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={react_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={nodejs_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={mongodb_icon} alt="" />
            </div>
            <div className="about-skill">
              <img src={github_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
