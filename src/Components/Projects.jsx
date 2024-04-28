import React from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistImg from '/src/assets/mini-quaist/img2.png';
import QuestionsImg from '/src/assets/questions/img1.png';
import BlackjackImg from '/src/assets/blackjack/img1.png';
import MitunesImg from '/src/assets/mitunes/img1.png';
import robynrobyns from '/src/assets/projects/robynrobynsimg.png';

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
          <Link to='/development' className='coding-link'>
            <div className='coding-project-container'>
              <p className='project-page-subtitle'>SOFTWARE DEVELOPMENT</p>
              <img
                src={MiniquaistImg}
                alt='software development image'
                className='project-page-item-image'
              />
            </div>
          </Link>
          <Link to='/design' className='design-link'>
            <div className='gd-project-container'>
              <p className='project-page-subtitle'>GRAPHIC DESIGN</p>
              <img
                src={robynrobyns}
                alt='graphic design image'
                className='project-page-item-image'
              />
            </div>
          </Link>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Projects;
