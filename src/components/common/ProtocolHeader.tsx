import React from 'react';
import { PROTOCOL_INFO } from '../../data/homeData';

export const ProtocolHeader: React.FC = () => {
  return (
    <header className="bg-[#0B132B] text-slate-300 text-xs border-b border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Left tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5 font-medium tracking-wide text-slate-200">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full inline-block"></span>
              JURNALISME BUKTI PUBLIK
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">
              PENELUSURAN DOKUMEN & KEBIJAKAN TERBUKA
            </span>
          </div>

          {/* Right audit status */}
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="text-slate-400 hidden xl:inline">
              {PROTOCOL_INFO.standard}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-300 font-medium">{PROTOCOL_INFO.statusLabel}:</span>
              <span
                className="bg-slate-800 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider"
                title={PROTOCOL_INFO.statusNote}
              >
                {PROTOCOL_INFO.statusState}
              </span>
            </div>
            {/* Hash status */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/60 px-2 py-0.5 rounded font-mono text-[10px] text-slate-400">
              <span className="text-slate-500 font-semibold">ROOT HASH:</span>
              <span className="text-slate-400 truncate max-w-[160px] sm:max-w-none">
                {PROTOCOL_INFO.rootHash}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
