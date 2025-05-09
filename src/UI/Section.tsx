import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  aosAnimation?: string;
  background?: 'gradient' | 'dark';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  aosAnimation = 'fade-up',
  background = 'dark'
}) => {
  const baseClasses = 'w-full min-h-screen';
  const backgroundClasses = background === 'gradient' 
    ? 'bg-[linear-gradient(to_right,_rgba(0,0,0,1)_4%,_rgba(0,0,0,0.07)_100%)] w-full min-h-screen flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 mx-auto max-w-full overflow-x-hidden'
    : 'bg-[#121212]';

  return (
    <div
      data-aos={aosAnimation}
      className={`${baseClasses} ${backgroundClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Section; 