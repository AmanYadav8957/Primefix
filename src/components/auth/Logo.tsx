import React from 'react';

interface LogoProps {
  isDark?: boolean;
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ isDark = false, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Primefix Digital Logo"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0284c7] p-1.5 shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="7" y="6" width="4.5" height="20" rx="1.8" fill="#ffffff" />
          <path
            d="M10.5 6 H18.5 C22.642 6 26 9.358 26 13.5 C26 17.642 22.642 21 18.5 21 H10.5 V16.5 H18.5 C20.157 16.5 21.5 15.157 21.5 13.5 C21.5 11.843 20.157 10.5 18.5 10.5 H10.5 V6 Z"
            fill="#ffffff"
          />
          <path
            d="M13 10.5 H18.5 C20.157 10.5 21.5 11.843 21.5 13.5 C21.5 15.157 20.157 16.5 18.5 16.5 H13 V10.5 Z"
            fill="#38bdf8"
            fillOpacity="0.9"
          />
          <circle cx="27" cy="5.5" r="2" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="flex flex-col justify-center leading-none">
        <div className={`text-base sm:text-lg md:text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
          PRIME<span className="text-[#2563eb]">FIX</span>
        </div>
        <div className={`text-[9px] sm:text-[10px] font-bold tracking-[0.28em] uppercase mt-0.5 ${isDark ? 'text-blue-200' : 'text-slate-500'}`}>
          DIGITAL
        </div>
      </div>
    </div>
  );
};

export default Logo;
