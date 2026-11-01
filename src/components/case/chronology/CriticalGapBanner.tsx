import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { CRIMSON_BANNER_DATA } from '../../../data/caseChronologyData';

export const CriticalGapBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-950 border-2 border-red-700/80 rounded-xl p-6 text-white shadow-md space-y-3">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-red-800/80 border border-red-600 shrink-0">
          <AlertTriangle className="w-5 h-5 text-amber-300" />
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold text-red-300 uppercase tracking-widest block">
            PERINGATAN AUDIT INVESTIGATIF
          </span>
          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-white leading-snug">
            {CRIMSON_BANNER_DATA.title}
          </h3>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-red-100 leading-relaxed font-sans pl-0 sm:pl-12">
        {CRIMSON_BANNER_DATA.description}
      </p>

      <div className="flex items-start gap-2 pt-2 border-t border-red-800/60 text-[11px] text-red-200 pl-0 sm:pl-12">
        <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {CRIMSON_BANNER_DATA.disclaimer}
        </p>
      </div>
    </div>
  );
};

