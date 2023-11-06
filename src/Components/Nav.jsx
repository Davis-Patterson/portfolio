import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import headshotIcon from '/src/assets/nav/headshot-icon-zoom.png';
import linkedinLogo from '/src/assets/nav/linkedin-logo.svg';
import githubLogo from '/src/assets/nav/github-logo.svg';
import MaterialUISwitch from './MaterialUISwitch';

const Nav = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const isActive = (sectionId) => {
    const currentSection = activeSection || 'home';
    return currentSection === sectionId;
  };

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-contents'>
          <div className='home-button-container'>
            <HashLink smooth to='/#home' className='home-button'>
              <img
                src={headshotIcon}
                alt='headshot logo'
                className='headshot-logo'
              />
            </HashLink>
            <div className='home-button-adjacent'>
              <a
                href='https://www.linkedin.com/in/davispatterson/'
                className='nav-link'
              >
                <img
                  src={linkedinLogo}
                  alt='linkedin logo'
                  className='link-logo'
                />
              </a>
              <a href='https://github.com/Davis-Patterson' className='nav-link'>
                <img src={githubLogo} alt='github logo' className='link-logo' />
              </a>
              <MaterialUISwitch
                checked={darkMode}
                onChange={handleDarkModeChange}
                className='dark-toggle'
              />
            </div>
          </div>
          <div className='nav-buttons-container'>
            <HashLink
              smooth
              to='/#home'
              className={`nav-button ${isActive('home') ? 'active' : ''}`}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to='/#about'
              className={`nav-button ${isActive('about') ? 'active' : ''}`}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to='/#projects'
              className={`nav-button ${isActive('projects') ? 'active' : ''}`}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to='/#contact'
              className={`nav-button ${isActive('contact') ? 'active' : ''}`}
            >
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
