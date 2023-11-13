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
            <div className='about-desc-box' id='about-desc-box'>
              <p className='hello-there' id='hello-there'>
                Hello there!
              </p>
              <p className='about-description' id='about-desc'>
                My name is Davis Patterson, a current resident of Florida with
                roots in New York City. My professional journey began in media
                technology at Ithaca College and continued at the School of
                Audio Engineering in New York. The onset of the COVID-19
                pandemic, however, brought significant disruption to the
                industry, compelling me to undergo a career change.
              </p>
              <p className='about-description' id='about-desc'>
                During this transition, I completed Momentum's full-time 16-week
                intensive full-stack engineering bootcamp where I discovered a
                love for coding, gravitating towards front-end development. I
                particularly enjoy bringing together innovation, aesthetics, and
                functionality to build a web experience that will resonate with
                the user.
              </p>
              <p className='about-description' id='about-desc'>
                I am committed to continuous learning and strive for excellence
                in my work. I am eager to explore various development
                opportunities and to contribute effectively as a member of a
                collaborative team.
              </p>
            </div>
            <div className='about-img' id='about-img'>
              <img
                src={headshotCircle}
                alt='headshot'
                className='about-headshot'
              />
            </div>
          </div>
          <div className='extra-info' id='extra-info'>
            <div className='skills-container'>
              <p className='skills-title' id='about-skills-title'>
                Skills:
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
            <div className='certs-container'>
              <p className='skills-title' id='about-skills-title'>
                Certifications:
              </p>
              <div className='skills-list'>
                <p className='skill tag'>MTA Security</p>
                <p className='skill tag'>CompTia Server+</p>
                <p className='skill tag'>CompTia Network+</p>
              </div>
            </div>
            <div className='socials-container'>
              <p className='skills-title' id='about-socials-title'>
                Socials:
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
      </div>
    </>
  );
};

export default About;
