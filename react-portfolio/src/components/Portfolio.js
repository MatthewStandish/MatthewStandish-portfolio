import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <Project
          title="Caesar"
          imageSrc="../assets/images/caesar.png"
          liveLink="https://afternoon-mesa-22613-3fdd9a909bc7.herokuapp.com/"
          repoLink="hhttps://github.com/Ruskin20/Travel-Log"
        />
        <Project
          title="The Shelve"
          imageSrc="../assets/images/theshelve.png"
          liveLink="https://theshelve.herokuapp.com/login"
          repoLink="https://github.com/castarke/TheShelve"
        />
        <Project
          title="Night Owl"
          imageSrc="../assets/images/night-owl.png"
          liveLink="https://victoriamcn.github.io/NightOwl/"
          repoLink="https://github.com/victoriamcn/NightOwl"
        />
        <Project
          title="Weather Monitor"
          imageSrc="../assets/images/weather-monitor.png"
          liveLink="https://matthewstandish.github.io/weather-monitor/"
          repoLink="https://github.com/MatthewStandish/weather-monitor"
        />
        <Project
          title="Javascript Coding Quiz"
          imageSrc="../assets/images/javascript-coding-quiz.png"
          liveLink="https://matthewstandish.github.io/javascript-coding-quiz/"
          repoLink="https://github.com/MatthewStandish/javascript-coding-quiz"
        />
        <Project
          title="Web Agenda"
          imageSrc="../assets/images/web-agenda.png"
          liveLink="https://matthewstandish.github.io/web-agenda/"
          repoLink="https://github.com/MatthewStandish/web-agenda"
        />
      </div>
    </section>
  );
};

export default Portfolio;
