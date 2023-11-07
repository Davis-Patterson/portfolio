import React, { useState, useEffect } from 'react';
import villageMap from '/src/assets/backgrounds/village-map.png';
import Gif1 from '/src/assets/mini-quaist/clip1.gif';
import Gif1Comp from '/src/assets/mini-quaist/clip1-comp.gif';
import Img1 from '/src/assets/mini-quaist/clip1.png';
import Gif2 from '/src/assets/mini-quaist/clip2.gif';
import Gif2Comp from '/src/assets/mini-quaist/clip2-comp.gif';
import Img2 from '/src/assets/mini-quaist/clip2.png';
import Gif3 from '/src/assets/mini-quaist/clip3.gif';
import Gif3Comp from '/src/assets/mini-quaist/clip3-comp.gif';
import Img3 from '/src/assets/mini-quaist/clip3.png';
import Gif4 from '/src/assets/mini-quaist/clip4.gif';
import Gif4Comp from '/src/assets/mini-quaist/clip4-comp.gif';
import Img4 from '/src/assets/mini-quaist/clip4.png';
import Gif5 from '/src/assets/mini-quaist/clip5.gif';
import Gif5Comp from '/src/assets/mini-quaist/clip5-comp.gif';
import Img5 from '/src/assets/mini-quaist/clip5.png';
import Gif6 from '/src/assets/mini-quaist/clip6.gif';
import Gif6Comp from '/src/assets/mini-quaist/clip6-comp.gif';
import Img6 from '/src/assets/mini-quaist/clip6.png';
import descriptions from '/src/Util/MiniQuaist.json';
import Progress from './Progress';

const MiniQuaist = ({ activeProject, darkMode }) => {
  const [activeClip, setActiveClip] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const [zoomed, setZoomed] = useState(false);

  const [fade, setFade] = useState('in');

  const gifs = [Gif1, Gif2, Gif3, Gif4, Gif5, Gif6];
  const gifsComp = [Gif1Comp, Gif2Comp, Gif3Comp, Gif4Comp, Gif5Comp, Gif6Comp];
  const imgs = [Img1, Img2, Img3, Img4, Img5, Img6];

  const initialIndexValue = 1;
  const lastClip = gifs.length;

  const blueStyle = {
    width: activeProject === 'miniQuaist' ? '50px' : '200px',
    opacity: activeProject === 'miniQuaist' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  const activeDescription = descriptions.find(
    (desc) => desc.id === activeClip
  )?.desc;

  const handleImgClick = (index) => {
    setActiveClip(index + 1);
    setProgress(0);
  };

  const autoProg = () => {
    if (!isPaused) {
      setFade('out');
      setProgress(0);
      setTimeout(() => {
        if (activeClip < lastClip) {
          setActiveClip((index) => index + 1);
        } else {
          setActiveClip(initialIndexValue);
        }
        setFade('in');
      }, 200);
    }
  };

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (!isPaused && prevProgress < 100) {
          return prevProgress + 1;
        } else {
          return prevProgress;
        }
      });
    }, 100);

    if (progress === 100 && !isPaused) {
      autoProg();
    }

    return () => {
      clearInterval(progressTimer);
    };
  }, [isPaused, autoProg]);

  const handleZoomIn = () => {
    setZoomed(true);
    setIsPaused(true);
  };
  const handleZoomOut = () => {
    setZoomed(false);
    setIsPaused(false);
  };

  const handlePrev = () => {
    setActiveClip((prevActiveClip) => {
      if (prevActiveClip === 1) {
        return lastClip;
      } else {
        return prevActiveClip - 1;
      }
    });
    setProgress(0);
  };

  const handleNext = () => {
    setActiveClip((prevActiveClip) => {
      if (prevActiveClip === lastClip) {
        return 1;
      } else {
        return prevActiveClip + 1;
      }
    });
    setProgress(0);
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={villageMap}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        {zoomed && (
          <>
            <div className='big-slideshow-container'>
              {gifs.map(
                (gifSrc, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={gifSrc}
                      alt={`Rotating GIF ${index + 1}`}
                      className='big-slide-gifs'
                      onClick={handleZoomOut}
                    />
                  )
              )}
              <p className='slide-desc'>{activeDescription}</p>
              <div className='prev-button' onClick={handlePrev}>
                {'◄'}
              </div>
              <div className='next-button' onClick={handleNext}>
                {'►'}
              </div>
            </div>
          </>
        )}
        {!zoomed && (
          <>
            <div className='title-name'>Mini Quaist</div>
            <hr className='mini-break-blue' style={blueStyle} />
            <div className='project-columns'>
              <div className='project-info'>
                <div className='desc-box'>
                  <p className='mini-desc'>
                    Top-down RPG video game built in React. Incorporated
                    AI-driven NPC dialogues and image rendering. Collaborated
                    remotely with a team, using agile practices. Took a lead
                    role in developing the game mechanics, the UI/UX, and
                    mentoring fellow team members. You can play 'Mini Quaist'{' '}
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://mini-quaist.netlify.app/home'
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className='slideshow-container'>
              {gifsComp.map(
                (gifSrc, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={gifSrc}
                      alt={`Rotating GIF ${index + 1}`}
                      className='slide-gifs'
                      onClick={handleZoomIn}
                    />
                  )
              )}
              <p className='slide-desc'>{activeDescription}</p>
              <div className='slide-imgs'>
                {imgs.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Slide Img ${index + 1}`}
                    className={`slide-img ${
                      activeClip === index + 1 ? 'current' : ''
                    }`}
                    onClick={() => handleImgClick(index)}
                  />
                ))}
              </div>
              <Progress
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                progress={progress}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MiniQuaist;
