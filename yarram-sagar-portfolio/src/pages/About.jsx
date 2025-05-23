import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <div className="about-box">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech in Computer Science Engineering</strong> – Kallam Haranadha Reddy Institute of Technology, Guntur (Expected: 2025)</li>
          <li><strong>Intermediate (MPC)</strong> – Vidyardhi Junior College Incentive, Kondamodu (Completed: 2021)</li>
          <li><strong>SSC</strong> – Z.P.H. School Machavaram, Palnadu (Completed: 2019)</li>
        </ul>
      </div>

      <div className="about-box">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript, Redux</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Languages:</strong> Python, JavaScript</li>
          <li><strong>Machine Learning:</strong> Basics (Regression, Classification)</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, MongoDB Atlas, Jupyter</li>
        </ul>
      </div>

      <div className="about-box">
        <h2>Career Objective</h2>
        <p>
          Aspiring MERN stack developer and Python enthusiast seeking to apply strong technical and problem-solving skills in a web development or software engineering role. Eager to contribute to real-world, impactful projects.
        </p>
      </div>

      <div className="about-box">
        <h2>Certifications</h2>
        <ul>
          <li>Introduction to Machine Learning using Python – edX</li>
          <li>Full Stack MERN Development – SmartInternz</li>
          <li>Python for Beginners – Udemy</li>
          <li>Node.js Developer Path – MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
