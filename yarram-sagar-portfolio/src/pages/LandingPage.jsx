import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <section className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Yarram Sagar's Portfolio</h1>

        <div className="animated-words">
          <span>Python</span>
          <span>Data Science</span>
          <span>Full Stack Developer</span>
        </div>

        <button className="landing-button" onClick={handleClick}>
          Click Here
        </button>
      </div>

      <div className="landing-image-container">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
          alt="Developer working"
          className="landing-image"
        />
      </div>
    </section>
  );
}

export default LandingPage;
