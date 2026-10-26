import React, { useState } from 'react';
import { FileText, Download, Printer, Wifi, ArrowRight, CheckCircle2, AlertCircle, Wrench, Clock } from 'lucide-react';

interface IssuesProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact' | 'services') => void;
}

const issues = [
  {
    id: 'paper-jam',
    Icon: FileText,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    borderColor: 'hover:border-amber-400',
    accentGrad: 'from-amber-500 to-orange-500',
    timeEstimate: '3-5 Mins',
    severity: 'Hardware Obstruction',
    title: 'Paper Jam Issue',
    description: 'Paper jams disrupt your workflow and strain internal rollers. Our service quickly pinpoints the obstruction, safely extracts stuck paper, and checks the feed mechanism to prevent recurring jams.',
    symptoms: ['Carriage stall error', 'Feed roller slipping', 'Accordion fold crinkle'],
    actionText: 'Resolve Paper Jam',
  },
  {
    id: 'driver-updates',
    Icon: Download,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    borderColor: 'hover:border-blue-400',
    accentGrad: 'from-blue-600 to-sky-500',
    timeEstimate: '5-8 Mins',
    severity: 'Software & OS',
    title: 'Driver Updates & Spooler',
    description: 'Keep your printer communicating reliably with your PC or Mac. We verify, update, and install the latest manufacturer drivers to resolve spooler errors and system compatibility conflicts.',
    symptoms: ['Print spooler service stops', 'Corrupt OEM inf driver', 'Windows 11 update glitch'],
    actionText: 'Update Drivers',
  },
  {
    id: 'offline-printer',
    Icon: Printer,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    borderColor: 'hover:border-indigo-400',
    accentGrad: 'from-indigo-600 to-violet-500',
    timeEstimate: '4-6 Mins',
    severity: 'Port & IP Conflict',
    title: 'Fix Offline Printer State',
    description: 'Is your printer stuck on "Offline"? We diagnose IP sleep states, re-establish computer-to-printer network ports, and get your device ready for immediate, uninterrupted printing.',
    symptoms: ['Greyed out icon', 'SNMP port timeout', 'Sleep mode disconnect'],
    actionText: 'Fix Offline State',
  },
  {
    id: 'wifi-issues',
    Icon: Wifi,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    borderColor: 'hover:border-emerald-400',
    accentGrad: 'from-emerald-600 to-teal-500',
    timeEstimate: '5-10 Mins',
    severity: 'Wireless Protocol',
    title: 'Printer Wi-Fi & Pairing',
    description: 'Trouble connecting to your home or office Wi-Fi? We diagnose router band mismatches, re-sync wireless credentials, and establish stable connections for effortless wireless printing.',
    symptoms: ['2.4GHz vs 5GHz conflict', 'Printer IP dropped', 'WPA3 handshake failure'],
    actionText: 'Fix Wi-Fi Sync',
  },
];

const Issues: React.FC<IssuesProps> = ({ onNavigate }) => {
  const [activeModalIssue, setActiveModalIssue] = useState<typeof issues[0] | null>(null);

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden" id="printer-issues">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 border border-blue-200/80 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Interactive Diagnostic Center
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-900 mb-3">
            COMMON PRINTER ISSUES WE RESOLVE
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Encountering unexpected errors? Click any issue below to inspect typical causes and get verified step-by-step diagnostic resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue) => {
            const IconComponent = issue.Icon;
            return (
              <div
                key={issue.id}
                onClick={() => setActiveModalIssue(issue)}
                className={`group bg-white rounded-3xl p-6 border border-slate-200/80 ${issue.borderColor} shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${issue.accentGrad}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${issue.iconBg} ${issue.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{issue.timeEstimate}</span>
                    </div>
                  </div>

                  {/* Severity Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {issue.severity}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {issue.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4">
                    {issue.description}
                  </p>

                  {/* Symptoms Checklist */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    <span className="text-[10.5px] font-bold uppercase text-slate-400 block">Common Symptoms:</span>
                    {issue.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11.5px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>{issue.actionText}</span>
                  <span className="w-7 h-7 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need Immediate Hands-on Support Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a recurring or complex error code?</h4>
              <p className="text-xs text-slate-500">Our technicians provide diagnostic verification and setup instructions for all brands.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.('services')}
            className="shrink-0 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer border-none shadow-sm"
          >
            Explore Support Services
          </button>
        </div>

      </div>

      {/* Interactive Diagnostic Detail Modal */}
      {activeModalIssue && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalIssue(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalIssue(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border-none"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${activeModalIssue.iconBg} ${activeModalIssue.iconColor} flex items-center justify-center`}>
                <activeModalIssue.Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Diagnostic Guide</span>
                <h3 className="text-xl font-black text-slate-900">{activeModalIssue.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {activeModalIssue.description}
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Our Standard Resolution Protocol:</h4>
              <ul className="space-y-2 text-xs text-slate-600 list-none p-0 m-0">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 font-bold text-[10px] flex items-center justify-center">1</span>
                  <span>Full hardware power cycle &amp; physical roller/tray inspection.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 font-bold text-[10px] flex items-center justify-center">2</span>
                  <span>Port verification, IP reservation, or driver spooler purge.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 font-bold text-[10px] flex items-center justify-center">3</span>
                  <span>Official manufacturer software alignment &amp; test print verification.</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveModalIssue(null);
                  onNavigate?.('services');
                }}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer border-none text-center shadow-md"
              >
                Get Technician Support
              </button>
              <button
                type="button"
                onClick={() => setActiveModalIssue(null)}
                className="py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Issues;
