import React from 'react';
import { DATE_PROTOCOL_ITEMS } from '../../../data/caseChronologyData';
import { Clock, ShieldCheck } from 'lucide-react';

export const DateProtocolLegend: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-sapphire" />
          <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
            Protokol Integritas Tanggal BinarCelah
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Metode Verifikasi Independen Celah Waktu & Keterlambatan
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {DATE_PROTOCOL_ITEMS.map((item) => (
          <div
            key={item.key}
            className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-navy tracking-tight">
                {item.label}
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-sapphire" />
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

