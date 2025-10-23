
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section title="About Me" id="about">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 text-slate space-y-4">
          <p>
            Hello! I'm Mohammed, a Master's student in Computer Engineering & Embedded Systems at the Faculty of Sciences, Agadir. My passion lies at the intersection of hardware and software, where I enjoy bringing intelligent solutions to life.
          </p>
          <p>
            My expertise spans embedded systems, IoT, computer architecture, and microcontroller programming. I am deeply enthusiastic about Artificial Intelligence, specializing in machine learning and data analysis to solve real-world problems.
          </p>
          <p>
            Beyond development, I have a strong interest in cybersecurity. I actively hone my skills on platforms like TryHackMe and CyberTalents, where I've achieved a national ranking. I am driven by the challenge of creating robust, secure, and efficient systems.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
            <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 bg-accent rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                    src="https://picsum.photos/seed/mharrous/400/400" 
                    alt="Mohammed Harrous"
                    className="relative w-full h-full object-cover rounded-lg filter grayscale hover:filter-none transition-all duration-300"
                />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
