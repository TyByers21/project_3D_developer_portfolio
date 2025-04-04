import React from "react";
import { Navbar, Hero, About, Experience, Feedbacks, Contact, StarsCanvas } from "./components";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      {/* Navbar for navigation */}
      <Navbar />
      {/* Sections with IDs for navigation */}
      <section id="hero">
        <Hero className="bg-hero-pattern bg-cover bg-no-repeat bg-center" />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="feedbacks">
        <Feedbacks />
      </section>
      <section id="contact">
      <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </section>      
    </div>
  );
};

export default App;
