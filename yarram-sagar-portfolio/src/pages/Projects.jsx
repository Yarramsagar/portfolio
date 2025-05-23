import React from 'react';
import './Projects.css';
import fundasticImage from '../assets/background.jpg'; // replace with your actual image path

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-box">
        <img src={fundasticImage} alt="Fundastic Project" className="project-image" />
        <div className="project-content">
          <h2>Fundastic – Fundraising Made Easy</h2>
          <p>
            A full-stack fundraising platform built using the MERN stack. It allows users to create, view, and donate to fundraising campaigns. Includes secure authentication using JWT and MongoDB Atlas for database management.
          </p>
          <ul>
            <li>Frontend: React.js, CSS, React Router</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB + Mongoose</li>
            <li>Authentication: JWT, bcrypt</li>
          </ul>
        </div>
      </div>

      {/* Add more project-box sections here */}
    </div>
  );
};

export default Projects;
