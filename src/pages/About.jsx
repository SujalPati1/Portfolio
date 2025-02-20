export function About() {
  return (
    <div className="about-container">
      <div className="background-animation"></div>
      <h1 className="glitch-text">About Me</h1>
      <p className="about-description">
        I'm a passionate web developer with a deep love for cyberpunk aesthetics and cutting-edge technology.
        My journey in coding started with Java and expanded into React, Python, MongoDB, and Firebase.
      </p>
      <div className="skills-container">
        <h2 className="neon-text">Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="tech-stack-container">
        <h2 className="neon-text">Tech Stack</h2>
        <div className="tech-icons">
          <img src="/assets/react.svg" alt="React" className="tech-icon" />
          
          <img src="/assets/node.svg" alt="Node.js" className="tech-icon" />
          <img src="/assets/mongodb.svg" alt="MongoDB" className="tech-icon" />
          <img src="/assets/java.svg" alt="Java" className="tech-icon" />
        </div>
      </div>
      <div className="resume-section">
        <a href="/assets/resume.pdf" download className="neon-button">Download Resume</a>
      </div>
      <div className="fun-facts">
        <h2 className="neon-text">Fun Facts</h2>
        <ul className="fun-facts-list">
          <li>Dream Tech City: Tokyo</li>
          <li>Favorite Game: Prince of Persia: Warrior Within</li>
        </ul>
      </div>
    </div>
  );
}