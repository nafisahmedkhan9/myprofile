import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
