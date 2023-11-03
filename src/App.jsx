import { useState } from "react";
import "./App.css";
import MiniQuaist from "./Components/Mini-Quaist";

function App() {
  return (
    <>
      <h1 className='title-name'>Davis Patterson</h1>
      <h1 className='title-subtext'>{"<Software Developer />"}</h1>
      <section>
        <MiniQuaist />
      </section>
    </>
  );
}

export default App;
