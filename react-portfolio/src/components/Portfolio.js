import React from "react";
import Project from "./Project";
import caesarImage from "../assets/images/caesar.png";
import theShelveImage from "../assets/images/theshelve.png";
import nightOwlImage from "../assets/images/night-owl.png";
import weatherMonitorImage from "../assets/images/weather-monitor.png";
import javascriptCodingQuizImage from "../assets/images/javascript-coding-quiz.png";
import webAgendaImage from "../assets/images/web-agenda.png";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-projects">
        <Project
          title="Caesar"
          imageSrc={caesarImage}
          liveLink="https://afternoon-mesa-22613-3fdd9a909bc7.herokuapp.com/"
          repoLink="https://github.com/Ruskin20/Travel-Log"
        />
        <Project
          title="The Shelve"
          imageSrc={theShelveImage}
          liveLink="https://theshelve.herokuapp.com/login"
          repoLink="https://github.com/castarke/TheShelve"
        />
        <Project
          title="Night Owl"
          imageSrc={nightOwlImage}
          liveLink="https://victoriamcn.github.io/NightOwl/"
          repoLink="https://github.com/victoriamcn/NightOwl"
        />
        <Project
          title="Weather Monitor"
          imageSrc={weatherMonitorImage}
          liveLink="https://matthewstandish.github.io/weather-monitor/"
          repoLink="https://github.com/MatthewStandish/weather-monitor"
        />
        <Project
          title="Javascript Coding Quiz"
          imageSrc={javascriptCodingQuizImage}
          liveLink="https://matthewstandish.github.io/javascript-coding-quiz/"
          repoLink="https://github.com/MatthewStandish/javascript-coding-quiz"
        />
        <Project
          title="Web Agenda"
          imageSrc={webAgendaImage}
          liveLink="https://matthewstandish.github.io/web-agenda/"
          repoLink="https://github.com/MatthewStandish/web-agenda"
        />
      </div>
    </section>
  );
};

export default Portfolio;
