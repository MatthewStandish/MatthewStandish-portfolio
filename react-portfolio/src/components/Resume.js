import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div>
        <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
          No Resume at this time.
        </a>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>Full-Stack Web Development</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
