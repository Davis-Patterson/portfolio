import React from "react";
import geometricTexture from "/src/assets/backgrounds/geometric-texture.jpg";

const Contact = () => {
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
        <h1 className='title-subtext'>{"<Message Form>"}</h1>
        <div className='gap' />
      </div>
    </>
  );
};

export default Contact;
