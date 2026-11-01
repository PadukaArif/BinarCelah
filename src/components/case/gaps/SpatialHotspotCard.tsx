import React, { useState } from 'react';
import { SPATIAL_HOTSPOT_DATA } from '../../../data/caseGapsData';
import { BaseModal } from '../../common/BaseModal';
import {
  Compass,
  MapPin,
  Flame,
  Layers,
  Hash,
  AlertTriangle,
} from 'lucide-react';

export const SpatialHotspotCard: React.FC = () => {
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-sapphire uppercase tracking-wider block mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-sapphire" />
            <span>{SPATIAL_HOTSPOT_DATA.kicker}</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
            {SPATIAL_HOTSPOT_DATA.title}
          </h3>
        </div>

        <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-bold bg-red-100 text-red-900 border border-red-200 self-start sm:self-auto">
          {SPATIAL_HOTSPOT_DATA.impactZoneBadge}
        </span>
      </div>

      {/* Description & Status Warning */}
      <div className="space-y-3">
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-4xl">
          {SPATIAL_HOTSPOT_DATA.description}
        </p>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span className="font-mono font-bold">
              {SPATIAL_HOTSPOT_DATA.illustrativeNotice}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsNoticeModalOpen(true)}
            className="text-sapphire hover:underline font-mono text-[11px] font-bold cursor-pointer shrink-0"
          >
            Pelajari Batasan
          </button>
        </div>
      </div>

      {/* 2. Visual Layout: Metadata Sidebar + SVG Map Graphic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column (4 cols): Sensor & GIS Telemetry Box */}
        <div className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-4">
          <h4 className="font-mono text-xs font-bold text-navy uppercase tracking-wider border-b border-slate-200 pb-2">
            METADATA TELEMETRI RUANG
          </h4>

          <div className="space-y-3 text-xs font-mono text-slate-700">
            <div>
              <span className="text-slate-400 block text-[10px]">INSTRUMEN SENSOR:</span>
              <span className="font-bold text-navy flex items-center gap-1.5 mt-0.5">
                <Layers className="w-3.5 h-3.5 text-sapphire" />
                <span>{SPATIAL_HOTSPOT_DATA.sensor}</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px]">KOORDINAT TITIK INTI:</span>
              <span className="font-bold text-navy flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>{SPATIAL_HOTSPOT_DATA.coreCoordinates}</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px]">CHECKSUM RASTER GEOTIFF:</span>
              <span className="font-bold text-slate-600 flex items-center gap-1.5 mt-0.5 truncate">
                <Hash className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{SPATIAL_HOTSPOT_DATA.geoTiffHash}</span>
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 font-sans leading-normal">
              Radius anomali termal mencakup 47 titik dengan nilai *Fire Radiative Power* (FRP) &gt; 65 MW di atas kubah gambut dalam (&gt; 3 meter).
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): Topographic SVG Map Illustration */}
        <div className="lg:col-span-8 bg-slate-900 rounded-xl border border-slate-800 p-4 sm:p-6 overflow-hidden relative shadow-inner">
          {/* Map Top Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-2.5 mb-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>47 TITIK ANOMALI TERMAL TERDETEKSI</span>
            </span>
            <span>SKALA KORIDOR: 1 : 50.000</span>
          </div>

          {/* SVG Map Canvas */}
          <div className="w-full aspect-16/9 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 600 320"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Grid Pattern */}
              <defs>
                <pattern
                  id="map-grid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="0.5"
                  />
                </pattern>
                <radialGradient id="heat-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="600" height="320" fill="url(#map-grid)" />

              {/* Peatland Zone Contours */}
              <path
                d="M 40,80 Q 180,60 300,100 T 560,110 L 560,260 Q 420,290 280,250 T 40,240 Z"
                fill="#1e1e38"
                stroke="#334155"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <text
                x="60"
                y="110"
                fill="#64748b"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                ZONA PENYANGGA KUBAH GAMBUT DALAM (&gt;3M)
              </text>

              {/* Sekonyer River Trajectory */}
              <path
                d="M 20,20 C 120,40 180,140 260,150 S 420,220 580,210"
                stroke="#0284c7"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 20,20 C 120,40 180,140 260,150 S 420,220 580,210"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />
              <text
                x="440"
                y="195"
                fill="#38bdf8"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                ALIRAN SUNGAI SEKONYER
              </text>

              {/* Park Core Boundary */}
              <line
                x1="120"
                y1="30"
                x2="120"
                y2="290"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="6 4"
                opacity="0.4"
              />
              <text
                x="125"
                y="285"
                fill="#94a3b8"
                fontSize="9"
                fontFamily="monospace"
              >
                BATAS TAMAN NASIONAL TANJUNG PUTING
              </text>

              {/* Main Thermal Hotspot Anomaly Glow */}
              <circle cx="340" cy="150" r="80" fill="url(#heat-glow)" />

              {/* Hotspot Cluster Points */}
              {[
                [310, 130],
                [330, 125],
                [350, 140],
                [340, 160],
                [365, 155],
                [320, 170],
                [345, 180],
                [300, 150],
                [380, 145],
                [325, 140],
                [355, 165],
                [335, 155],
                [315, 160],
              ].map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="4" fill="#ef4444" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="8"
                    stroke="#f87171"
                    strokeWidth="1"
                    opacity="0.7"
                    className="animate-ping"
                    style={{ animationDuration: `${2 + (i % 3)}s` }}
                  />
                </g>
              ))}

              {/* Core Coordinate Marker Pin */}
              <g transform="translate(340, 150)">
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#ffffff" strokeWidth="1" />
                <line x1="0" y1="-12" x2="0" y2="12" stroke="#ffffff" strokeWidth="1" />
                <rect
                  x="15"
                  y="-18"
                  width="135"
                  height="22"
                  rx="3"
                  fill="#0f172a"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y="-3"
                  fill="#fecaca"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  TITIK INTI: 2°45&apos;S 111°56&apos;E
                </text>
              </g>

              {/* Camp Leakey Landmark */}
              <g transform="translate(160, 80)">
                <polygon points="0,-6 6,6 -6,6" fill="#10b981" />
                <text
                  x="10"
                  y="4"
                  fill="#6ee7b7"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  STASIUN RISET CAMP LEAKEY
                </text>
              </g>

              {/* Compass Rose */}
              <g transform="translate(540, 45)">
                <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                <polygon points="0,-10 3,0 0,-2 -3,0" fill="#ef4444" />
                <polygon points="0,10 3,0 0,2 -3,0" fill="#94a3b8" />
                <text x="-3" y="-14" fill="#ffffff" fontSize="8" fontWeight="bold">U</text>
              </g>
            </svg>
          </div>

          {/* Map Footer Disclaimer */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-3">
            <span>Proyeksi: WGS 84 / UTM Zone 49S</span>
            <span className="text-amber-400">
              [Peta Ilustratif — Bukan Peta Resmi BIG / KLHK]
            </span>
          </div>
        </div>
      </div>

      {/* Modal: Spatial Notice & F-PROV-01 Explanation */}
      {isNoticeModalOpen && (
        <BaseModal
          isOpen={true}
          onClose={() => setIsNoticeModalOpen(false)}
          title="Batasan Hukum Geospasial & Metodologi Sensor"
          subtitle="Kepatuhan Terhadap Kebijakan Satu Peta (Perpres No. 23/2021)"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Berdasarkan prinsip metodologis BinarCelah dan temuan integritas bukti <strong>F-PROV-01</strong>, tampilan peta pada layar ini adalah <strong>rekonstruksi grafis ilustratif</strong> yang menggambarkan konsentrasi sebaran radiasi panas inframerah dari satelit penginderaan jauh MODIS/VIIRS.
            </p>

            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-950 text-xs space-y-1.5">
              <strong className="block font-bold">Kewenangan Walidata Geospasial:</strong>
              <p>
                Sesuai Perpres No. 9 Tahun 2016 jo. Perpres No. 23 Tahun 2021 tentang Kebijakan Satu Peta, peta batas konsesi, tata batas taman nasional, dan peta kerja resmi merupakan kewenangan Badan Informasi Geospasial (BIG) dan Kementerian LHK. BinarCelah tidak memproduksi batas polygon administratif rekaan.
              </p>
            </div>

            <p>
              Warga dan peneliti yang membutuhkan berkas shapefile (.shp) atau GeoJSON definitif disarankan mengajukan permohonan informasi publik ke PPID Kementerian LHK menggunakan templat yang tersedia pada seksi di bawah.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsNoticeModalOpen(false)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire cursor-pointer"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};
