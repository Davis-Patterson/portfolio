import React, { useState, useEffect, useRef } from 'react';
import Background from '/src/assets/questions/background.png';
import Img1 from '/src/assets/questions/img1.png';
import Img2 from '/src/assets/questions/img2.png';
import Img3 from '/src/assets/questions/img3.png';
import Img4 from '/src/assets/questions/img4.png';
import Img5 from '/src/assets/questions/img5.png';
import descriptions from '/src/Util/Questions.json';
import Progress from '../Progress';

const Questions = ({ activeProject, darkMode }) => {
  const [activeClip, setActiveClip] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const [zoomed, setZoomed] = useState(false);

  const [fade, setFade] = useState('in');

  const imgs = [Img1, Img2, Img3, Img4, Img5];

  const initialIndexValue = 1;
  const lastClip = imgs.length;

  const zoomedRef = useRef(null);
  const menuIconRef = useRef(null);

  const blueStyle = {
    width: activeProject === 'questions' ? '50px' : '200px',
    opacity: activeProject === 'questions' ? '100%' : '0%',
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
      <div className='page-container'>
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
              {imgs.map(
                (imgSrc, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`Rotating img ${index + 1}`}
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
            <div className='title-name' id='mini-title'>
              Questions!
            </div>
            <hr className='mini-break-blue' style={blueStyle} />
            <div className='project-info' id='project-info'>
              <div className='desc-box' id='desc-box'>
                <p className='mini-desc' id='mini-desc'>
                  Developed a Q&A platform, reminiscent of Stack Overflow, using
                  React. Enables users to create accounts, engage in
                  discussions, and view user profiles. Collaboratively
                  pair-programmed in a duo, using agile practices. Played a
                  pivotal role in UI/UX design and implementation. You can view
                  the <em>'Questions!'</em> app or view the code repository
                  here:
                </p>
              </div>
            </div>
            <div className='link-box'>
              <a
                className='link-button'
                id='link-button'
                target='_blank'
                rel='noopener noreferrer'
                href='https://lively-chimera-6dfe46.netlify.app/page/1'
              >
                App
              </a>
              <a
                className='link-button'
                id='link-button'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Davis-Patterson/questions-react'
              >
                GitHub
              </a>
            </div>
            <div className='slideshow-container' id='mini-slideshow-container'>
              {imgs.map(
                (imgSrc, index) =>
                  activeClip === index + 1 && (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`Rotating img ${index + 1}`}
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

export default Questions;
