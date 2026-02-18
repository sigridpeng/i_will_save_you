
import React from 'react';

interface GlitchTitleProps {
  text: string;
  className?: string;
}

const GlitchTitle: React.FC<GlitchTitleProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <h1 
        data-text={text} 
        className="glitch-text text-4xl md:text-7xl font-extrabold uppercase tracking-tighter"
      >
        {text}
      </h1>
      <div className="absolute -inset-1 bg-hacker/10 blur-xl group-hover:bg-hacker/20 transition-all duration-500 -z-10"></div>
    </div>
  );
};

export default GlitchTitle;
