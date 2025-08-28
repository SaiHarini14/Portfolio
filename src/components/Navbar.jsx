import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SAI HARINI G</div>
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li>
          <a href="/resume.pdf" download className="resume-btn">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
