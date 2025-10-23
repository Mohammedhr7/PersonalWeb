
import React from 'react';
import Section from './Section';

const interestsList = ['Photography', 'Football', 'Kickboxing', 'Swimming'];

const Interests: React.FC = () => {
  return (
    <Section title="Interests" id="interests">
      <div className="flex flex-wrap gap-4">
        {interestsList.map(interest => (
          <div key={interest} className="bg-light-navy px-4 py-2 rounded-lg text-light-slate shadow-md">
            {interest}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Interests;
