import React from "react";
import { HashLink } from "react-router-hash-link";
import "/src/styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav className='nav-container'>
        <HashLink smooth to='/#home'>
          Home
        </HashLink>
        <HashLink smooth to='/#home'>
          Info
        </HashLink>
        <HashLink smooth to='/#miniQuaist'>
          Mini QuAIst
        </HashLink>
        <HashLink smooth to='/#questions'>
          Questions App
        </HashLink>
      </nav>
    </>
  );
};

export default Nav;
