import React from 'react';
import { GAPS_SUMMARY_KPIS } from '../../../data/caseGapsData';

export const GapsSummaryKpiStrip: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {GAPS_SUMMARY_KPIS.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 flex flex-col justify-between space-y-2 hover:border-slate-400 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              {kpi.badge}
            </span>
          </div>

          <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${kpi.highlight}`}>
            {kpi.value}
          </div>

          <div className="pt-2 border-t border-slate-100 text-xs font-mono font-bold text-slate-700 uppercase leading-snug">
            {kpi.label}
          </div>
        </div>
      ))}
    </div>
  );
};

