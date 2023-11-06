import React from 'react';
import { HashLink } from 'react-router-hash-link';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';
import scrollLight from '/src/assets/home/scroll-light.gif';
import scrollDark from '/src/assets/home/scroll-dark.gif';

const Home = ({ activeSection, darkMode }) => {
  const blueStyle = {
    width: activeSection === 'home' ? '50px' : '200px',
    opacity: activeSection === 'home' ? '100%' : '0%',
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
        <h1 className='hello-subtext'>Hello, my name is</h1>
        <h1 className='title-name'>Davis Patterson</h1>
        <h1 className='title-subtext'>
          Dedicated and enthusiastic software developer with a passion for
          coding and an eagerness to contribute to team projects.
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <HashLink smooth to='/#about' className='home-projects-link'>
          <div className='home-projects-button'>About</div>
        </HashLink>
        <HashLink smooth to='/#projects' className='home-projects-link'>
          <div className='home-projects-button'>Projects</div>
        </HashLink>
        <HashLink smooth to='/#contact' className='home-projects-link'>
          <div className='home-projects-button'>Contact</div>
        </HashLink>
        <div className='scroll-icon-container'>
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

export default Home;
