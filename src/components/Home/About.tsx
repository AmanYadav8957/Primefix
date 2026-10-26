import React from 'react';
import { Check, ArrowRight, ShieldCheck, Award, Users, Headphones } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-slate-100 relative overflow-hidden" id="about-overview">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Layered Trust Signals */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop"
                alt="Primefix Digital Printer Specialist Setup"
                className="w-full h-auto object-cover block select-none group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Trust Card 1: Bottom Right */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3.5 max-w-[280px]">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                  Quality Assurance
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight block">
                  Independent Expert Support
                </span>
              </div>
            </div>

            {/* Floating Trust Card 2: Top Left */}
            <div className="absolute -top-4 -left-2 sm:left-4 z-10 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Satisfaction</span>
                <span className="text-xs font-bold text-white">99.4% Issue Resolution</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Differentiated Value Pillars */}
          <div className="lg:col-span-7 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 mb-3">
              <Users className="w-3.5 h-3.5" />
              About Primefix Digital
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black mb-5 leading-tight text-slate-900 tracking-tight">
              Your Reliable Printing Partner,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                From Unboxing To Support.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              At Primefix Digital, we simplify printer technology so you can stay focused on what matters most. Whether you need an office workhorse or a reliable compact home printer, our independent specialists provide dependable hardware sales, official configuration paths, and rapid technical triage.
            </p>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              We never leave you stranded with robotic menus or broken drivers. Every step of our diagnostic and configuration support is backed by real industry technicians committed to long-term reliability.
            </p>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check size={16} className="stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Certified Technicians</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Experienced specialists familiar with HP, Canon, Brother, and Epson.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check size={16} className="stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Rapid Remote Diagnostics</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Quickly resolve spooler locks, Wi-Fi mismatches, and offline states.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check size={16} className="stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Genuine Hardware Only</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Factory-sealed printers and genuine OEM supply accessories.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Check size={16} className="stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Dedicated Human Care</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">Clear phone and email follow-through whenever you need guidance.</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate?.('about')}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-lg cursor-pointer border-none"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 cursor-pointer border-none"
              >
                <Headphones className="w-4 h-4 text-blue-600" />
                <span>Contact Our Specialists</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
