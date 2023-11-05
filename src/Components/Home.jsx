import React from 'react';
import { HashLink } from 'react-router-hash-link';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';

const Home = ({ activeSection }) => {
  const blueStyle = {
    width: activeSection === 'home' ? '50px' : '200px',
    opacity: activeSection === 'home' ? '100%' : '0%',
  };

  return (
    <>
      <div className='home-container'>
        <div className='page-img-container'>
          <img
            src={geometricTexture}
            alt='background img'
            className='page-img'
          />
        </div>
        <h1 className='hello-subtext'>Hello, my name is</h1>
        <h1 className='title-name'>Davis Patterson</h1>
        <h1 className='title-subtext'>
          Dedicated and enthusiastic software developer with a passion for
          coding and an eagerness to contribute to team projects.
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <HashLink smooth to='/#projects' className='home-projects-link'>
          <div className='home-projects-button'>Projects</div>
        </HashLink>
        <div className='gap' />
      </div>
    </>
  );
};

export default Home;
