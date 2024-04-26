import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <Link to='/project/miniQuaist'>MiniQuaist</Link>
        <Link to='/project/mitunes'>MiTunes</Link>
        <Link to='/project/blackjack'>Blackjack</Link>
        <Link to='/project/questions'>Questions</Link>
        <Link to='/project/colors'>Colors</Link>
      </div>
    </div>
  );
};

export default Projects;
