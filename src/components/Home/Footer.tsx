import React from 'react';
import Logo from '../auth/Logo';
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface FooterProps {
  onNavigate?: (page: NavPage | any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0b1320] text-slate-300 pt-16 pb-8 border-t border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isDark={true} onClick={() => onNavigate?.('home')} />
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-400 max-w-sm pt-2">
              Independent retailer and tech support provider for high-performance printers, certified hardware, and reliable driver diagnostics for home and office.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Verified Hardware &amp; Secure Transactions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('home')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('shop')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Shop Printers
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('about')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('faq')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Help &amp; FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('services')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Policies &amp; Legal</h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('privacy-policy')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('terms-of-service')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('refund-return')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Refund &amp; Return Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('warranty-info')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Warranty Information
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('shipping-policy')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('sitemap')}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  HTML Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-[13px] text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>3545 Ellicott Mills DR, Ellicott City MD 21043, USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:1-833-785-8085" className="text-white hover:text-blue-300 font-semibold no-underline transition-colors">
                  1-833-785-8085 (Toll Free)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@geeksafeglobal.com" className="text-slate-300 hover:text-white no-underline transition-colors">
                  support@geeksafeglobal.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>9:00 AM-5:00 PM EST (Mon-Fri)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Details & Disclaimer Strip */}
        <div className="border-t border-slate-800 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 gap-2 text-center sm:text-left">
            <span>BUSINESS NAME: Primefix Digital</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>REGISTERED ADDRESS: 3545 Ellicott Mills DR, Ellicott City MD 21043, USA</span>
          </div>

          <p className="text-[11px] text-slate-500 mb-3 leading-relaxed text-center sm:text-left">
            Disclaimer: Primefix Digital operates as an independent service provider and retailer for printers and accessories. All brand names, logos, and trademarks (including HP, Canon, Brother, Epson) mentioned are the property of their respective owners and are used solely for identification and reference purposes.
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Copyright &copy; 2026 Primefix Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
