import React from "react";

const Project = ({ title, imageSrc, liveLink, repoLink }) => {
  return (
    <div className="project-container">
      <h3>{title}</h3>
      <div className="image-container">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>
      <p>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Link
        </a>
      </p>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Repo Link
        </a>
      </p>
    </div>
  );
};

export default Project;
