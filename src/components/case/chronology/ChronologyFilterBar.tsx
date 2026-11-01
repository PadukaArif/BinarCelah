import React from 'react';
import { Filter, RotateCcw, Calendar, MapPin, Check, Layers, Network } from 'lucide-react';

interface ChronologyFilterBarProps {
  statusFilter: string;
  setStatusFilter: (val: string) => void;
  eventFilter: string;
  setEventFilter: (val: string) => void;
  sectorFilter: string;
  setSectorFilter: (val: string) => void;
  totalNodes: number;
  filteredCount: number;
  onReset: () => void;
  viewMode: 'kronologi' | 'dual' | 'graph';
  setViewMode: (val: 'kronologi' | 'dual' | 'graph') => void;
}

export const ChronologyFilterBar: React.FC<ChronologyFilterBarProps> = ({
  statusFilter,
  setStatusFilter,
  eventFilter,
  setEventFilter,
  sectorFilter,
  setSectorFilter,
  totalNodes,
  filteredCount,
  onReset,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-4">
      {/* Row 1: 4 Dropdowns / Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {/* Status Bukti */}
        <div className="space-y-1">
          <label
            htmlFor="filter-status"
            className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block"
          >
            STATUS BUKTI
          </label>
          <div className="relative">
            <select
              id="filter-status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-sapphire cursor-pointer"
            >
              <option value="all">Semua Status Bukti (4)</option>
              <option value="primer">Tercatat Sumber Primer (1)</option>
              <option value="skenario">Parameter Skenario (1)</option>
              <option value="hukum">Dokumen Hukum Terverifikasi (1)</option>
              <option value="fiskal">Catatan Fiskal Terkonfirmasi (1)</option>
            </select>
          </div>
        </div>

        {/* Jenis Peristiwa */}
        <div className="space-y-1">
          <label
            htmlFor="filter-event"
            className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block"
          >
            JENIS PERISTIWA
          </label>
          <div className="relative">
            <select
              id="filter-event"
              value={eventFilter}
              onChange={(e) => setEventFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-sapphire cursor-pointer"
            >
              <option value="all">Semua Jenis Peristiwa ({totalNodes})</option>
              <option value="satelit">Deteksi Satelit / Ruang (1)</option>
              <option value="lapangan">Laporan Posko Lapangan (1)</option>
              <option value="regulasi">Regulasi Penugasan Hukum (1)</option>
              <option value="anggaran">Pencatatan Fiskal & DIPA (1)</option>
            </select>
          </div>
        </div>

        {/* Rentang Tanggal */}
        <div className="space-y-1">
          <label className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
            RENTANG TANGGAL
          </label>
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs font-mono text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">01 Okt 2026 — 31 Okt 2026</span>
          </div>
        </div>

        {/* Wilayah / Sektor */}
        <div className="space-y-1">
          <label
            htmlFor="filter-sector"
            className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider block"
          >
            WILAYAH / SEKTOR
          </label>
          <div className="relative">
            <select
              id="filter-sector"
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-1 focus:ring-sapphire cursor-pointer"
            >
              <option value="sekonyer">Koridor Sekonyer (Zona Penyangga)</option>
              <option value="all">Semua Wilayah Kabupaten</option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 2: Active Filter Summary & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-slate-200">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            FILTER AKTIF:
          </span>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200">
            <MapPin className="w-3 h-3 text-sapphire" />
            <span>Sektor: Sekonyer</span>
          </span>

          {statusFilter !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-mono text-[11px] border border-blue-200">
              <Check className="w-3 h-3" />
              <span>Status: {statusFilter}</span>
            </span>
          )}

          {eventFilter !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-mono text-[11px] border border-blue-200">
              <Filter className="w-3 h-3" />
              <span>Peristiwa: {eventFilter}</span>
            </span>
          )}

          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-500 hover:text-navy hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filter</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 pl-2 border-l border-slate-200">
            Menampilkan <strong className="text-navy">{filteredCount}</strong> dari {totalNodes} simpul peristiwa terindeks
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-mono self-start md:self-auto">
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Tampilan Split Ganda (Segera Hadir pada Pengembangan Lanjutan)"
            className="px-2.5 py-1 rounded text-[11px] opacity-40 cursor-not-allowed text-slate-400 bg-slate-50 flex items-center gap-1"
          >
            <Layers className="w-3 h-3" />
            <span>Dual Split</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('kronologi')}
            className={`px-2.5 py-1 rounded text-[11px] ${
              viewMode === 'kronologi'
                ? 'bg-navy text-white font-bold shadow-xs'
                : 'text-slate-500'
            } cursor-pointer`}
          >
            Kronologi
          </button>

          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Graf Visual Hubungan Bukti (Segera Hadir pada Pengembangan Lanjutan)"
            className="px-2.5 py-1 rounded text-[11px] opacity-40 cursor-not-allowed text-slate-400 bg-slate-50 flex items-center gap-1"
          >
            <Network className="w-3 h-3" />
            <span>Graph Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

