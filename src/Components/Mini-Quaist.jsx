import React from "react";
import homeImg from "../assets/mini-quaist/mini-quaist-home.png";
import tooltipImg from "../assets/mini-quaist/mini-quaist-tooltip.png";
import dialogueImg from "../assets/mini-quaist/mini-quaist-dialogue.png";

const MiniQuaist = () => {
  return (
    <>
      <section className='miniquaist-container'>
        <div className='project-name'>Mini Quaist</div>
        <div className='project-columns'>
          <div className='project-info'>
            <ul className='list-items'>
              <li className='list-item'>
                Top-down RPG video game built in React, our collaborative final
                project.
              </li>
              <li className='list-item'>
                Incorporated AI-driven NPC dialogues and image rendering.
              </li>
              <li className='list-item'>
                Collaborated remotely with a team, using agile practices.
              </li>
              <li className='list-item'>
                Took a lead role in developing the game mechanics, the UI/UX,
                and mentoring fellow team members.
              </li>
            </ul>
          </div>
          <div className='project-imgs'>
            <img
              src={homeImg}
              alt='mini-quaist-home.png'
              className='project-img'
            />
            <img
              src={tooltipImg}
              alt='mini-quaist-tooltip.png'
              className='project-img'
            />
            <img
              src={dialogueImg}
              alt='mini-quaist-dialogue.png'
              className='project-img'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniQuaist;
