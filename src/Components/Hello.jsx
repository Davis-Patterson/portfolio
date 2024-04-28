import React from 'react';
import { HashLink } from 'react-router-hash-link';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';
import scrollLight from '/src/assets/home/scroll-light.gif';
import scrollDark from '/src/assets/home/scroll-dark.gif';

const Hello = ({ activeSection, darkMode }) => {
  const blueStyle = {
    width: activeSection === 'hello' ? '50px' : '200px',
    opacity: activeSection === 'hello' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  return (
    <>
      <div className='home-container'>
        <div className='page-img-container'>
          <img
            src={geometricTexture}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='hello-subtext' id='hello-subtext'>
          Hello, my name is
        </h1>
        <h1 className='title-name' id='title-name'>
          Davis Patterson
        </h1>
        <h1 className='title-subtext' id='title-subtext'>
          Software developer seeking opportunities to leverage skills and
          collaborate with industry professionals.
        </h1>
        <hr className='page-break-blue' style={blueStyle} id='about-blue' />
        <HashLink
          smooth
          to='/#about'
          className='home-projects-link'
          id='about-link'
        >
          <div className='home-projects-button' id='about-button'>
            About
          </div>
        </HashLink>
        <HashLink
          smooth
          to='/#projects'
          className='home-projects-link'
          id='projects-link'
        >
          <div className='home-projects-button' id='projects-button'>
            Projects
          </div>
        </HashLink>
        <HashLink
          smooth
          to='/#contact'
          className='home-projects-link'
          id='contact-link'
        >
          <div className='home-projects-button' id='contact-button'>
            Contact
          </div>
        </HashLink>
        <div className='scroll-icon-container' id='scroll-icon-cont'>
          <HashLink smooth to='/#about' className='scroll-link'>
            <img
              src={darkMode ? scrollDark : scrollLight}
              alt='scroll icon'
              className='scroll-icon'
            />
          </HashLink>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Hello;
