import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistGif from '/src/assets/mini-quaist/gif2-comp.gif';
import robynrobyns1 from '/src/assets/gd/robynrobynsimg1.png';
import robynrobyns2 from '/src/assets/gd/robynrobynsimg2.png';
import robynrobyns3 from '/src/assets/gd/robynrobynsimg3.png';
import QuestionsImg from '/src/assets/projects/questions.png';
import BlackjackGif from '/src/assets/blackjack/gif4-comp.gif';
import MitunesGif from '/src/assets/mitunes/gif1-comp.gif';
import ColorsGif from '/src/assets/colors/gif1-comp.gif';
import RJcountdownGif from '/src/assets/gd/RJcountdown-comp.gif';
import RJoverlayGif from '/src/assets/gd/RJoverlay-comp.gif';

const Projects = ({ darkMode, activeSection }) => {
  const [activeClip, setActiveClip] = useState(1);
  const [progress, setProgress] = useState(0);

  const [fade, setFade] = useState('in');

  const codingMedia = [
    MiniquaistGif,
    QuestionsImg,
    BlackjackGif,
    MitunesGif,
    ColorsGif,
  ];
  const gdMedia = [
    robynrobyns1,
    RJcountdownGif,
    robynrobyns2,
    robynrobyns3,
    RJoverlayGif,
  ];

  const initialIndexValue = 1;
  const lastClip = codingMedia.length;

  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  const autoProg = () => {
    setFade('out');
    setProgress(0);
    setTimeout(() => {
      if (activeClip < lastClip) {
        setActiveClip((index) => index + 1);
      } else {
        setActiveClip(initialIndexValue);
      }
      setFade('in');
    }, 20);
  };

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          return prevProgress;
        }
      });
    }, 30);

    if (progress === 100) {
      autoProg();
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [autoProg]);

  return (
    <>
      <div className='project-page-container'>
        <div className='page-img-container'>
          <img
            src={Background}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <h1 className='title-name' id='about-title'>
          Projects
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='project-page-project-container'>
          <Link to='/development' className='coding-link'>
            <div className='coding-project-container'>
              <p className='project-page-subtitle'>SOFTWARE DEVELOPMENT</p>
              {codingMedia.map(
                (src, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={src}
                      alt={`Rotating media ${index + 1}`}
                      className='project-page-item-image'
                    />
                  )
              )}
            </div>
          </Link>
          <Link to='/design' className='design-link'>
            <div className='gd-project-container'>
              <p className='project-page-subtitle'>GRAPHIC DESIGN</p>
              {gdMedia.map(
                (src, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={src}
                      alt={`Rotating media ${index + 1}`}
                      className='project-page-item-image'
                    />
                  )
              )}
            </div>
          </Link>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Projects;
