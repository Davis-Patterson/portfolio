import React from 'react';
import headshotCircle from '/src/assets/about/headshot-circle.png';
import cityBokeh from '/src/assets/backgrounds/city-bokeh.jpg';
import linkedinLogo from '/src/assets/footer/linkedin-logo.svg';
import githubLogo from '/src/assets/footer/github-logo.svg';
import linkedinLogoWhite from '/src/assets/nav/linkedin-logo.svg';
import githubLogoWhite from '/src/assets/nav/github-logo.svg';

const About = ({ activeSection, darkMode }) => {
  const blueStyle = {
    width: activeSection === 'about' ? '50px' : '200px',
    opacity: activeSection === 'about' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={cityBokeh}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='title-name' id='about-title'>
          About Me
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='about-content'>
          <div className='about-description-container' id='about-desc-cont'>
            <p className='hello-there' id='hello-there'>
              Hello there!
            </p>
            <p className='about-description' id='about-desc'>
              My name is Davis Patterson, a resident of Florida with roots in
              New York City. My professional journey has been centered in media
              technology. The onset of the COVID-19 pandemic, however, brought
              significant disruption to the industry, compelling me to undergo a
              career change.
            </p>
            <p className='about-description' id='about-desc'>
              During this transition I discovered a love for coding, gravitating
              towards front-end development. A fervent passion for creating
              interactive, user-friendly interfaces was ignited along with a
              desire to excel in the digital landscape. This enthusiasm is about
              bringing innovation, aesthetics, and functionality together to
              build web experiences that resonate with users.
            </p>
            <p className='about-description' id='about-desc'>
              My commitment to constant learning and the relentless pursuit of
              excellence in my craft underscore my dedication and exemplify my
              passion. I possess an eagerness to contribute as a member of a
              collaborative team, and I am enthusiastic about exploring diverse
              development opportunities.
            </p>
            <div className='extra-info'>
              <div className='skills-container'>
                <p className='skills-title' id='about-skills-title'>
                  My Skills:
                </p>
                <div className='skills-list'>
                  <p className='skill tag'>React</p>
                  <p className='skill tag'>JavaScript</p>
                  <p className='skill tag'>HTML</p>
                  <p className='skill tag'>CSS</p>
                  <p className='skill tag'>Python</p>
                  <p className='skill tag'>Django</p>
                  <p className='skill tag'>GIT</p>
                  <p className='skill tag'>GitHub</p>
                </div>
              </div>
              <div className='socials-container'>
                <p className='skills-title' id='about-socials-title'>
                  My Socials:
                </p>
                <div className='about-socials'>
                  <a
                    href='https://www.linkedin.com/in/davispatterson/'
                    className='about-link'
                  >
                    <img
                      src={darkMode ? linkedinLogoWhite : linkedinLogo}
                      alt='linkedin logo'
                      className='about-link-logo'
                    />
                  </a>
                  <a
                    href='https://github.com/Davis-Patterson'
                    className='about-link'
                  >
                    <img
                      src={darkMode ? githubLogoWhite : githubLogo}
                      alt='github logo'
                      className='about-link-logo'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about-img' id='about-img'>
            <img
              src={headshotCircle}
              alt='headshot'
              className='about-headshot'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
