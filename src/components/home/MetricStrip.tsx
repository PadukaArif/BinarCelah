import React from 'react';
import { PLATFORM_METRICS } from '../../data/homeData';
import { Layers, FileSearch, AlertCircle, FileCheck2, ShieldCheck } from 'lucide-react';

export const MetricStrip: React.FC = () => {
  const getIcon = (type: string, id: string) => {
    if (id === 'm-1') return <Layers className="w-5 h-5 text-sapphire" />;
    if (id === 'm-2') return <FileSearch className="w-5 h-5 text-blue-700" />;
    if (id === 'm-3') return <AlertCircle className="w-5 h-5 text-amber-600" />;
    if (id === 'm-4') return <FileCheck2 className="w-5 h-5 text-emerald-700" />;

    switch (type) {
      case 'capability':
        return <Layers className="w-5 h-5 text-sapphire" />;
      case 'target':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      case 'methodology':
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section className="py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {PLATFORM_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`flex flex-col justify-between ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {getIcon(metric.type, metric.id)}
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Kemampuan Platform
                </span>
              </div>

              <div>
                <div className="font-mono font-bold leading-tight text-xs sm:text-sm text-navy uppercase tracking-wide">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-sans">
                  {metric.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
