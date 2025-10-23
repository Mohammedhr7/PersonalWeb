
import React from 'react';
import { SecurityIcon } from './icons';

const CybersecurityHighlight: React.FC = () => {
  return (
    <section className="py-20 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
      <div className="bg-light-navy p-8 rounded-lg shadow-lg border border-lightest-navy/20 flex flex-col md:flex-row items-center gap-8">
        <div className="text-accent flex-shrink-0">
          <SecurityIcon className="w-24 h-24" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-lightest-slate mb-2">Cybersecurity Achievements</h3>
          <p className="text-slate text-lg">
            Actively practicing on platforms like TryHackMe and CyberTalents, I have achieved a{' '}
            <span className="text-accent font-semibold">Top 20 national ranking</span> in cybersecurity competitions, demonstrating strong practical skills in ethical hacking and defense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityHighlight;
