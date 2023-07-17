import React from "react";

const Project = ({ title, imageSrc, liveLink, repoLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} />
      <p>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </p>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
};

export default Project;
