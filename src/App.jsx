import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import MiniQuaist from "./Components/Mini_Quaist";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const sections = ["home", "about", "projects", "contact"];

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

    const sections = document.querySelectorAll("section");
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
        <About />
      </section>
      <section id='projects'>
        <MiniQuaist />
      </section>
      <section id='projects'>
        <Questions />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
