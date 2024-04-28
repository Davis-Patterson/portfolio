import React from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistImg from '/src/assets/mini-quaist/img2.png';
import QuestionsImg from '/src/assets/questions/img1.png';
import BlackjackImg from '/src/assets/blackjack/img1.png';
import MitunesImg from '/src/assets/mitunes/img1.png';
import ColorsImg from '/src/assets/colors/img1.png';

const Projects = ({ darkMode, activeSection }) => {
  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  return (
    <>
      <div className='project-page-container'>
        <div className='page-img-container'>
          <img
            src={Background}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='title-name' id='about-title'>
          Projects
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='project-page-project-container'>
          <div className='coding-project-container'>
            <p className='project-page-subtitle'>SOFTWARE DEVELOPMENT</p>
          </div>
          <div className='gd-project-container'>
            <p className='project-page-subtitle'>GRAPHIC DESIGN</p>
          </div>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Projects;
