import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import robynrobyns1 from '/src/assets/gd/robynrobynsimg1.png';
import robynrobyns2 from '/src/assets/gd/robynrobynsimg2.png';
import robynrobyns3 from '/src/assets/gd/robynrobynsimg3.png';
import robynrobyns4 from '/src/assets/gd/robynrobynsimg4.png';
import RJcountdownGif from '/src/assets/gd/RJcountdown-comp.gif';
import RJoverlayGif from '/src/assets/gd/RJoverlay-comp.gif';
import RJbrbGif from '/src/assets/gd/RJbrb-comp.gif';
import MXcountdownGif from '/src/assets/gd/MXcountdown-comp.gif';
import MXoverlayGif from '/src/assets/gd/MXoverlay-comp.gif';
import MXintermissionGif from '/src/assets/gd/MXintermission-comp.gif';

const Design = ({ darkMode, activeSection }) => {
  const [activeRRClip, setActiveRRClip] = useState(1);
  const [activeRJClip, setActiveRJClip] = useState(1);
  const [activeMXClip, setActiveMXClip] = useState(1);

  const RRMedia = [robynrobyns1, robynrobyns2, robynrobyns3, robynrobyns4];
  const RJMedia = [RJcountdownGif, RJoverlayGif, RJbrbGif];
  const MXMedia = [MXintermissionGif, MXcountdownGif, MXoverlayGif];

  const blueStyle = {
    width: activeSection === 'design' ? '50px' : '200px',
    opacity: activeSection === 'design' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  const autoProgress = (mediaArray, currentClip, setClip) => {
    setClip((currentClip % mediaArray.length) + 1);
  };

  useEffect(() => {
    const RRInterval = setInterval(() => {
      autoProgress(RRMedia, activeRRClip, setActiveRRClip);
    }, 1800);

    const RJInterval = setInterval(() => {
      autoProgress(RJMedia, activeRJClip, setActiveRJClip);
    }, 1800);

    const MXInterval = setInterval(() => {
      autoProgress(MXMedia, activeMXClip, setActiveMXClip);
    }, 1800);

    return () => {
      clearInterval(RRInterval);
      clearInterval(RJInterval);
      clearInterval(MXInterval);
    };
  }, [activeRRClip, activeRJClip, activeMXClip]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([...RRMedia, ...RJMedia, ...MXMedia]);
  }, []);

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
          Graphic Design
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='landing-page-project-container'>
          <div className='gd-project-container'>
            <Link to='/robynrobyns' className='landing-link'>
              <div className='project-page-item'>
                {RRMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeRRClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>
                  Robyn Robyn's Services
                </div>
              </div>
            </Link>
            <Link to='/retrojudah' className='landing-link'>
              <div className='project-page-item'>
                {RJMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeRJClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Retro Judah</div>
              </div>
            </Link>
            <Link to='/mexikaner' className='landing-link'>
              <div className='project-page-item'>
                {MXMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeMXClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>The Mexikaner</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Design;
