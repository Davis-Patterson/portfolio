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
  const [activeProject, setActiveProject] = useState(null);
  const [darkMode, setDarkMode] = useLocalStorageState('darkMode', false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setActiveProject(entry.target.dataset.project);
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
      <section id='home' data-project='none'>
        <Home />
      </section>
      <section id='about' data-project='none'>
        <About activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='miniQuaist'>
        <MiniQuaist activeProject={activeProject} />
      </section>
      <section id='projects' data-project='questions'>
        <Questions activeProject={activeProject} />
      </section>
      <section id='contact' data-project='none'>
        <Contact activeSection={activeSection} />
      </section>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
