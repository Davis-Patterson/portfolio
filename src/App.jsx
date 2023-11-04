import React, { useState } from "react";
import useScrollSpy from "react-use-scrollspy";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import MiniQuaist from "./Components/Mini-Quaist";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <MiniQuaist />
        <Questions />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}

export default App;
