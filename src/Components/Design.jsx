import React from 'react';
import { Link } from 'react-router-dom';
import RobynRobyns from '/src/assets/projects/robynrobynsimg.png';

const Design = ({ darkMode, activeSection }) => {
  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  return (
    <>
      <div className='landing-page-container'>
        <div className='page-img-container'>
          <img
            src={Background}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='sd-name' id='about-title'>
          Graphic Design
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='project-page-project-container'>
          <div className='gd-project-container'>
            <p className='project-page-subtitle'>GRAPHIC DESIGN</p>
            <Link to='/#hello'>
              <div className='project-page-item'>
                <img
                  src={RobynRobyns}
                  alt='Robyn Robyns image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>
                  Robyn Robyn's Services
                </div>
              </div>
            </Link>
            <Link to='/#hello'>
              <div className='project-page-item'>
                <img
                  src={null}
                  alt='Retro Judah image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>Retro Judah</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Design;
