import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap, Wifi } from 'lucide-react';
import { allProducts } from '../Shop/productsData';

interface BrandSelectionProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
  onSelectProduct?: (productId: string) => void;
}

// Curated popular featured products representing both Home/Office & Enterprise printers
const featuredIds = [
  'hp-deskjet-2825e-all-in-one-printer',
  'hp-deskjet-2855e-all-in-one-printer',
  'hp-deskjet-2925-all-in-one-printer',
  'hp-deskjet-4355-all-in-one-printer',
  'hp-laserjet-pro-4001dn-printer',
  'hp-laserjet-pro-m118dw-printer',
];

const featuredProducts = featuredIds
  .map((id) => allProducts.find((p) => p.id === id))
  .filter((p): p is typeof allProducts[0] => Boolean(p));

const productSpecs: Record<string, { rating: number; reviews: number; speed: string; connectivity: string }> = {
  'hp-deskjet-2825e-all-in-one-printer': { rating: 4.8, reviews: 142, speed: '7.5 ppm', connectivity: 'Dual-Band Wi-Fi' },
  'hp-deskjet-2855e-all-in-one-printer': { rating: 4.9, reviews: 218, speed: '8.5 ppm', connectivity: 'Wi-Fi + BLE' },
  'hp-deskjet-2925-all-in-one-printer': { rating: 4.7, reviews: 96, speed: '8.0 ppm', connectivity: 'Self-Reset Wi-Fi' },
  'hp-deskjet-4355-all-in-one-printer': { rating: 4.8, reviews: 184, speed: '10 ppm', connectivity: 'Wireless + ADF' },
  'hp-laserjet-pro-4001dn-printer': { rating: 4.9, reviews: 310, speed: '42 ppm', connectivity: 'Gigabit Ethernet' },
  'hp-laserjet-pro-m118dw-printer': { rating: 4.8, reviews: 175, speed: '30 ppm', connectivity: 'Wi-Fi Direct + Duplex' },
};

const BrandSelection: React.FC<BrandSelectionProps> = ({ onNavigate, onSelectProduct }) => {
  const [filter, setFilter] = useState<'all' | 'all-in-one' | 'laser'>('all');

  const filteredProducts = featuredProducts.filter((product) => {
    if (filter === 'all-in-one') return product.category.includes('Small and Medium') || product.title.includes('All-in-One');
    if (filter === 'laser') return product.category.includes('Enterprise') || product.title.includes('LaserJet');
    return true;
  });

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" id="featured-products">
      {/* Soft decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-xl text-left">
            <span className="inline-flex items-center gap-1.5 text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <Zap className="w-3.5 h-3.5" />
              Verified Inventory &amp; Top Picks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 tracking-tight leading-tight">
              POPULAR PRINTERS &amp; HARDWARE
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-2">
              Browse our customer-favorite all-in-one inkjet and commercial laser printers with manufacturer warranty and fast US ground delivery.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 self-start md:self-end bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border-none ${
                filter === 'all'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              All Hardware
            </button>
            <button
              type="button"
              onClick={() => setFilter('all-in-one')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border-none ${
                filter === 'all-in-one'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              All-in-One Inkjet
            </button>
            <button
              type="button"
              onClick={() => setFilter('laser')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border-none ${
                filter === 'laser'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              High-Speed Laser
            </button>
          </div>
        </div>

        {/* Product Cards Grid with Modern Elevated Aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const spec = productSpecs[product.id] || { rating: 4.8, reviews: 90, speed: 'Wireless', connectivity: 'Dual Wi-Fi' };
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct?.(product.id)}
                className="group relative flex flex-col bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 mb-3 z-10 relative">
                  <span className="bg-slate-100 text-[11px] font-bold text-slate-700 px-3 py-1 rounded-full border border-slate-200/80 truncate max-w-[170px]">
                    {product.categoryLabel || product.category}
                  </span>

                  <span className="bg-emerald-50 text-emerald-700 text-[10.5px] font-bold px-2.5 py-1 rounded-full border border-emerald-200/80 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    In Stock
                  </span>
                </div>

                <div className="w-full h-48 sm:h-52 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 sm:p-3 mb-4 border border-slate-100/90 transition-colors">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-500 select-none mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[44px] mb-3 leading-snug">
                  {product.title}
                </h3>

                {/* Key Spec Chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-blue-500" />
                    {spec.connectivity}
                  </span>
                  <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-500" />
                    {spec.speed}
                  </span>
                </div>

                {/* Price & Action Strip */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Guaranteed Price
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-3.5 py-2 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 border-none cursor-pointer"
                    >
                      <span>Configure</span>
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button Bar */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>All hardware purchases include 30-day money-back guarantee &amp; OEM warranty</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.('shop')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-lg cursor-pointer border-none"
          >
            <span>VIEW ALL PRINTERS IN CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BrandSelection;
