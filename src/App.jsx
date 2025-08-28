import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <ProfessionalExperience />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
