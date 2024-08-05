import React from "react";
import "./Hero.css";
import profile from "../assets/Shishir.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <div className="hero-container">
        <h1>
          <span>I'm Shishir Bohara,</span> frontend developer.
        </h1>
        <p>
          I'm a passionate front-end developer with a strong foundation in
          creating visually appealing and user-friendly websites.
        </p>
      </div>
    </div>
  );
};

export default Hero;
