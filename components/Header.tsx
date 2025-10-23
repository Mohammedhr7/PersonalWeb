
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 flex justify-between items-center h-20">
        <a href="#" className="text-accent text-2xl font-bold font-mono z-50">MH</a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, i) => (
            <a key={link.name} href={link.href} className="text-lightest-slate hover:text-accent transition-colors duration-300">
              <span className="text-accent font-mono mr-1">0{i + 1}.</span>{link.name}
            </a>
          ))}
          <a href="Port\mohammed_harrous_cv.pdf" target="_blank" className="border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent/10 transition-colors duration-300">
            Resume
          </a>
        </nav>
        
        {/* Mobile Nav Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      <div className={`fixed inset-0 bg-navy transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, i) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-lightest-slate hover:text-accent transition-colors duration-300">
              <span className="text-accent font-mono mr-2">0{i + 1}.</span>{link.name}
            </a>
          ))}
          <a href="/mohammed_harrous_cv.pdf" target="_blank" className="mt-8 border border-accent text-accent px-8 py-4 text-lg rounded-md hover:bg-accent/10 transition-colors duration-300">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
