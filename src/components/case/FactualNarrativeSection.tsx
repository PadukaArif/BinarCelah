import React, { useState } from 'react';
import {
  SENSOR_EXPLANATION,
  EVIDENCE_DOCUMENT_01A,
  CHAIN_OF_TIMESTAMPS,
  TIMESTAMP_DISPARITY_NOTE,
} from '../../data/caseOverviewData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import {
  FileText,
  Clock,
  Layers,
  Thermometer,
  Eye,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const FactualNarrativeSection: React.FC = () => {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [isSensorInfoModalOpen, setIsSensorInfoModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-sapphire uppercase tracking-wider block mb-1">
            SEKSI INVESTIGASI TAHAP 1
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
            1. Apa yang terjadi? (Rekonstruksi Faktual)
          </h2>
        </div>
        <StatusBadge
          label="PARAMETER SKENARIO DEMONSTRATIF"
          type="case_param"
        />
      </div>

      {/* Narrative Lead */}
      <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
        <p>
          Pada periode 12–18 Oktober 2026, instrumen observasi ruang mendeteksi indikasi anomali termal berulang di koridor penyangga DAS Sekonyer, kawasan Taman Nasional Tanjung Puting. Berdasarkan prinsip metodologi jurnalisme bukti, BinarCelah membedakan secara tegas antara data sensor radiometri termal dengan sensor optik multispektral.
        </p>

        {/* Technical Sensor Distinction Callout */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-navy uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-sapphire" />
              Pembedaan Metodologis Sensor Ruang
            </span>
            <button
              onClick={() => setIsSensorInfoModalOpen(true)}
              className="text-xs font-semibold text-sapphire hover:text-navy hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Detail Spektrum</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                <span>{SENSOR_EXPLANATION.thermalSensorName}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {SENSOR_EXPLANATION.thermalSensorRole}
              </p>
            </div>

            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <div className="font-bold text-navy flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-blue-700" />
                <span>{SENSOR_EXPLANATION.opticalSensorName}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {SENSOR_EXPLANATION.opticalSensorRole}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Document Card #01-A */}
      <div className="rounded-lg border border-slate-300 bg-slate-50/50 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sapphire" />
            <span className="font-mono text-xs font-bold text-navy">
              {EVIDENCE_DOCUMENT_01A.code}
            </span>
          </div>
          <StatusBadge
            label={EVIDENCE_DOCUMENT_01A.classification}
            type={EVIDENCE_DOCUMENT_01A.statusType}
          />
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-bold text-navy mb-1.5">
            {EVIDENCE_DOCUMENT_01A.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {EVIDENCE_DOCUMENT_01A.summary}
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-600 bg-white p-3 rounded border border-slate-200">
          <div>
            <span className="text-slate-400 block text-[10px]">INSTRUMEN:</span>
            <span className="font-semibold text-slate-800">{EVIDENCE_DOCUMENT_01A.instrument}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">KOMPOSISI BAND:</span>
            <span className="font-semibold text-slate-800">{EVIDENCE_DOCUMENT_01A.bandsOrFormat}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">RESOLUSI:</span>
            <span className="font-semibold text-slate-800">{EVIDENCE_DOCUMENT_01A.resolution}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">STATUS CHECKSUM:</span>
            <span className="font-semibold text-slate-800">{EVIDENCE_DOCUMENT_01A.checksumStatus}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] font-mono text-slate-500">
            Koordinat Indikasi: {EVIDENCE_DOCUMENT_01A.coordinatesNote}
          </span>
          <button
            onClick={() => setIsDocModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>Periksa Metadata Berkas</span>
          </button>
        </div>
      </div>

      {/* Chain of Timestamps Widget */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Clock className="w-4 h-4 text-sapphire" />
            Rantai Stempel Waktu (Chain of Timestamps)
          </h3>
          <span className="text-[10px] font-mono text-slate-400">
            Parameter Simulasi Alur
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CHAIN_OF_TIMESTAMPS.map((node, idx) => (
            <div
              key={node.id}
              className="bg-white rounded-lg border border-slate-200 p-4 space-y-2 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sapphire">
                  0{idx + 1}. {node.time}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {node.date}
                </span>
              </div>

              <h4 className="text-xs font-bold text-navy leading-snug">
                {node.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {node.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  {node.sensorOrSource}
                </span>
                <StatusBadge
                  label={node.statusLabel}
                  type={node.statusType}
                  className="text-[9px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Disparity Notice Box */}
        <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-lg text-amber-950 text-xs leading-relaxed flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>{TIMESTAMP_DISPARITY_NOTE}</p>
        </div>
      </div>

      {/* Metadata Document Modal */}
      <BaseModal
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
        title={`Inspeksi Berkas: ${EVIDENCE_DOCUMENT_01A.title}`}
        subtitle={`Identifikasi: ${EVIDENCE_DOCUMENT_01A.code} | Sentinel-2 L2A`}
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div>
            <h4 className="font-semibold text-navy mb-1">Deskripsi Faktual Sensor</h4>
            <p className="bg-slate-50 p-3 rounded border border-slate-200 leading-relaxed">
              Sentinel-2 MSI adalah instrumen optik multispektral orbit rendah (Sun-synchronous). Berkas ini digunakan untuk mendeteksi pantulan inframerah gelombang pendek (SWIR) yang menembus asap tipis dan memetakan pola scars bekas arang gambut terbakar, bukan mengukur radiasi kalor langsung seperti radiometer termal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-400 block text-[10px]">FORMAT & SPEKTRUM:</span>
              <span className="font-bold text-navy">{EVIDENCE_DOCUMENT_01A.bandsOrFormat}</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-400 block text-[10px]">RESOLUSI PIXEL:</span>
              <span className="font-bold text-navy">{EVIDENCE_DOCUMENT_01A.resolution}</span>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
            <strong>Catatan Status Data:</strong> Citra ini merupakan parameter demonstratif yang disimulasikan untuk menguji alur visualisasi bukti. Dokumen raster asli tidak di-hosting pada repositori ini.
          </div>
        </div>
      </BaseModal>

      {/* Sensor Technical Detail Modal */}
      <BaseModal
        isOpen={isSensorInfoModalOpen}
        onClose={() => setIsSensorInfoModalOpen(false)}
        title="Spesifikasi Sensor Observasi Ruang"
        subtitle="Pembedaan Metodologis Sensor Termal vs Sensor Optik Multispektral"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Dalam audit forensik lingkungan independen, mencampuradukkan sensor termal dengan sensor optik merupakan kesalahan metodologi mendasar.
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <h4 className="font-bold text-navy text-xs uppercase mb-1">
                1. Sensor Radiometri Termal (VIIRS / MODIS)
              </h4>
              <p className="text-xs text-slate-600">
                Beroperasi pada panjang gelombang inframerah termal (3.7 µm - 12 µm). Menghitung Fire Radiative Power (FRP) dalam satuan Megawatt. Cocok untuk mendeteksi titik api aktif secara cepat, namun memiliki resolusi spasial kasar (375m hingga 1000m).
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <h4 className="font-bold text-navy text-xs uppercase mb-1">
                2. Sensor Optik Multispektral (Sentinel-2 MSI)
              </h4>
              <p className="text-xs text-slate-600">
                Beroperasi pada spektrum tampak hingga Short-Wave Infrared (SWIR, ~1.6 µm - 2.2 µm). Mengukur reflektansi permukaan pada resolusi tinggi (10m - 20m). Digunakan untuk delineasi visual bekas kebakaran (burn scars), bukan sensor radiometri kalor api langsung.
              </p>
            </div>
          </div>
        </div>
      </BaseModal>
    </section>
  );
};
