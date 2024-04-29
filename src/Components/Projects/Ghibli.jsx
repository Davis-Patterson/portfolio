import React, { useState, useEffect, useRef } from 'react';
import Background from '/src/assets/ghibli/background.png';
import Img1 from '/src/assets/ghibli/img1.png';
import Gif1 from '/src/assets/ghibli/gif1.gif';
import Gif1Comp from '/src/assets/ghibli/gif1-comp.gif';
import Img2 from '/src/assets/ghibli/img2.png';
import Gif2 from '/src/assets/ghibli/gif2.gif';
import Gif2Comp from '/src/assets/ghibli/gif2-comp.gif';
import Img3 from '/src/assets/ghibli/img3.png';
import Gif3 from '/src/assets/ghibli/gif3.gif';
import Gif3Comp from '/src/assets/ghibli/gif3-comp.gif';
import Img4 from '/src/assets/ghibli/img4.png';
import Gif4 from '/src/assets/ghibli/gif4.gif';
import Gif4Comp from '/src/assets/ghibli/gif4-comp.gif';
import descriptions from '/src/Util/ghibli.json';
import Progress from '../Progress';

const Ghibli = ({ activeProject, darkMode }) => {
  const [activeClip, setActiveClip] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const [zoomed, setZoomed] = useState(false);

  const [fade, setFade] = useState('in');

  const gifs = [Gif1, Gif2, Gif3, Gif4];
  const gifsComp = [Gif1Comp, Gif2Comp, Gif3Comp, Gif4Comp];
  const imgs = [Img1, Img2, Img3, Img4];

  const initialIndexValue = 1;
  const lastClip = imgs.length;

  const zoomedRef = useRef(null);
  const menuIconRef = useRef(null);

  const blueStyle = {
    width: activeProject === 'ghibli' ? '50px' : '200px',
    opacity: activeProject === 'ghibli' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '25%' : '35%',
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuIconRef.current &&
        (menuIconRef.current === event.target ||
          menuIconRef.current.contains(event.target))
      ) {
        return;
      }

      if (zoomedRef.current && !zoomedRef.current.contains(event.target)) {
        setZoomed(false);
      }
    }

    if (zoomed) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [zoomed]);

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
      <div className='project-container'>
        <div className='page-img-container'>
          <img
            src={Background}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        {zoomed && (
          <>
            <div ref={zoomedRef} className='big-slideshow-container'>
              {gifs.map((gifSrc, index) => (
                <img
                  key={index}
                  src={gifSrc}
                  alt={`Rotating IMG ${index + 1}`}
                  className='big-slide-gifs'
                  onClick={handleZoomOut}
                  style={{
                    display: activeClip === index + 1 ? 'block' : 'none',
                  }}
                />
              ))}
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
            <div className='title-name' id='black-title'>
              Studio Ghibli Slideshow
            </div>
            <hr className='mini-break-blue' style={blueStyle} />
            <div className='project-info' id='black-project-info'>
              <div className='desc-box' id='black-desc-box'>
                <p className='mini-desc' id='black-desc'>
                  React-based slideshow application showcasing the films of
                  Studio Ghibli. Developed independently with agile practices in
                  mind. You can view the <em>Studio Ghibli Slideshow</em> app or
                  view the code repository here:
                </p>
              </div>
            </div>
            <div className='link-box'>
              <a
                className='link-button'
                id='link-button'
                target='_blank'
                rel='noopener noreferrer'
                href='https://ghibli-slideshow-davis-patterson.netlify.app/'
              >
                App
              </a>
              <a
                className='link-button'
                id='link-button'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Davis-Patterson/studio-ghibli-slideshow'
              >
                GitHub
              </a>
            </div>
            <div className='slideshow-container' id='black-slideshow-container'>
              {gifsComp.map((gifSrc, index) => (
                <img
                  key={index}
                  src={gifSrc}
                  alt={`Rotating IMG ${index + 1}`}
                  className='slide-gifs'
                  onClick={handleZoomIn}
                  style={{
                    display: activeClip === index + 1 ? 'block' : 'none',
                  }}
                />
              ))}
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

export default Ghibli;
