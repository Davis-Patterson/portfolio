import React from 'react';
import geometricTexture from '/src/assets/backgrounds/geometric-texture.jpg';

const Contact = ({ activeSection }) => {
  const blueStyle = {
    width: activeSection === 'contact' ? '50px' : '200px',
    opacity: activeSection === 'contact' ? '100%' : '0%',
  };
  return (
    <>
      <div className='page-container'>
        <div className='page-img-container'>
          <img
            src={geometricTexture}
            alt='background img'
            className='page-img'
          />
        </div>
        <h1 className='title-name'>Contact Me</h1>
        <hr className='page-break-blue' style={blueStyle} />
        <div className='contact-content'></div>
        <div className='gap' />
      </div>
    </>
  );
};

export default Contact;
