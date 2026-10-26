import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden" id="our-mission">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group">
              <img 
                src="/mission-printer.jpg" 
                alt="Operating printer in modern office workspace" 
                className="w-full h-auto object-cover select-none block group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Commitment</span>
                  <span className="text-xs font-black text-slate-900">Zero Downtime Guarantee</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200">
                  Verified Steps
                </span>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 border border-blue-200/80 mb-3">
              <Target className="w-3.5 h-3.5" />
              Purpose &amp; Commitment
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight mb-5 leading-tight">
              OUR MISSION FOR SMOOTHER PRINTING
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-slate-600 space-y-4 mb-8">
              <p>
                Our mission is to make printer maintenance and troubleshooting simple and stress-free, even for users with limited technical background. We cover common day-to-day challenges including driver installation, network setup, offline errors, and Wi-Fi connectivity problems.
              </p>
              <p>
                Whether for home study or busy corporate offices, our guidance improves device performance and helps prevent recurring obstacles. Our focus is always on simplicity, accuracy, and getting you back to productive printing as quickly as possible.
              </p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 mb-1">Fast Solutions</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Identify and fix error codes without wasted downtime.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 mb-1">Accuracy First</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Verified OEM drivers and proper configuration steps.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 mb-1">Reliability</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Long-term wireless stability and reduced paper jams.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
