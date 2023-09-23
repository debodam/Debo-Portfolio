import React from "react";

import { Hero, About, Projects, Experience } from "./containers";

import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default App;
