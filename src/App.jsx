import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import MiniQuaist from "./Components/Mini-Quaist";
import Questions from "./Components/Questions";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <section id='home'>
        <Home />
      </section>
      <section id='miniQuaist'>
        <MiniQuaist />
      </section>
      <section id='questions'>
        <Questions />
      </section>
    </>
  );
}

export default App;
