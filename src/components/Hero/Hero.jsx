import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';

const Hero = () => {

  

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1 }
    }
  };

  const transition = {type: 'spring' , duration:3}
  const moile = window.innerWidth<=768 ? true:false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
        <motion.div
          
          initial={{left: moile? "178px": "238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
        ></motion.div>
        <span>the best fitness club in town</span>
      </div> 
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
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
        </motion.div>

        {/* figure */}
        <motion.div
          className="figures"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div>
            <span><NumberCounter end={140} start={90} delay='2' preFix="+" /></span>
            <span>EXPERT COACHES &nbsp;&nbsp;</span>
          </div>

          <div>
            <span><NumberCounter end={978} start={928} delay='2' preFix="+" /></span>
            <span>MEMBERS JOINED &nbsp;&nbsp;</span>
          </div>

          <div>
            <span><NumberCounter end={50} start={0} delay='2' preFix="+" /></span>
            <span>FITNESS PROGRAMS &nbsp;&nbsp;</span>
          </div>
        </motion.div>

        {/* the two buttons */}
        <motion.div
          className="hero-button"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </motion.div>
      </div>

      <div className="right-h">
        <motion.button
          className="btn"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          Join Now
        </motion.button>

        <motion.div
        
          initial={{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <motion.img
          src={hero_image}
          alt=""
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        />
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{right: "11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}

        />

        {/* calories div */}
        <motion.div
          className="calories"
          initial={{right: "37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
