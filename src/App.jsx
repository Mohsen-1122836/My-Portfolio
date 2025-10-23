import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <header className="navbar">
        <div className="max-w-6xl mx-auto px-4">
          <Navbar />
        </div>
      </header>

      <main className="">
        <div className="max-w-6xl mx-auto px-4">
          <section className="hero-wrap" id="hero">
            <Hero />
          </section>
          <section id="about" className="py-16">
            <About />
          </section>
          <section id="experience" className="py-16">
            <Experience />
          </section>
          <section id="projects" className="py-16">
            <Projects />
          </section>
          <section id="skills" className="py-16">
            <Skills />
          </section>
          <section id="contact" className="py-16">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
