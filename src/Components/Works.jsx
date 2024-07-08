import React from "react";
import "./Works.css";
import todo_app from "../assets/todo.png";
import uni_web from "../assets/university.png";
import weather_app from "../assets/weather.png";

const Works = () => {
  return (
    <div id="work" className="works">
      <div className="work-title">
        <h1>My latest works</h1>
      </div>
      <div className="work-containers">
        <div className="work-container">
          <a
            href="https://github.com/shishirbohara/University"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={uni_web} alt="University Website Project" />
          </a>
        </div>
        <div className="work-container">
          <a
            href="https://github.com/shishirbohara/Todolist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={todo_app} alt="Todo App Project" />
          </a>
        </div>
        <div className="work-container">
          <a
            href="https://github.com/shishirbohara/Weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weather_app} alt="Weather App Project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
