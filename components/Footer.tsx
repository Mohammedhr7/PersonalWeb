
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-slate text-sm">
      <p>Designed & Built by Mohammed Harrous</p>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
