import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
const Hero = () => {

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>

          <div>
            <span>IDEAL BODY</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figure */}
        <div className="figures">
          <div>
            <span><NumberCounter end = {140} start = {90} delay ='2' preFix="+"/></span>

            <span>EXPERT COACHES</span>
          </div>

          <div>
          <span><NumberCounter end = {978} start = {928} delay ='2' preFix="+"/></span>

            <span>MEMBERS JOINED</span>
          </div>

          <div>
          <span><NumberCounter end = {50} start = {0} delay ='2' preFix="+"/></span>


            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* the two bottons */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories div */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
