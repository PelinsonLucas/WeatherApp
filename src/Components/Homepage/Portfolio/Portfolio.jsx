import React from 'react';
import './Portfolio.css'; // Assuming you have a corresponding CSS file

import screenshot1 from '../../Assets/weatherapp.png'; // Replace with your screenshot path

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-section">
      <h2 className="section-title animated">My Projects</h2>
      <div className="projects animated">
        <a href="/weather" className="project">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">This is a brief description of Project 1.</p>
          <img src={screenshot1} alt="Project 1 Screenshot" className="project-screenshot" />
        </a>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Portfolio;