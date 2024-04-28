import React from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistImg from '/src/assets/mini-quaist/img2.png';
import QuestionsImg from '/src/assets/projects/questions.png';
import BlackjackImg from '/src/assets/blackjack/img1.png';
import MitunesImg from '/src/assets/mitunes/img1.png';
import ColorsImg from '/src/assets/colors/img1.png';

const Coding = ({ darkMode, activeSection }) => {
  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  return (
    <>
      <div className='landing-page-container'>
        <div className='page-img-container'>
          <img
            src={Background}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='sd-name' id='about-title'>
          Software Development
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='project-page-project-container'>
          <div className='coding-project-container'>
            <Link to='miniquaist'>
              <div className='project-page-item'>
                <img
                  src={MiniquaistImg}
                  alt='miniquaist image'
                  className='project-page-item-image'
                />
                <p className='project-page-item-text'>Mini Quaist</p>
              </div>
            </Link>
            <Link to='questions'>
              <div className='project-page-item'>
                <img
                  src={QuestionsImg}
                  alt='questions image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>Questions!</div>
              </div>
            </Link>
            <Link to='blackjack'>
              <div className='project-page-item'>
                <img
                  src={BlackjackImg}
                  alt='blackjack image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>Blackjack</div>
              </div>
            </Link>
            <Link to='MiTunes'>
              <div className='project-page-item'>
                <img
                  src={MitunesImg}
                  alt='mitunes image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>MiTunes</div>
              </div>
            </Link>
            <Link to='colors'>
              <div className='project-page-item'>
                <img
                  src={ColorsImg}
                  alt='colors image'
                  className='project-page-item-image'
                />
                <div className='project-page-item-text'>Colors</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Coding;
