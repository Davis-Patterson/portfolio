import React, { useEffect } from 'react';
import Nav from './Nav';
import Hello from './Hello';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Home({ darkMode, activeSection, setActiveSection, setActiveProject }) {
  useEffect(() => {
    if (activeSection) {
      window.history.pushState(null, null, `#${activeSection}`);
    }
  }, [activeSection]);

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

  return (
    <>
      <section id='home' data-project='none'>
        <Hello activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='about' data-project='none'>
        <About activeSection={activeSection} darkMode={darkMode} />
      </section>
      <section id='projects' data-project='miniQuaist'>
        <Projects darkMode={darkMode} activeSection={activeSection} />
      </section>
      <section id='contact' data-project='none'>
        <Contact activeSection={activeSection} darkMode={darkMode} />
      </section>
    </>
  );
}

export default Home;
