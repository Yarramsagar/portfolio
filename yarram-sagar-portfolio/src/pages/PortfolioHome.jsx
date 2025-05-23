import React from 'react';
import './PortfolioHome.css';
import { TypeAnimation } from 'react-type-animation';
import profilePic from './sagar.png'; // your image path

function PortfolioHome() {
  return (
    <div className="portfolio-home">
      {/* Profile Intro Box */}
      <div className="home-box">
        <div className="text-section">
          <h1 className="home-title">Yarram Sagar</h1>
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'Full Stack Engineer',
              2000,
              'Python Enthusiast',
              2000,
              'Tech Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="animated-role"
            repeat={Infinity}
          />
          <div className="home-box">
  <div className="text-section full">
    <h2 className="box-title">🧾 Profile Summary</h2>
    <p className="info-text">
      Passionate and detail-oriented Computer Science Engineering student (B.Tech, 2025) with strong expertise in MERN stack development and foundational knowledge in Python and basic Machine Learning.
      Skilled in building scalable, responsive web applications, creating RESTful APIs, and collaborating in agile environments. Proficient with Git, MongoDB Atlas, and modern development tools. Eager to contribute to innovative tech projects and grow as a full-stack developer.
    </p>
  </div>
</div>
        </div>
        <div className="image-section">
          <img src={profilePic} alt="Yarram Sagar" className="profile-photo" />
        </div>
      </div>

      {/* Education Box */}
      <div className="home-box">
        <div className="text-section full">
          <h2 className="box-title">🎓 Education</h2>
          <ul className="info-list">
            <li><strong>B.Tech in CSE</strong> – Kallam Haranadha Reddy Institute of Technology, Guntur (2021–2025)</li>
            <li><strong>Intermediate (MPC)</strong> – Vidyardhi Jr College, Rajupalem (2019–2021)</li>
            <li><strong>SSC</strong> – Z.P.H. School, Machavaram (Completed in 2019)</li>
          </ul>
        </div>
      </div>
      {/* Certificates Section */}
<div className="box-section certificates-section">
  <h2>📜 Completion Certificates</h2>
  <div className="certificates-grid">
    
    <div className="certificate-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1149/1149168.png" alt="ML with Python" />
      <h3>Machine Learning using Python – edX</h3>
      <p>Learned the basics of supervised and unsupervised algorithms, including regression, classification, and clustering, using Python and real datasets.</p>
    </div>

    <div className="certificate-card">
    <img src="https://img.icons8.com/color/96/000000/c-programming.png" alt="C Programming Icon" />
      <h3>C Programming – CodeTantra</h3>
      <p>Acquired foundational programming skills using C language, covering control structures, functions, arrays, and memory management.</p>
    </div>

    <div className="certificate-card">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python Programming" />
      <h3>Python Programming – CodeTantra</h3>
      <p>Gained hands-on experience with Python syntax, data structures, and scripting basics to automate tasks and solve problems efficiently.</p>
    </div>

    <div className="certificate-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="MERN Stack Certificate" />
      <h3>Full Stack MERN Development – SmartInternz</h3>
      <p>Built real-world web apps using MongoDB, Express, React, and Node.js. Implemented full authentication, routing, and RESTful APIs.</p>
    </div>

    <div className="certificate-card">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python for Beginners" />
      <h3>Python for Beginners – Udemy</h3>
      <p>Covered fundamentals of Python programming with beginner projects, including loops, conditionals, functions, and file I/O.</p>
    </div>

    <div className="certificate-card">
    <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node.js Developer" />
      <h3>Node.js Developer Path – MongoDB</h3>
      <p>Learned how to build scalable server-side apps using Node.js, Express, and MongoDB. Focused on API creation, middleware, and async handling.</p>
    </div>

    {/* Skills Section */}
<div className="box-section skills-section">
  <h2>🛠️ Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">HTML5</div>
    <div className="skill-card">CSS3</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">React.js</div>
    <div className="skill-card">Node.js</div>
    <div className="skill-card">Express.js</div>
    <div className="skill-card">MongoDB</div>
    <div className="skill-card">Python</div>
    <div className="skill-card">Git & GitHub</div>
    <div className="skill-card">REST APIs</div>
    <div className="skill-card">VS Code</div>
    <div className="skill-card">Linux Basics</div>
  </div>
</div>

  </div>
</div>

    </div>
     );
    };

export default PortfolioHome;
