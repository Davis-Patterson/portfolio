import React from "react";
import geometricTexture from "/src/assets/backgrounds/geometric-texture.jpg";

const Home = () => {
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
        <h1 className='title-name'>Davis Patterson</h1>
        <h1 className='title-subtext'>{"<SoftwareDeveloper />"}</h1>
        <div className='gap' />
      </div>
    </>
  );
};

export default Home;
