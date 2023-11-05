import React from 'react';
import villageMap from '/src/assets/backgrounds/village-map.png';

const MiniQuaist = ({ activeProject }) => {
  const blueStyle = {
    width: activeProject === 'miniQuaist' ? '50px' : '200px',
    opacity: activeProject === 'miniQuaist' ? '100%' : '0%',
  };

  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img src={villageMap} alt='background img' className='page-img' />
        </div>
        <div className='title-name'>Mini Quaist</div>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='gap' />
        <div className='project-columns'>
          <div className='project-info'>
            <div className='list-items'>
              <p className='list-item'>
                Top-down RPG video game built in React, our collaborative final
                project.
              </p>
              <p className='list-item'>
                Incorporated AI-driven NPC dialogues and image rendering.
              </p>
              <p className='list-item'>
                Collaborated remotely with a team, using agile practices.
              </p>
              <p className='list-item'>
                Took a lead role in developing the game mechanics, the UI/UX,
                and mentoring fellow team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniQuaist;
