import React from 'react';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface ProductsProps {
  onNavigate?: (page: NavPage | any, category?: string | null) => void;
}

interface ProductCategoryItem {
  categoryKey: string;
  slug: string;
  badge: string;
  modelCount: string;
  categoryTag: string;
  title: string;
  series: string;
  description: string;
  image: string;
  priceHint: string;
  features: string[];
}

const productCategories: ProductCategoryItem[] = [
  {
    categoryKey: 'Small and Medium Office',
    slug: 'small-medium',
    badge: 'Home & Remote Desk',
    modelCount: '7 Models',
    categoryTag: 'Small & Medium Office',
    title: 'Small & Medium Office Printers',
    series: 'DeskJet All-in-One Series',
    description: 'Everyday color printing, scanning, and copying tailored for personal workspaces, remote desks, and student homework.',
    image: '/products/hp-deskjet-2825e-all-in-one-printer-1.webp',
    priceHint: 'From $59.99',
    features: ['Vibrant Color Photo Printing', 'Wireless Mobile Scan & Copy', 'HP Smart Companion App Support'],
  },
  {
    categoryKey: 'Enterprise Printer',
    slug: 'enterprise',
    badge: 'High Duty & Speed',
    modelCount: '9 Models',
    categoryTag: 'Workplace & Enterprise',
    title: 'Enterprise LaserJet Printers',
    series: 'LaserJet Pro Commercial Series',
    description: 'High-speed monochrome and color laser printing with rapid page speeds, automatic two-sided duplexing, and enterprise networking.',
    image: '/products/hp-laserjet-pro-4001dn-printer-1.jpg',
    priceHint: 'From $79.00',
    features: ['Up to 42 PPM Print Velocity', 'Automatic 2-Sided Duplexing', 'Gigabit Ethernet & PIN Security'],
  },
  {
    categoryKey: 'Scanners',
    slug: 'scanners',
    badge: 'Precision Digitization',
    modelCount: '6 Models',
    categoryTag: 'Document & Archiving',
    title: 'High-Speed Document Scanners',
    series: 'ScanJet Professional Series',
    description: 'Dedicated professional sheet-fed and flatbed document scanners engineered for high-resolution digitization, automated ADF, and OCR archiving.',
    image: '/products/hp-scanjet-pro-2600-f1-scanner-1.jpeg',
    priceHint: 'From $439.00',
    features: ['1200 DPI Optical Clarity', 'Automatic 50-Sheet ADF Feeder', 'Direct-to-Cloud & OCR Searchable PDF'],
  },
];

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const handleCategoryClick = (categoryKey: string, slug: string) => {
    window.location.hash = `#shop/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onNavigate) {
      onNavigate('shop', categoryKey);
    }
  };

  const handleViewAll = () => {
    window.location.hash = '#shop';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onNavigate) {
      onNavigate('shop', null);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100 relative overflow-hidden" id="home-categories">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            <Layers className="w-3.5 h-3.5" />
            Hardware Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-tight mb-3">
            EXPLORE OUR PRINTER CATEGORIES
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Browse dependable printing and scanning hardware tailored for personal desks, high-volume office workloads, and professional digitizing.
          </p>
        </div>

        {/* 3 Categories Grid with Asymmetrical Tech Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 mb-12">
          {productCategories.map((item) => (
            <div
              key={item.categoryKey}
              onClick={() => handleCategoryClick(item.categoryKey, item.slug)}
              className="group bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-slate-900 text-white text-[10.5px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>

                  <span className="bg-blue-50 text-blue-700 text-[10.5px] font-bold px-2.5 py-1 rounded-full border border-blue-100">
                    {item.modelCount}
                  </span>
                </div>

                {/* Hardware Image Showcase Frame */}
                <div className="w-full h-52 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 sm:p-3 mb-5 border border-slate-100 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-500 select-none mix-blend-multiply drop-shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Subtitle / Series */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                    {item.categoryTag}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.series}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 list-none p-0 m-0 pt-4 border-t border-slate-200/60">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">Starting at</span>
                  <span className="text-base font-black text-slate-900">{item.priceHint}</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Browse Series</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Banner */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleViewAll}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-md hover:shadow-xl hover:scale-105 cursor-pointer border-none"
          >
            <span>VIEW COMPLETE HARDWARE CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Products;
