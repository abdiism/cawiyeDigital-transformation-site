import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Cawiye Logo"
    >
      {/* Globe Arc (Green) - Upper half representing global reach */}
      <path 
        d="M15 50C15 30.67 30.67 15 50 15C69.33 15 85 30.67 85 50" 
        stroke="#006233" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M50 15V50" 
        stroke="#006233" 
        strokeWidth="2" 
        strokeOpacity="0.3" 
        strokeLinecap="round"
      />
      <path 
        d="M25 25C32 20 40 15 50 15" 
        stroke="#006233" 
        strokeWidth="2" 
        strokeOpacity="0.3" 
        strokeLinecap="round"
      />

      {/* Gears (Red) - Representing Engineering/Work */}
      <circle cx="30" cy="65" r="12" stroke="#D21034" strokeWidth="6" />
      <path d="M30 49V57" stroke="#D21034" strokeWidth="6" strokeLinecap="round"/>
      <path d="M30 73V81" stroke="#D21034" strokeWidth="6" strokeLinecap="round"/>
      <path d="M14 65H22" stroke="#D21034" strokeWidth="6" strokeLinecap="round"/>
      <path d="M38 65H46" stroke="#D21034" strokeWidth="6" strokeLinecap="round"/>
      
      <circle cx="75" cy="60" r="8" stroke="#D21034" strokeWidth="5" opacity="0.8"/>
      <path d="M75 48V54" stroke="#D21034" strokeWidth="5" strokeLinecap="round" opacity="0.8"/>
      
      {/* Rising Arrow (Green) - Representing Growth */}
      <path 
        d="M40 70L55 50L85 20" 
        stroke="#006233" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Arrow Head */}
      <path 
        d="M85 20H65M85 20V40" 
        stroke="#006233" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Code Brackets (Black) - Representing Software */}
      <g transform="translate(42, 80) scale(0.6)">
        <path d="M10 0L0 10L10 20" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 0L40 10L30 20" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25 -3L15 23" stroke="black" strokeWidth="3" strokeLinecap="round"/>
      </g>
    </svg>
  );
};