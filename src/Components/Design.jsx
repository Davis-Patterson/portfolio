import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RobynRobyns1 from '/src/assets/gd/robynrobynsimg1.png';
import RJoverlay from '/src/assets/gd/RJoverlay.png';
import RJcountdown from '/src/assets/gd/RJcountdown.png';
import Background from '/src/assets/projects/vscode-blur.png';

const Design = ({ darkMode, activeSection }) => {
  const blueStyle = {
    width: activeSection === 'design' ? '50px' : '200px',
    opacity: activeSection === 'design' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className='landing-page-project-container'>
          <div className='gd-project-container'>
            <Link to='/#home' className='landing-link'>
              <div className='project-page-item'>
                <img
                  src={RobynRobyns1}
                  alt='Robyn Robyns image'
                  className='landing-page-item-image'
                />
                <div className='project-page-item-text'>
                  Robyn Robyn's Services
                </div>
              </div>
            </Link>
            <Link to='/#home' className='landing-link'>
              <div className='project-page-item'>
                <img
                  src={RJcountdown}
                  alt='Retro Judah image'
                  className='landing-page-item-image'
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
