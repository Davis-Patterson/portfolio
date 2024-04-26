import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home
        darkMode={darkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
