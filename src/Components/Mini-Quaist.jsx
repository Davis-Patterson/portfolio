import React from "react";
import homeImg from "/src/assets/mini-quaist/mini-quaist-home.PNG";
import tooltipImg from "/src/assets/mini-quaist/mini-quaist-tooltip.PNG";
import dialogueImg from "/src/assets/mini-quaist/mini-quaist-dialogue.PNG";

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
        </div>
      </section>
    </>
  );
};

export default MiniQuaist;
