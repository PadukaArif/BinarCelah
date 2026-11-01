import React, { useState } from 'react';
import {
  SPATIAL_COVERAGE_DATA,
  CASE_CUSTODY_ITEMS,
  PUBLIC_METADATA_DATA,
} from '../../data/caseOverviewData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import {
  MapPin,
  CheckCircle2,
  XCircle,
  UploadCloud,
  FileText,
  Layers,
  ExternalLink,
} from 'lucide-react';

export const CaseSidebar: React.FC = () => {
  const [isDropModalOpen, setIsDropModalOpen] = useState(false);
  const [isMapDetailOpen, setIsMapDetailOpen] = useState(false);

  return (
    <aside className="space-y-6">
      {/* 1. Spatial Coverage Card with Illustrative SVG Map */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-4 overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sapphire" />
            <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
              Cakupan Spasial Investigasi
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Kalteng
          </span>
        </div>

        {/* Mandatory Exact Label */}
        <div className="p-2 bg-amber-50 border border-amber-200 rounded text-center">
          <span className="font-mono text-[10px] font-bold text-amber-900 tracking-tight block">
            {SPATIAL_COVERAGE_DATA.mapLabel}
          </span>
        </div>

        {/* Illustrative SVG Vector Map */}
        <div
          onClick={() => setIsMapDetailOpen(true)}
          className="relative bg-[#0d1b2a] rounded-lg border border-slate-800 p-3 overflow-hidden cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsMapDetailOpen(true);
            }
          }}
          aria-label="Perbesar peta ilustratif DAS Sekonyer"
        >
          <svg
            className="w-full h-44 transition-transform group-hover:scale-[1.02] duration-300"
            viewBox="0 0 320 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Grid Pattern */}
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="320" height="180" fill="url(#grid)" />

            {/* National Park Boundary (Illustrative Polygon) */}
            <path
              d="M 40 30 L 140 25 L 200 65 L 220 140 L 90 155 L 30 110 Z"
              fill="#064e3b"
              fillOpacity="0.3"
              stroke="#059669"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />
            <text
              x="60"
              y="55"
              fill="#34d399"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
            >
              TN TANJUNG PUTING
            </text>

            {/* Buffer Corridor / DAS Sekonyer Area */}
            <path
              d="M 140 25 L 280 40 L 290 125 L 200 65 Z"
              fill="#b45309"
              fillOpacity="0.25"
              stroke="#f59e0b"
              strokeWidth="1.5"
            />
            <text
              x="180"
              y="45"
              fill="#fbbf24"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
            >
              KORIDOR PENYANGGA (±480 Ha)
            </text>

            {/* Sekonyer River Path */}
            <path
              d="M 50 160 Q 110 110 160 85 T 270 45"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <text
              x="140"
              y="110"
              fill="#7dd3fc"
              fontSize="7"
              fontFamily="sans-serif"
            >
              Sungai Sekonyer
            </text>

            {/* Illustrative Thermal Anomaly Cluster */}
            <circle cx="215" cy="80" r="14" fill="#ef4444" fillOpacity="0.35" />
            <circle cx="215" cy="80" r="6" fill="#dc2626" />
            <circle cx="230" cy="95" r="9" fill="#ef4444" fillOpacity="0.3" />
            <circle cx="230" cy="95" r="4" fill="#dc2626" />

            <text
              x="225"
              y="75"
              fill="#fca5a5"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Indikasi Anomali
            </text>

            {/* Landmark: Camp Leakey Indicator */}
            <circle cx="95" cy="90" r="3.5" fill="#10b981" />
            <text
              x="104"
              y="93"
              fill="#a7f3d0"
              fontSize="7"
              fontFamily="sans-serif"
            >
              Camp Leakey
            </text>
          </svg>

          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-400 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-700">
            Klik untuk detail
          </div>
        </div>

        {/* Spatial Parameters Metadata */}
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-600 bg-slate-50 p-3 rounded border border-slate-200">
          <div>
            <span className="text-slate-400 block text-[10px]">KOORDINAT TEKS:</span>
            <span className="font-semibold text-slate-800">{SPATIAL_COVERAGE_DATA.coordinates}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">LUAS INDIKASI:</span>
            <span className="font-semibold text-slate-800">{SPATIAL_COVERAGE_DATA.areaEstimate}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">TIPE EKOSISTEM:</span>
            <span className="font-semibold text-slate-800">{SPATIAL_COVERAGE_DATA.ecosystem}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">LOKASI WILAYAH:</span>
            <span className="font-semibold text-slate-800 truncate block">
              {SPATIAL_COVERAGE_DATA.locationName}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Dossier Integrity Summary Card */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sapphire" />
            <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
              Statistik Integritas Dossier
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500">
            Studi Kasus
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
            <span className="text-lg font-bold font-mono text-navy block">04</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase block leading-tight">
              Simpul Kasus
            </span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
            <span className="text-lg font-bold font-mono text-navy block">03</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase block leading-tight">
              Vektor Silang
            </span>
          </div>
          <div className="p-2.5 bg-red-50 rounded border border-red-200">
            <span className="text-lg font-bold font-mono text-red-700 block">03</span>
            <span className="text-[10px] text-red-600 font-mono uppercase block leading-tight">
              Celah Bukti
            </span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
            <span>Rantai Alur Skenario:</span>
            <span className="font-bold text-slate-700">3 dari 4 Rantai (75%)</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div className="bg-slate-500 h-2 rounded-full w-[75%]"></div>
          </div>
          <span className="text-[10px] text-slate-400 font-mono block pt-0.5">
            *Berdasarkan rasio 3 simpul skenario berbanding 1 simpul celah data.
          </span>
        </div>
      </div>

      {/* 3. Chain of Custody Checklist */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-3">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
            Rantai Bukti Kasus (Chain of Custody)
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">
            Status Validasi Tiap Tahapan Skenario
          </span>
        </div>

        <div className="space-y-2.5 pt-1">
          {CASE_CUSTODY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-2 text-xs p-2 rounded bg-slate-50 border border-slate-200/80"
            >
              <div className="flex items-start gap-2">
                {item.isComplete ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-bold text-navy block text-xs">
                    {item.stageNumber}. {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.statusText}
                  </span>
                </div>
              </div>
              <StatusBadge
                label={item.isComplete ? 'TERPETAKAN' : 'CELAH DATA'}
                type={item.statusType}
                className="text-[9px] shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Case-Specific Secure Drop Prototype */}
      <div className="bg-slate-50 rounded-xl border border-slate-300 shadow-xs p-5 space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <UploadCloud className="w-4 h-4 text-sapphire" />
          <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
            Kanal Bukti Kasus #BC-2026-08
          </h3>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Bagi pihak yang memiliki dokumen fisik BAST, lembar tender, atau foto lapangan terkait penanganan kawasan Sekonyer.
        </p>

        <div
          onClick={() => setIsDropModalOpen(true)}
          className="border-2 border-dashed border-slate-300 hover:border-sapphire bg-white p-4 rounded-lg text-center cursor-pointer transition-colors"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsDropModalOpen(true);
            }
          }}
          aria-label="Kirim dokumen bukti spesifik kasus"
        >
          <FileText className="w-6 h-6 text-slate-400 mx-auto mb-1" />
          <span className="text-xs font-bold text-navy block">
            Serahkan Bukti Kasus Ini
          </span>
          <span className="text-[10px] text-amber-800 font-mono block mt-0.5">
            [PROTOTIPE NON-OPERASIONAL]
          </span>
        </div>
      </div>

      {/* 5. Public Metadata Specifications */}
      <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-3 text-xs">
        <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
          <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
            Metadata Dossier Publik
          </h3>
          <span className="text-[10px] font-mono text-slate-400">
            Audit Trail
          </span>
        </div>

        <div className="space-y-2 font-mono text-[11px] text-slate-600">
          <div>
            <span className="text-slate-400 block text-[10px]">INISIATOR KAJIAN:</span>
            <span className="font-semibold text-slate-800">{PUBLIC_METADATA_DATA.initiator}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">VERIFIKASI EDITORIAL:</span>
            <span className="font-semibold text-slate-800">{PUBLIC_METADATA_DATA.reviewers}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">STATUS LISENSI:</span>
            <span className="font-semibold text-slate-800">{PUBLIC_METADATA_DATA.license}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">URN DOSSIER:</span>
            <span className="font-semibold text-slate-800 break-all">{PUBLIC_METADATA_DATA.urn}</span>
          </div>
        </div>
      </div>

      {/* Drop Modal Prototype Notice */}
      <BaseModal
        isOpen={isDropModalOpen}
        onClose={() => setIsDropModalOpen(false)}
        title="Prototipe Penyerahan Bukti Kasus #BC-2026-08"
        subtitle="Simulasi Kanal Penyerahan Berkas Spesifik Kasus"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
            <strong>Pemberitahuan Transparansi Prototipe:</strong> Komponen ini merupakan simulasi antarmuka percontohan. Platform ini tidak menerima, mengirimkan, atau menyimpan dokumen asli di peladen.
          </div>

          <div>
            <h4 className="font-bold text-navy text-xs uppercase mb-1">
              Kanal Pelaporan Resmi:
            </h4>
            <p className="text-xs text-slate-600">
              Warga yang memiliki dokumen pengadaan publik disarankan menggunakan saluran pengaduan resmi pemerintah di{' '}
              <a
                href="https://www.lapor.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sapphire underline inline-flex items-center gap-1"
              >
                <span>SP4N LAPOR!</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
        </div>
      </BaseModal>

      {/* Spatial Map Detail Modal */}
      <BaseModal
        isOpen={isMapDetailOpen}
        onClose={() => setIsMapDetailOpen(false)}
        title="Detail Cakupan Spasial Koridor DAS Sekonyer"
        subtitle={SPATIAL_COVERAGE_DATA.mapLabel}
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            Grafis peta di atas merupakan representasi vektor skematis untuk mendemonstrasikan orientasi spasial antara koridor penyangga, aliran Sungai Sekonyer, kawasan rehabilitasi Camp Leakey, dan zonasi inti Taman Nasional Tanjung Puting.
          </p>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs space-y-1">
            <strong>Catatan Kepatuhan Bukti Geospasial:</strong>
            <p>
              Grafis ini bukan merupakan peta batas yuridis resmi, hasil survey topografi terverifikasi, atau shapefile GIS berlisensi BIG/Kemenhut. Tidak boleh dijadikan dasar klaim sengketa batas lahan resmi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 font-mono text-xs p-2.5 bg-slate-50 rounded border border-slate-200">
            <div>Koordinat: {SPATIAL_COVERAGE_DATA.coordinates}</div>
            <div>Luas: {SPATIAL_COVERAGE_DATA.areaEstimate}</div>
          </div>
        </div>
      </BaseModal>
    </aside>
  );
};
