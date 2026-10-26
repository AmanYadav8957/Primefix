import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Headphones, Wrench, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const FinalCta: React.FC<FinalCtaProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-[#070e1b] text-white text-center">
      {/* High-tech radial background mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Eyebrow Pill */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950/70 border border-sky-400/30 backdrop-blur-md mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Elevate Your Printing Standard</span>
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black mb-5 tracking-tight leading-tight max-w-3xl mx-auto">
          Ready For A Smarter, Faster<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white">
            Printing Experience?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore our certified printers, step-by-step setup assistance, and professional troubleshooting services to keep your personal study and corporate workflow running without interruptions.
        </p>

        {/* Dual Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => onNavigate?.('shop')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-9 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/25 hover:scale-105 cursor-pointer border-none"
          >
            <span>SHOP HARDWARE CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.hash = '#setup';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-sky-400 cursor-pointer backdrop-blur-md"
          >
            <Wrench className="w-4 h-4 text-sky-400" />
            <span>START BRAND SETUP</span>
          </button>
        </div>

        {/* 3 Trust Badges */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>100% Genuine OEM Hardware</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Fast US Ground Dispatch</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Headphones className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Independent Human Specialists</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCta;
