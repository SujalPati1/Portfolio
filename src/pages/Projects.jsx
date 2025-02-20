import { useState } from "react";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const projects = [
    { name: "Spotify Clone", description: "A full-stack music streaming platform using MongoDB.", techStack: "Html, CSS, Node.js, MongoDB", link: "https://github.com/SujalPati1/Music-Website" },
    { name: "Decentralized Voting System", description: "A blockchain-based voting system ensuring security and transparency.", techStack: "React, Solidity, Blockchain", link: "https://github.com/yourgithub/voting-system" },
    { name: "V-Vibe Volunteer Management", description: "A volunteer management system using Firebase.", techStack: "Java, XML, Firebase", link: "https://github.com/SujalPati1/Volunteer_Management_System" }
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.techStack.toLowerCase().includes(searchTerm.toLowerCase())
  );  
  
  return (
      <div className="projects-container">
      <div className="background-animation"></div>

      <h1 className="glitch-text">My Projects</h1>
      <input 
        type="text" 
        placeholder="Search projects..." 
        className="search-bar"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="neon-text">{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="neon-button">View Project</a>
          </div>
        ))}
      </div>
    </div>
    );
  }
  