
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center animate-fade-in-up" style={{ opacity: 0 }}>
      <div className="space-y-4">
        <p className="text-accent text-lg font-mono">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightest-slate">Mohammed Harrous.</h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate">I build things for the digital world.</h2>
        <p className="max-w-2xl text-slate pt-4">
          I'm a Master's student in Computer Engineering & Embedded Systems with a passion for AI, Cybersecurity, and IoT. I specialize in developing smart, secure solutions from embedded systems to full-stack applications.
        </p>
        <div className="pt-8 flex flex-wrap gap-4">
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/mohammed_harrous_cv.pdf';
              link.download = 'Mohammed_Harrous_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-8 py-4 text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors duration-300"
          >
            Download Resume
          </button>
          <a href="#contact" className="px-8 py-4 text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors duration-300">
            Contact Me
          </a>
          <a href="https://www.linkedin.com/in/mohammed-harrous-2664692a3/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/Mohammedhr7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors duration-300">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
