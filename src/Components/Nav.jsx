import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import headshotLogo from "/src/assets/nav/headshot-logo-background-white.svg";
import linkedinLogo from "/src/assets/nav/linkedin-logo.svg";
import githubLogo from "/src/assets/nav/github-logo.svg";

const Nav = () => {
  const location = useLocation();

  const isActive = (hash) => {
    if (location.hash === "" && hash === "#home") {
      return true;
    }
    return location.hash === hash;
  };

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-contents'>
          <div className='home-button-container'>
            <HashLink smooth to='/#home' className='home-button'>
              <img
                src={headshotLogo}
                alt='headshot logo'
                className='headshot-logo'
              />
            </HashLink>
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
          </div>
          <div className='nav-buttons-container'>
            <HashLink
              smooth
              to='/#home'
              className={`nav-button ${isActive("#home") ? "active" : ""}`}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to='/#info'
              className={`nav-button ${isActive("#info") ? "active" : ""}`}
            >
              Info
            </HashLink>
            <HashLink
              smooth
              to='/#projects'
              className={`nav-button ${isActive("#projects") ? "active" : ""}`}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to='/#contact'
              className={`nav-button ${isActive("#contact") ? "active" : ""}`}
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
