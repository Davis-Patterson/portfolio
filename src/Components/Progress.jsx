import React, { useEffect } from 'react';
import playIcon from '/src/assets/mini-quaist/play-icon.svg';
import pauseIcon from '/src/assets/mini-quaist/pause-icon.svg';
import ProgressBar from 'react-animated-progress-bar';
import PropTypes from 'prop-types';

const Progress = ({
  isPaused,
  setIsPaused,
  progress,
  setProgress,
  autoProg,
}) => {
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

  const validProgress =
    Number.isFinite(progress) && progress >= 0 && progress <= 100
      ? progress
      : 0;

  ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
  };

  return (
    <>
      <div
        className='progress-container'
        onClick={() => setIsPaused(!isPaused)}
      >
        <ProgressBar
          className='progress-bar'
          width='80'
          trackWidth='50'
          percentage={validProgress}
          defColor={{
            fair: '#68dcff',
            good: '#68dcff',
            excellent: '#68dcff',
            poor: '#68dcff',
          }}
          fontColor='transparent'
        />
        <img
          src={isPaused ? playIcon : pauseIcon}
          alt='play/pause icon'
          className='pause-icon'
          style={{ right: isPaused ? '4.5px' : '5px' }}
        />
      </div>
    </>
  );
};
export default Progress;
