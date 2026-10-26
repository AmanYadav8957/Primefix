import React from 'react';
import type { BrandId } from '../BrandSetup';
import { ArrowRight, Wrench } from 'lucide-react';

export interface BrandSetupCardProps {
  onSelectBrand?: (brand: BrandId) => void;
  className?: string;
  prefixId?: string;
}

export const brands: {
  id: BrandId;
  name: string;
  imageUrl: string;
  title: string;
  accentColor: string;
  bgTint: string;
  borderColor: string;
  models: string;
}[] = [
  {
    id: 'hp',
    name: 'HP',
    imageUrl: '/setup/brand_card_hp.png',
    title: 'HP Printers',
    accentColor: '#0284c7',
    bgTint: 'hover:bg-sky-50/60',
    borderColor: 'hover:border-sky-400',
    models: 'DeskJet, ENVY, LaserJet, Smart Tank',
  },
  {
    id: 'canon',
    name: 'Canon',
    imageUrl: '/setup/brand_card_canon.png',
    title: 'Canon Printers',
    accentColor: '#dc2626',
    bgTint: 'hover:bg-rose-50/60',
    borderColor: 'hover:border-rose-400',
    models: 'PIXMA, MAXIFY, MegaTank, imageCLASS',
  },
  {
    id: 'brother',
    name: 'Brother',
    imageUrl: '/setup/brand_card_brother.png',
    title: 'Brother Printers',
    accentColor: '#4f46e5',
    bgTint: 'hover:bg-indigo-50/60',
    borderColor: 'hover:border-indigo-400',
    models: 'MFC Multi-function, HL Mono & Color',
  },
  {
    id: 'epson',
    name: 'Epson',
    imageUrl: '/setup/brand_card_epson.png',
    title: 'Epson Printers',
    accentColor: '#0284c7',
    bgTint: 'hover:bg-cyan-50/60',
    borderColor: 'hover:border-cyan-400',
    models: 'EcoTank Supertank, WorkForce Pro',
  },
];

const BrandSetupCard: React.FC<BrandSetupCardProps> = ({
  onSelectBrand,
  className = '',
  prefixId = 'brand-setup',
}) => {
  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 mb-2.5">
          <Wrench className="w-3.5 h-3.5" />
          <span>Manufacturer Direct Setup Portal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          SELECT YOUR PRINTER BRAND
        </h2>
        <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
          Choose your brand below to download verified drivers, configure wireless connectivity, and complete manufacturer-approved setup.
        </p>
      </div>

      {/* Brands Grid with Distinct Brand Color Personalities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {brands.map((brand) => (
          <div
            key={brand.id}
            id={`${prefixId}-${brand.id}`}
            onClick={() => onSelectBrand?.(brand.id)}
            className={`group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-200/90 bg-white ${brand.bgTint} ${brand.borderColor} shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left overflow-hidden`}
          >
            {/* Top Brand Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:h-1.5"
              style={{ backgroundColor: brand.accentColor }}
            />

            <div>
              {/* Brand Logo Container */}
              <div className="h-20 w-full flex items-center justify-center p-2 mb-4 bg-slate-50/70 rounded-xl border border-slate-100 group-hover:bg-white transition-colors">
                <img
                  src={brand.imageUrl}
                  alt={`${brand.name} logo`}
                  className="max-h-12 max-w-[110px] object-contain group-hover:scale-108 transition-transform duration-300 select-none drop-shadow-2xs"
                  loading="lazy"
                />
              </div>

              {/* Title & Supported Models */}
              <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                {brand.title}
              </h3>
              <p className="text-[12px] text-slate-500 leading-normal mb-5 line-clamp-2">
                {brand.models}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700">
                Start Setup
              </span>
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSetupCard;
