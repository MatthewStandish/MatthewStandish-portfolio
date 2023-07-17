import React from "react";
import "../styles/About.css";
import avatarImage from "../assets/images/avatar.jpg";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="about-content">
        <img src={avatarImage} alt="Avatar" />
        <p>
          I am currently enrolled in Georgia Tech's full-stack web development
          bootcamp. Prior to this, I earned an Adobe Certified Associate
          certificate, which solidified my interest in graphic design and web
          development. As a budding web developer, I'm actively seeking
          opportunities to apply my technical expertise and creative talents to
          real-world projects. My ultimate goal is to make a meaningful impact
          in the industry while advancing my career.
        </p>
      </div>
    </section>
  );
};

export default About;
