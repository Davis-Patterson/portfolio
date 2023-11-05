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
  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img src={cityBokeh} alt='background img' className='page-img' />
        </div>
        <h1 className='title-name'>About Me</h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='about-content'>
          <div className='about-description-container'>
            <p className='hello-there'>Hello there!</p>
            <p className='about-description'>
              My name is Davis Patterson, a resident of Florida with roots in
              New York City. My professional journey has been centered in media
              technology. I pursued an education in audio technology and
              subsequently began a career as an Audio Engineer in NYC.
            </p>
            <p className='about-description'>
              The onset of the COVID-19 pandemic, however, brought significant
              disruption to the industry, compelling me to undergo a career
              change. During this transition I discovered a love for coding,
              gravitating towards front-end development specifically with React.
            </p>
            <p className='about-description'>
              My commitment to constant learning and the relentless pursuit of
              excellence in my craft underscore my dedication and exemplify my
              passion. I possess an eagerness to contribute as a member of a
              collaborative team, and I am enthusiastic about exploring diverse
              development opportunities.
            </p>
            {/* <p className='about-description'>
              Thank you for your consideration!
            </p> */}
            <div className='extra-info'>
              <div className='skills-container'>
                <p className='skills-title'>My Skills:</p>
                <div className='skills-list'>
                  <p className='skill'>React</p>
                  <p className='skill'>JavaScript</p>
                  <p className='skill'>HTML</p>
                  <p className='skill'>CSS</p>
                  <p className='skill'>Python</p>
                  <p className='skill'>Django</p>
                  <p className='skill'>GIT</p>
                  <p className='skill'>GitHub</p>
                </div>
              </div>
              <div className='socials-container'>
                <p className='skills-title'>My Socials:</p>
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
          <div className='about-img'>
            <img
              src={headshotCircle}
              alt='headshot'
              className='about-headshot'
            />
          </div>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default About;
