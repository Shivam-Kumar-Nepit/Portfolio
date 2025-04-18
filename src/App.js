
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub,
  faPython, faReact
} from '@fortawesome/free-brands-svg-icons';
import './App.css'

const App = () => {
  return (
    <div className="portfolio-container">
      <header>
        <div className="profile-photo"></div>
        <div className="header-content">
          <h1>Shivam Kumar Nepit</h1>
          <div className="social-icons">
            <a href=
              "https://www.linkedin.com/in/shivam-kumar-nepit-881bb3351/"
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href=
              "https://github.com/Shivam-Kumar-Nepit/Crud-Project" target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </header>
      <div className="content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Shivam Kumar Nepit, a passionate
            web developer with a strong
            foundation in React and JavaScript.
            I love building engaging and interactive
            web applications.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-tiles">
           CRUD<br/>
           LANDING PAGE
          </div>
        </section>
        <section className="skillset">
          <h2>Skillset</h2>
          <div className="palettes">
            <div>

              <FontAwesomeIcon icon={faPython} size="3x" />
              <FontAwesomeIcon icon={faReact} size="3x" />
            </div>
          </div>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          Fresher

        </section>
        <section className="contact">
          <h2>Contact</h2>
          <div>
            Father’s Name: Mr. RajaRam Nepit
          </div>
          <div>
            Mother’s Name: Preama Devi
          </div>
          <div>
            Date of Birth: 15 Dec 2003
          </div>
          <div>
            Languages Known: English, Hindi
          </div>
          <div>
            Nationality: Indian
          </div>
          <div>
            Hobbies: Playing  Cricket,
            Listening Music,
            Competitive Coding
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

