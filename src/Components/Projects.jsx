import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode, activeSection }) => {
  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={null}
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
            View some of my recent work here:
          </p>
        </div>
        <div>
          <Link to='miniquaist'>
            <div className=''>Mini Quaist</div>
          </Link>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Projects;
