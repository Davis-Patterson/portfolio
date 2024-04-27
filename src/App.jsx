import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import MiniQuaist from './Components/Projects/Mini_Quaist';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

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
          path='/miniquaist'
          element={
            <MiniQuaist activeProject={activeProject} darkMode={darkMode} />
          }
        />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
