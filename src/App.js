import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NafisAIWidget from './components/NafisAIWidget';

import './styles/App.css';

function App() {
  return (
    <div className="app">
      <NafisAIWidget 
        agentUrl="https://nafis-ai-agent.onrender.com/iframe"
        // agentUrl="http://localhost:8000/iframe"
        position="bottom-right"
        title="Ask About Nafis's Experience"
      />
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
