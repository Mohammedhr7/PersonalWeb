
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CybersecurityHighlight from './components/CybersecurityHighlight';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="text-light-slate bg-navy">
      <Header />
      <main className="px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 mx-auto">
        <Hero />
        <About />
        <CybersecurityHighlight />
        <Experience />
        <Projects />
        <Skills />
        <Education />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
