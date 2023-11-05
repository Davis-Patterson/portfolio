import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import MiniQuaist from './Components/Mini_Quaist';
import Questions from './Components/Questions';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import { dark } from '@mui/material/styles/createPalette';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);

  const sections = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id);
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeSection) {
      window.history.pushState(null, null, `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='projects'>
        <MiniQuaist activeSection={activeSection} />
      </section>
      <section id='projects'>
        <Questions activeSection={activeSection} />
      </section>
      <section id='contact'>
        <Contact activeSection={activeSection} />
      </section>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
