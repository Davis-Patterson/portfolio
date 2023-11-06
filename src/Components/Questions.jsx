import React from 'react';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';

const Questions = ({ activeProject, darkMode }) => {
  const blueStyle = {
    width: activeProject === 'questions' ? '50px' : '200px',
    opacity: activeProject === 'questions' ? '100%' : '0%',
  };

  const pageStyle = {
    opacity: darkMode ? '15%' : '25%',
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={null}
            alt='background img'
            className='page-img'
            style={pageStyle}
          />
        </div>
        <div className='title-name'>Questions!</div>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='gap' />
        <div className='project-columns'>
          <div className='project-info'>
            <div className='list-items'>
              <p className='list-item'>
                Developed a Q&A platform, reminiscent of Stack Overflow, using
                React.
              </p>
              <p className='list-item'>
                Enabled users to create accounts, engage in discussions, and
                view profiles.
              </p>
              <p className='list-item'>
                Collaboratively pair-programmed in a duo, using agile practices.
              </p>
              <p className='list-item'>
                Played a pivotal role in UI/UX design and implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
