import React from 'react';
import { PUMP_TRIANGULATION_AUDIT } from '../../../data/caseChronologyData';
import { StatusBadge } from '../../common/StatusBadge';
import { AlertOctagon, HelpCircle } from 'lucide-react';

export const PumpAuditSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-red-200/80 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-100 text-red-800 font-mono text-xs font-bold border border-red-200">
            <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
            <span>{PUMP_TRIANGULATION_AUDIT.gapCode}</span>
          </span>
          <span className="text-xs font-mono font-bold text-slate-700">
            {PUMP_TRIANGULATION_AUDIT.gapSubtitle}
          </span>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200 self-start sm:self-auto">
          {PUMP_TRIANGULATION_AUDIT.repoStatus}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
          {PUMP_TRIANGULATION_AUDIT.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Pemeriksaan komparatif tiga titik verifikasi: dokumen perbendaharaan, portal lelang terbuka, dan kondisi faktual armada pemadam lapangan.
        </p>
      </div>

      {/* 3 Comparison Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PUMP_TRIANGULATION_AUDIT.columns.map((col) => (
          <div
            key={col.id}
            className="p-5 rounded-lg border border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-extrabold text-sapphire bg-slate-200 px-1.5 py-0.5 rounded">
                  0{col.columnNumber}
                </span>
                <h4 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                  {col.title}
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {col.body}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <StatusBadge
                label={col.statusLabel}
                type={col.statusType}
                className="text-[10px] w-full justify-center text-center"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Explanatory Note */}
      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
        <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Ketiadaan berkas lelang LPSE dan BAST fisik pada repositori terbuka mengindikasikan disparitas rantai audit pengadaan, namun tidak serta merta membuktikan delik pidana korupsi. Warga disarankan memanfaatkan saluran permohonan informasi PPID resmi di bawah.
        </p>
      </div>
    </div>
  );
};

