import React, { useRef } from "react";
import useScrollSpy from "react-use-scrollspy";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Info from "./Components/Info";
import MiniQuaist from "./Components/Mini-Quaist";
import Questions from "./Components/Questions";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <section id='home'>
        <Home />
      </section>
      <section id='info'>
        <Info />
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
