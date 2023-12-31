import React from "react";

import { Hero, About, Projects, Experience, Footer } from "./containers";

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
      <Footer />
    </div>
  );
};

export default App;
