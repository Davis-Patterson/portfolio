import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Coding from './Components/Coding';
import Design from './Components/Design';
import MiniQuaist from './Components/Projects/Mini_Quaist';
import Ghibli from './Components/Projects/Ghibli';
import Blackjack from './Components/Projects/Blackjack';
import Colors from './Components/Projects/Colors';
import MiTunes from './Components/Projects/MiTunes';
import Questions from './Components/Projects/Questions';
import Robyn from './Components/Projects/Robyn';
import Retro_Judah from './Components/Projects/Retro_Judah';
import Mexikaner from './Components/Projects/Mexikaner';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setActiveProject(path || 'home');
    setActiveSection(path || 'home');
  }, [location]);

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              darkMode={darkMode}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setActiveProject={setActiveProject}
            />
          }
        />
        <Route
          path='/development'
          element={<Coding darkMode={darkMode} activeSection={activeSection} />}
        />
        <Route
          path='/design'
          element={<Design darkMode={darkMode} activeSection={activeSection} />}
        />
        <Route
          path='development/miniquaist'
          element={
            <MiniQuaist activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='development/ghibli'
          element={<Ghibli activeProject={activeProject} darkMode={darkMode} />}
        />
        <Route
          path='development/questions'
          element={
            <Questions activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='development/blackjack'
          element={
            <Blackjack activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='development/mitunes'
          element={
            <MiTunes activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='development/colors'
          element={<Colors activeProject={activeProject} darkMode={darkMode} />}
        />
        <Route
          path='design/robynrobyns'
          element={<Robyn activeProject={activeProject} darkMode={darkMode} />}
        />
        <Route
          path='design/retrojudah'
          element={
            <Retro_Judah activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='design/mexikaner'
          element={
            <Mexikaner activeProject={activeProject} darkMode={darkMode} />
          }
        />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
