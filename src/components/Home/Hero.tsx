import React, { useState, useEffect } from 'react';
import type { BrandId } from '../BrandSetup';
import BrandSetupCard, { brands } from './BrandSetupCard';
import { ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: 'home' | 'shop') => void;
  onSelectBrand?: (brand: BrandId) => void;
}

const Hero: React.FC<HeroProps> = ({ onSelectBrand }) => {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBrandModalOpen(false);
    };
    if (isBrandModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isBrandModalOpen]);

  const handleSelect = (brandId: BrandId) => {
    setIsBrandModalOpen(false);
    onSelectBrand?.(brandId);
  };

  return (
    <>
      <section className="relative min-h-[680px] lg:min-h-[720px] flex items-center bg-[#070e1b] overflow-hidden pt-28 sm:pt-32 pb-16 lg:pb-20">
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold text-sky-200 bg-sky-950/60 border border-sky-400/25 backdrop-blur-md mb-6 shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>Primefix Certified • Professional Printer Hardware &amp; Setup</span>
              </div>

              <h1 className="text-[38px] sm:text-[48px] md:text-[56px] font-black text-white leading-[1.12] tracking-tight mb-6">
                Printing Made Effortless.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white">
                  Reliable. Accelerated.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-[560px] leading-relaxed mb-9 font-normal">
                Discover dependable printers, factory-approved setup guides, and expert diagnostic assistance designed for personal home study and high-productivity corporate offices.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 max-w-md">
                <button
                  id="hero-printer-setup-btn"
                  type="button"
                  onClick={() => setIsBrandModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-sky-500 text-white shadow-xl shadow-blue-600/30 hover:scale-[1.02] cursor-pointer border-none"
                >
                  <span>PRINTER SETUP </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine OEM Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Fast US Ground Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Independent Tech Support</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-blue-500/20 to-cyan-400/25 rounded-full blur-3xl pointer-events-none" />

              <div className="self-end mb-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 shadow-lg flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-200">Official 2026 Drivers Ready</span>
              </div>

              <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center p-2 z-0">
                <img
                  src="/setup/hp_hero.png"
                  alt="Modern All-in-One Color Printer Showcase"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500 select-none"
                  loading="eager"
                />
              </div>

              <div className="w-full bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 z-10 mt-10">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                  Direct Brand Setup:
                </span>
                
                <div className="flex items-center gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      type="button"
                      onClick={() => handleSelect(brand.id)}
                      className="bg-white hover:bg-sky-50 px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center"
                      title={`Configure ${brand.name} Printer`}
                    >
                      <img
                        src={brand.imageUrl}
                        alt={brand.name}
                        className="h-4 max-w-[44px] object-contain select-none"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Brand Selection Modal */}
      {isBrandModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setIsBrandModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsBrandModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none"
              title="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <BrandSetupCard onSelectBrand={handleSelect} prefixId="hero-modal-brand" />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
