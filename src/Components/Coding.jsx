import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Background from '/src/assets/projects/vscode-blur.png';
import MiniquaistGif1 from '/src/assets/mini-quaist/gif1-comp.gif';
import MiniquaistGif2 from '/src/assets/mini-quaist/gif2-comp.gif';
import MiniquaistGif3 from '/src/assets/mini-quaist/gif3-comp.gif';
import MiniquaistGif4 from '/src/assets/mini-quaist/gif4-comp.gif';
import MiniquaistGif5 from '/src/assets/mini-quaist/gif5-comp.gif';
import MiniquaistGif6 from '/src/assets/mini-quaist/gif6-comp.gif';
import QuestionsImg from '/src/assets/projects/questions.png';
import QuestionsImg2 from '/src/assets/projects/questions2.png';
import QuestionsImg3 from '/src/assets/projects/questions3.png';
import QuestionsImg4 from '/src/assets/projects/questions4.png';
import QuestionsImg5 from '/src/assets/projects/questions5.png';
import GhibliGif1 from '/src/assets/ghibli/gif1-comp.gif';
import GhibliGif2 from '/src/assets/ghibli/gif2-comp.gif';
import GhibliGif3 from '/src/assets/ghibli/gif3-comp.gif';
import GhibliGif4 from '/src/assets/ghibli/gif4-comp.gif';
import BlackjackGif1 from '/src/assets/blackjack/gif1-comp.gif';
import BlackjackGif2 from '/src/assets/blackjack/gif2-comp.gif';
import BlackjackGif3 from '/src/assets/blackjack/gif3-comp.gif';
import BlackjackGif4 from '/src/assets/blackjack/gif4-comp.gif';
import MitunesGif1 from '/src/assets/mitunes/gif1-comp.gif';
import MitunesGif2 from '/src/assets/mitunes/gif2-comp.gif';
import MitunesGif3 from '/src/assets/mitunes/gif3-comp.gif';
import MitunesGif4 from '/src/assets/mitunes/gif4-comp.gif';
import ColorsGif1 from '/src/assets/colors/gif1-comp.gif';
import ColorsGif2 from '/src/assets/colors/gif2-comp.gif';
import ColorsGif3 from '/src/assets/colors/gif3-comp.gif';
import ColorsGif4 from '/src/assets/colors/gif4-comp.gif';
import ColorsGif5 from '/src/assets/colors/gif5-comp.gif';

const Coding = ({ darkMode, activeSection }) => {
  const [activeMQClip, setActiveMQClip] = useState(1);
  const [activeSGClip, setActiveSGClip] = useState(1);
  const [activeBJClip, setActiveBJClip] = useState(1);
  const [activeQSClip, setActiveQSClip] = useState(1);
  const [activeCLClip, setActiveCLClip] = useState(1);
  const [activeMTClip, setActiveMTClip] = useState(1);

  const MQMedia = [
    MiniquaistGif1,
    MiniquaistGif2,
    MiniquaistGif3,
    MiniquaistGif4,
    MiniquaistGif5,
    MiniquaistGif6,
  ];
  const SGMedia = [GhibliGif1, GhibliGif2, GhibliGif3, GhibliGif4];
  const BJMedia = [BlackjackGif1, BlackjackGif2, BlackjackGif3, BlackjackGif4];
  const QSMedia = [
    QuestionsImg,
    QuestionsImg2,
    QuestionsImg3,
    QuestionsImg4,
    QuestionsImg5,
  ];
  const CLMedia = [ColorsGif1, ColorsGif2, ColorsGif3, ColorsGif4, ColorsGif5];
  const MTMedia = [MitunesGif1, MitunesGif2, MitunesGif3, MitunesGif4];

  const blueStyle = {
    width: activeSection === 'development' ? '50px' : '200px',
    opacity: activeSection === 'development' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '30%',
  };

  const autoProgress = (mediaArray, currentClip, setClip) => {
    setClip((currentClip % mediaArray.length) + 1);
  };

  useEffect(() => {
    const MQInterval = setInterval(() => {
      autoProgress(MQMedia, activeMQClip, setActiveMQClip);
    }, 1800);

    const SGInterval = setInterval(() => {
      autoProgress(SGMedia, activeSGClip, setActiveSGClip);
    }, 1800);

    const BJInterval = setInterval(() => {
      autoProgress(BJMedia, activeBJClip, setActiveBJClip);
    }, 1800);

    const QSInterval = setInterval(() => {
      autoProgress(QSMedia, activeQSClip, setActiveQSClip);
    }, 1800);

    const CLInterval = setInterval(() => {
      autoProgress(CLMedia, activeCLClip, setActiveCLClip);
    }, 1800);

    const MTInterval = setInterval(() => {
      autoProgress(MTMedia, activeMTClip, setActiveMTClip);
    }, 1800);

    return () => {
      clearInterval(MQInterval);
      clearInterval(SGInterval);
      clearInterval(BJInterval);
      clearInterval(QSInterval);
      clearInterval(CLInterval);
      clearInterval(MTInterval);
    };
  }, [
    activeMQClip,
    activeSGClip,
    activeBJClip,
    activeQSClip,
    activeCLClip,
    activeMTClip,
  ]);

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

    preloadImages([
      ...MQMedia,
      ...SGMedia,
      ...BJMedia,
      ...QSMedia,
      ...CLMedia,
      ...MTMedia,
    ]);
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
          Software Development
        </h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-socials-container'>
          <p className='recent-work' id='skills-title'>
            View some of my recent work here
          </p>
        </div>
        <div className='landing-page-project-container'>
          <div className='coding-project-container'>
            <Link to='miniquaist' className='landing-link'>
              <div className='project-page-item'>
                {MQMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeMQClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Mini QuAIst</div>
              </div>
            </Link>
            <Link to='ghibli' className='landing-link'>
              <div className='project-page-item'>
                {SGMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeSGClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Studio Ghibli</div>
              </div>
            </Link>
            <Link to='blackjack' className='landing-link'>
              <div className='project-page-item'>
                {BJMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeBJClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Blackjack</div>
              </div>
            </Link>
            <Link to='questions' className='landing-link'>
              <div className='project-page-item'>
                {QSMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeQSClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Questions!</div>
              </div>
            </Link>
            <Link to='colors' className='landing-link'>
              <div className='project-page-item'>
                {CLMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeCLClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>Colors</div>
              </div>
            </Link>
            <Link to='mitunes' className='landing-link'>
              <div className='project-page-item'>
                {MTMedia.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Rotating media ${index + 1}`}
                    className='landing-page-item-image'
                    style={{
                      display: activeMTClip === index + 1 ? 'block' : 'none',
                    }}
                  />
                ))}
                <div className='project-page-item-text'>MiTunes</div>
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
