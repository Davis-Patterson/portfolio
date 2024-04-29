import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Coding from './Components/Coding';
import Design from './Components/Design';
import MiniQuaist from './Components/Projects/Mini_Quaist';
import Blackjack from './Components/Projects/Blackjack';
import Colors from './Components/Projects/Colors';
import MiTunes from './Components/Projects/MiTunes';
import Questions from './Components/Projects/Questions';
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
          path='/miniquaist'
          element={
            <MiniQuaist activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='/questions'
          element={
            <Questions activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='/blackjack'
          element={
            <Blackjack activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='/mitunes'
          element={
            <MiTunes activeProject={activeProject} darkMode={darkMode} />
          }
        />
        <Route
          path='/colors'
          element={<Colors activeProject={activeProject} darkMode={darkMode} />}
        />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
