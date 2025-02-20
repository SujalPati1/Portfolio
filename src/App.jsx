import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Projects} from "./pages/Projects.jsx";
import { About } from "./pages/About.jsx";
import "./App.css";
import "./Home.css"
import "./Projects.css"
import "./About.css"

function App() {
  return (
    <Router>
      <div className="app-container cyberpunk-theme">
        <nav className="navbar">
          <Link to="/" className="nav-link neon-text">Home</Link>
          <Link to="/projects" className="nav-link neon-text">Projects</Link>
          <Link to="/about" className="nav-link neon-text">About</Link>
        </nav>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;