import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Headphones, Activity } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface ServicesProps {
  onNavigate?: (page: NavPage | any) => void;
}

const services = [
  {
    badge: 'Hardware & Diagnostics',
    sla: '30-Min Rapid Triage',
    image: '/about/about-what-we-do.jpg',
    title: 'PRINTER ISSUE DIAGNOSIS & REPAIR',
    description: "When your printer isn't working properly, our troubleshooting service helps identify the exact cause and provides effective solutions. We handle printing errors, connectivity issues, driver problems, paper jams, slow printing, and software conflicts.",
    highlights: [
      'Error code decode & sensor triage',
      'Mechanical roller & carriage inspection',
      'Print head alignment & test banding',
    ],
  },
  {
    badge: 'Setup & Configuration',
    sla: 'Zero-Hassle Installation',
    image: '/about/about-hero-printer.jpg',
    title: 'PRINTER SETUP & OPTIMIZATION',
    description: 'Ensure your printer is installed correctly and calibrated for peak efficiency. From connecting the device and installing manufacturer drivers to configuring print preferences and mobile device pairing.',
    highlights: [
      'Official OEM driver extraction & setup',
      'Mobile pairing (iOS, Android, AirPrint)',
      'Duplex, paper profile & color tuning',
    ],
  },
  {
    badge: 'Network & Wireless',
    sla: 'Stable Signal Lock',
    image: '/about/about-specialist.jpg',
    title: 'WI-FI & NETWORK PERFORMANCE OPTIMIZATION',
    description: 'Maintain a fast, stable, and reliable connection for your printer and connected devices. We resolve IP conflicts, fix recurring "Printer Offline" states, and configure dual-band wireless router sync.',
    highlights: [
      'Fixed IP reservation to prevent drops',
      '2.4GHz & 5GHz dual-band handshake',
      'Firewall port & SNMP spooler clearance',
    ],
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden" id="home-services">
      {/* High-tech radial background mesh */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 bg-sky-950/70 px-3.5 py-1 rounded-full border border-sky-500/30">
            <Activity className="w-3.5 h-3.5" />
            Specialist Support Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight mb-3">
            OUR PRINTER SERVICES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional guidance, hardware diagnostics, and network configuration to keep your home or office equipment running reliably without downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 hover:bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-sky-400/80 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 z-10 bg-slate-900/90 backdrop-blur-md text-[10.5px] font-bold text-sky-400 px-3 py-1 rounded-full border border-sky-500/30 uppercase tracking-wider">
                    {service.badge}
                  </span>

                  {/* SLA Badge */}
                  <span className="absolute bottom-3 right-3 z-10 bg-emerald-950/90 backdrop-blur-md text-[10px] font-bold text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    {service.sla}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-sky-300 transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-4 pt-4 border-t border-slate-700/60">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  type="button"
                  onClick={() => onNavigate?.('services')}
                  className="w-full py-3 px-4 rounded-xl bg-slate-700/60 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-600/80 group-hover:border-sky-400"
                >
                  <span>View Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Support Assurance Ribbon */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Zero Risk Diagnostic Evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-sky-400" />
            <span>Live Phone &amp; Remote Screen Share Assistance</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
