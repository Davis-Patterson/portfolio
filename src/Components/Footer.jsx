import React from 'react';
import { HashLink } from 'react-router-hash-link';
import linkedinLogo from '/src/assets/footer/linkedin-logo.svg';
import githubLogo from '/src/assets/footer/github-logo.svg';
import linkedinLogoWhite from '/src/assets/nav/linkedin-logo.svg';
import githubLogoWhite from '/src/assets/nav/github-logo.svg';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';

const Footer = ({ darkMode }) => {
  return (
    <>
      <div className='footer-container'>
        {/* <div className='page-img-container'>
          <img
            src={geometricTexture}
            alt='background img'
            className='page-img'
          />
        </div> */}
        <div className='footer-content' id='footer-content'>
          <div className='attribution'>
            <h1 className='footer-name' id='footer-name'>
              DAVIS PATTERSON
            </h1>
            <h1 className='footer-subtext' id='footer-subtext'>
              Software developer seeking opportunities to leverage skills and
              collaborate with industry professionals.
            </h1>
          </div>
          <div className='social-container'>
            <h1 className='socials-name' id='socials-name'>
              SOCIALS
            </h1>
            <div className='socials'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/davispatterson/'
                className='footer-link'
              >
                <img
                  src={darkMode ? linkedinLogoWhite : linkedinLogo}
                  alt='linkedin logo'
                  className='link-logo'
                />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Davis-Patterson'
                className='footer-link'
              >
                <img
                  src={darkMode ? githubLogoWhite : githubLogo}
                  alt='github logo'
                  className='link-logo'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-footer' id='footer-footer'>
          <p className='footer-footer-text'>
            © Copyright 2023. Made by{' '}
            <HashLink smooth to='/#hello' className='footer-text-link'>
              Davis Patterson
            </HashLink>
            .
          </p>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Footer;
