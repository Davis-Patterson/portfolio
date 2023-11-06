import React, { useState, useEffect } from 'react';
import villageMap from '/src/assets/backgrounds/village-map.png';
import Gif1 from '/src/assets/mini-quaist/clip1.gif';
import Img1 from '/src/assets/mini-quaist/clip1.png';
import Gif2 from '/src/assets/mini-quaist/clip2.gif';
import Img2 from '/src/assets/mini-quaist/clip2.png';
import Gif3 from '/src/assets/mini-quaist/clip3.gif';
import Img3 from '/src/assets/mini-quaist/clip3.png';
import Gif4 from '/src/assets/mini-quaist/clip4.gif';
import Img4 from '/src/assets/mini-quaist/clip4.png';
import Gif5 from '/src/assets/mini-quaist/clip5.gif';
import Img5 from '/src/assets/mini-quaist/clip5.png';
import Gif6 from '/src/assets/mini-quaist/clip6.gif';
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

  const activeGifSrc = gifs[(activeClip - 1) % gifs.length];

  const activeDescription = descriptions.find(
    (desc) => desc.id === activeClip
  )?.desc;

  const handleImgClick = (index) => {
    setActiveClip(index + 1);
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

  const handleExit = () => {
    setZoomed(false);
  };

  const handleZoom = () => {
    setZoomed(!zoomed);
  };

  const handlePrev = () => {
    setActiveClip((prevActiveClip) => {
      if (prevActiveClip === 1) {
        return lastClip;
      } else {
        return prevActiveClip - 1;
      }
    });
  };

  const handleNext = () => {
    setActiveClip((prevActiveClip) => {
      if (prevActiveClip === lastClip) {
        return 1;
      } else {
        return prevActiveClip + 1;
      }
    });
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
              <div className='exit-button' onClick={handleExit}>
                X
              </div>
              <img
                src={activeGifSrc}
                alt='rotating gifs'
                className='big-slide-gifs'
                onClick={handleZoom}
              />
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
                    mentoring fellow team members. You can play Mini Quaist{' '}
                    <a href='https://mini-quaist.netlify.app/home'>here</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className='slideshow-container'>
              <img
                src={activeGifSrc}
                alt='rotating gifs'
                className='slide-gifs'
                onClick={handleZoom}
              />
              <p className='slide-desc'>{activeDescription}</p>
              <div className='slide-imgs'>
                {imgs.map((imgSrc, index) => (
                  <img
                    key={imgSrc} // Ideally, use a unique and consistent key instead of the src
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
