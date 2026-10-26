import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Home, Info, ShoppingBag, PhoneCall, HelpCircle, Wrench, ArrowRight } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface HeaderProps {
  onNavigate?: (page: NavPage | any) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = currentPage === 'home';
  const textColor = 'text-slate-700';

  // Close mobile menu on escape key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNav = (page: NavPage) => {
    setIsMobileMenuOpen(false);
    onNavigate?.(page);
  };

  return (
    <header
      className={`w-full z-30 transition-colors bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs ${
        isHome ? 'absolute top-0 left-0' : 'relative'
      }`}
    >
      {/* Primefix Brand Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-600" />

      <div className="w-full px-4 sm:px-6 md:px-8 flex justify-between items-center h-18 sm:h-20">
        <div className="flex items-center md:flex-1 justify-start">
          <Logo onClick={() => handleNav('home')} />
        </div>

        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center list-none gap-6 lg:gap-8 m-0 p-0">
            <li>
              <button 
                onClick={() => handleNav('home')}
                className={`relative py-1 ${currentPage === 'home' ? 'text-[#2563eb] font-bold after:w-full' : textColor + ' font-medium after:w-0'} text-[13px] lg:text-[14px] uppercase tracking-wider hover:text-[#2563eb] cursor-pointer bg-transparent border-none p-0 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2563eb] after:transition-all after:duration-200 hover:after:w-full`}
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('about')}
                className={`relative py-1 ${currentPage === 'about' ? 'text-[#2563eb] font-bold after:w-full' : textColor + ' font-medium after:w-0'} text-[13px] lg:text-[14px] uppercase tracking-wider hover:text-[#2563eb] cursor-pointer bg-transparent border-none p-0 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2563eb] after:transition-all after:duration-200 hover:after:w-full`}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('shop')}
                className={`relative py-1 ${currentPage === 'shop' ? 'text-[#2563eb] font-bold after:w-full' : textColor + ' font-medium after:w-0'} text-[13px] lg:text-[14px] uppercase tracking-wider hover:text-[#2563eb] flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2563eb] after:transition-all after:duration-200 hover:after:w-full`}
              >
                SHOP
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('contact')}
                className={`relative py-1 ${currentPage === 'contact' ? 'text-[#2563eb] font-bold after:w-full' : textColor + ' font-medium after:w-0'} text-[13px] lg:text-[14px] uppercase tracking-wider hover:text-[#2563eb] cursor-pointer bg-transparent border-none p-0 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2563eb] after:transition-all after:duration-200 hover:after:w-full`}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center md:flex-1 justify-end">
          <div className="hidden md:flex items-center">
            <a
              href="tel:1-833-785-8085"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] lg:text-[13.5px] font-semibold transition-all no-underline bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 text-[#1d4ed8] border border-blue-200/80 hover:border-blue-300 shadow-2xs group"
              title="Call Toll Free: 1-833-785-8085"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <PhoneCall className="w-3.5 h-3.5 text-[#2563eb] group-hover:scale-110 transition-transform" />
              <span>
                <span className="font-medium opacity-85 text-[11.5px] lg:text-[12px] uppercase tracking-wider">Toll Free:</span>{' '}
                <span className="font-bold tracking-tight">1-833-785-8085</span>
              </span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:1-833-785-8085"
              aria-label="Call Toll Free 1-833-785-8085"
              title="Call Toll Free: 1-833-785-8085"
              className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer border flex items-center justify-center no-underline bg-blue-50 hover:bg-blue-100 text-[#2563eb] border-blue-200 shadow-2xs"
            >
              <PhoneCall className="w-5 h-5 text-[#2563eb]" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer border bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 shadow-2xs"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full transition-all duration-300 shadow-2xl border-b z-50 bg-white border-slate-200 text-slate-900">
          <div className="px-5 py-6 flex flex-col gap-2">
            {/* Toll Free support for mobile */}
            <a
              href="tel:1-833-785-8085"
              className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-colors no-underline mb-1 bg-gradient-to-r from-blue-50 to-sky-50 text-[#1d4ed8] hover:from-blue-100 hover:to-sky-100 border border-blue-200/80"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <PhoneCall className="w-4 h-4 text-[#2563eb]" />
                <span>Toll Free Support</span>
              </div>
              <span className="font-bold tracking-tight">1-833-785-8085</span>
            </a>

            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'home'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Home className="w-4 h-4 text-[#2563eb]" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'about'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Info className="w-4 h-4 text-[#2563eb]" />
              <span>About Us</span>
            </button>

            <button
              onClick={() => handleNav('shop')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'shop'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#2563eb]" />
              <span>Hardware & Printer Shop</span>
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'services'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Wrench className="w-4 h-4 text-[#2563eb]" />
              <span>Printer Services & Support</span>
            </button>

            <button
              onClick={() => handleNav('faq')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'faq'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#2563eb]" />
              <span>Help & FAQs</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'contact'
                  ? 'bg-blue-50 text-[#2563eb] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-[#2563eb]" />
              <span>Contact Us</span>
            </button>

            {/* Quick Action in Mobile Menu */}
            <div className="pt-4 mt-2 border-t border-slate-200">
              <button
                onClick={() => handleNav('shop')}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] hover:from-[#1e40af] hover:to-[#1d4ed8] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer border-none transition-all"
              >
                <span>Browse Store & Hardware</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
