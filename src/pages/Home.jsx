import { useState,useEffect } from "react";

export function Home() {
  const [text, setText] = useState("");
  const skills = "React, JavaScript, MongoDB, Java, Python";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(skills.slice(0, i));
      i++;
      if (i > skills.length) clearInterval(interval);
    }, 100);
  }, []);

  return (
    <div className="home-container">
      <div className="background-animation"></div>
      <h1 className="glitch-text">Welcome to My Portfolio</h1>
      <p className="intro-text">Web Developer | Cyberpunk Enthusiast</p>
      <div className="terminal-effect">
        <span className="typing-text">{text}</span>
        <span className="cursor">|</span>
      </div>
      <div className="button" >
      <button className="neon-button" onClick={() => window.location.href='/projects'}>Explore My Work</button>
      </div>
      <div className="button" >
      <button className="neon-button" onClick={() => window.location.href='/about'}>About Me</button>
      </div>
      <div className="social-links">
        <a href="https://github.com/SujalPati1" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
        <a href="https://linkedin.com/in/sujal-patil-aa4390259/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
      </div>
    </div>
  );
}