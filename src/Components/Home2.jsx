import React, { useState, useEffect } from 'react';
import Hello from './Hello';
import About from './About';
import MiniQuaist from './Projects/Mini_Quaist';
import MiTunes from './Projects/MiTunes';
import Questions from './Projects/Questions';
import Blackjack from './Projects/Blackjack';
import Colors from './Projects/Colors';
import Contact from './Contact';

function Home({ darkMode, activeSection, setActiveSection }) {
  const [activeProject, setActiveProject] = useState(null);

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
      <section id='hello' data-project='none'>
        <Hello activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='about' data-project='none'>
        <About activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='miniQuaist'>
        <MiniQuaist activeProject={activeProject} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='MiTunes'>
        <MiTunes activeProject={activeProject} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='blackjack'>
        <Blackjack activeProject={activeProject} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='questions'>
        <Questions activeProject={activeProject} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='colors'>
        <Colors activeProject={activeProject} darkMode={darkMode} />
      </section>
      <section id='contact' data-project='none'>
        <Contact activeSection={activeSection} darkMode={darkMode} />
      </section>
    </>
  );
}

export default Home;
