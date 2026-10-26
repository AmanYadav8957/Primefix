import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        
        {/* Floating Curved Master Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b172b] via-[#112d59] to-[#1e40af] p-8 sm:p-12 lg:p-14 text-white shadow-2xl overflow-hidden border border-blue-400/20">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            
            {/* Left Content */}
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-200 border border-white/20 backdrop-blur-md mb-4">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Smart Hardware Recommendation Engine</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                Need Help Choosing The Perfect Printer?
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                Not sure whether you need an inkjet all-in-one, continuous ink tank, or heavy-duty laser printer? Tell us your monthly volume and printing needs, and our specialists will match you with the most cost-effective hardware.
              </p>

              {/* Quick Profile Chips */}
              <div className="flex flex-wrap gap-2.5">
                <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Home &amp; School Work
                </span>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Office Multi-User Duplex
                </span>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  High-Capacity Supertank
                </span>
              </div>
            </div>

            {/* Right Action */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => onNavigate?.('shop')}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-white text-[#0a1c3d] hover:bg-cyan-50 shadow-xl hover:scale-105 cursor-pointer border-none"
              >
                <span>MATCH MY PRINTER</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md cursor-pointer"
              >
                <span>Talk To An Advisor</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
