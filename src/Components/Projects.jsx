import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistGif2 from '/src/assets/mini-quaist/gif2-comp.gif';
import MiniquaistGif5 from '/src/assets/mini-quaist/gif5-comp.gif';
import robynrobyns1 from '/src/assets/gd/robynrobynsimg1.png';
import robynrobyns2 from '/src/assets/gd/robynrobynsimg2.png';
import robynrobyns3 from '/src/assets/gd/robynrobynsimg3.png';
import robynrobyns4 from '/src/assets/gd/robynrobynsimg4.png';
import QuestionsImg from '/src/assets/projects/questions.png';
import BlackjackGif3 from '/src/assets/blackjack/gif3-comp.gif';
import BlackjackGif4 from '/src/assets/blackjack/gif4-comp.gif';
import MitunesGif from '/src/assets/mitunes/gif1-comp.gif';
import ColorsGif1 from '/src/assets/colors/gif1-comp.gif';
import ColorsGif3 from '/src/assets/colors/gif3-comp.gif';
import RJcountdownGif from '/src/assets/gd/RJcountdown-comp.gif';
import RJoverlayGif from '/src/assets/gd/RJoverlay-comp.gif';
import RJbrbGif from '/src/assets/gd/RJbrb-comp.gif';
import MXcountdownGif from '/src/assets/gd/MXcountdown-comp.gif';
import MXoverlayGif from '/src/assets/gd/MXoverlay-comp.gif';
import MXintermissionGif from '/src/assets/gd/MXintermission-comp.gif';
import GhibliGif1 from '/src/assets/Ghibli/gif1-comp.gif';
import GhibliGif2 from '/src/assets/Ghibli/gif2-comp.gif';
import GhibliGif3 from '/src/assets/Ghibli/gif3-comp.gif';

const Projects = ({ darkMode, activeSection }) => {
  const [activeSDClip, setActiveSDClip] = useState(1);
  const [activeGDClip, setActiveGDClip] = useState(1);

  const SDMedia = [
    MiniquaistGif2,
    GhibliGif1,
    QuestionsImg,
    BlackjackGif3,
    MitunesGif,
    ColorsGif1,
    GhibliGif2,
    MiniquaistGif5,
    BlackjackGif4,
    ColorsGif3,
    GhibliGif3,
  ];
  const GDMedia = [
    robynrobyns1,
    RJcountdownGif,
    robynrobyns2,
    MXintermissionGif,
    robynrobyns3,
    RJbrbGif,
    MXoverlayGif,
    robynrobyns4,
    MXcountdownGif,
    RJoverlayGif,
  ];

  const blueStyle = {
    width: activeSection === 'projects' ? '50px' : '200px',
    opacity: activeSection === 'projects' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  const autoProgress = (mediaArray, currentClip, setClip) => {
    setClip((currentClip % mediaArray.length) + 1);
  };

  useEffect(() => {
    const SDInterval = setInterval(() => {
      autoProgress(SDMedia, activeSDClip, setActiveSDClip);
    }, 1800);

    const GDInterval = setInterval(() => {
      autoProgress(GDMedia, activeGDClip, setActiveGDClip);
    }, 1800);

    return () => {
      clearInterval(SDInterval);
      clearInterval(GDInterval);
    };
  }, [activeSDClip, activeGDClip]);

  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([...SDMedia, ...GDMedia]);
  }, []);

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
              {SDMedia.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Rotating media ${index + 1}`}
                  className='project-page-item-image'
                  style={{
                    display: activeSDClip === index + 1 ? 'block' : 'none',
                  }}
                />
              ))}
            </div>
          </Link>
          <Link to='/design' className='design-link'>
            <div className='gd-project-container'>
              <p className='project-page-subtitle'>GRAPHIC DESIGN</p>
              {GDMedia.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Rotating media ${index + 1}`}
                  className='project-page-item-image'
                  style={{
                    display: activeGDClip === index + 1 ? 'block' : 'none',
                  }}
                />
              ))}
            </div>
          </Link>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Projects;
