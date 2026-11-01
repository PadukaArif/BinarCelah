import React from 'react';
import { Filter } from 'lucide-react';

export type GapCategoryType = 'semua' | 'realisasi' | 'anggaran' | 'ekologis';

interface GapsFilterBarProps {
  activeCategory: GapCategoryType;
  onSelectCategory: (category: GapCategoryType) => void;
  counts: {
    semua: number;
    realisasi: number;
    anggaran: number;
    ekologis: number;
  };
}

export const GapsFilterBar: React.FC<GapsFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const filterPills: Array<{ key: GapCategoryType; label: string; count: number }> = [
    { key: 'semua', label: 'SEMUA', count: counts.semua },
    { key: 'realisasi', label: 'DOKUMEN REALISASI', count: counts.realisasi },
    { key: 'anggaran', label: 'ANGGARAN', count: counts.anggaran },
    { key: 'ekologis', label: 'DAMPAK EKOLOGIS', count: counts.ekologis },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Pills Container */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
          <Filter className="w-3 h-3 text-slate-400" />
          <span>FILTER CELAH:</span>
        </span>

        {filterPills.map((pill) => {
          const isActive = activeCategory === pill.key;
          return (
            <button
              key={pill.key}
              type="button"
              onClick={() => onSelectCategory(pill.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                isActive
                  ? 'bg-navy text-white border-navy shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-navy hover:border-slate-300'
              }`}
            >
              <span>{pill.label}</span>{' '}
              <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                ({pill.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Count Hint */}
      <div className="text-[11px] font-mono text-slate-500 self-start md:self-auto">
        Menampilkan <strong className="text-navy">{counts[activeCategory]}</strong> dari {counts.semua} celah akuntabilitas
      </div>
    </div>
  );
};

