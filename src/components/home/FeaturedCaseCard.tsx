import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Printer,
  Calendar,
  MapPin,
  FileText,
  AlertTriangle,
  Info,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { FEATURED_CASE, CHAIN_OF_EVIDENCE_NODES } from '../../data/homeData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import type { EvidenceChainNode } from '../../types/case';

export const FeaturedCaseCard: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<EvidenceChainNode | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const handlePrint = () => {
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <section id="featured-case" className="py-12 lg:py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono font-bold tracking-wider text-sapphire uppercase">
                {FEATURED_CASE.badge}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
              Studi Kasus Demonstratif: Rekonstruksi Alur Kebijakan vs Fakta Lapangan
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            {FEATURED_CASE.subtitle}
          </div>
        </div>

        {/* Outer Dossier Card */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden">
          {/* Card Top Metadata Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600">
              <span className="font-mono font-bold text-navy text-sm">
                {FEATURED_CASE.id}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {FEATURED_CASE.region}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {FEATURED_CASE.lastReview}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                {FEATURED_CASE.status}
              </span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
              {/* Left narrative */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-navy leading-snug">
                  {FEATURED_CASE.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                  {FEATURED_CASE.summary}
                </p>
                <div className="text-xs text-slate-500 font-mono pt-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>{FEATURED_CASE.catalogSummary}</span>
                </div>
              </div>

              {/* Right: Structural Flow Status Widget */}
              <div className="lg:col-span-4 bg-slate-50 rounded-lg border border-slate-200 p-5 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mb-3">
                  <Layers className="w-8 h-8 text-sapphire" />
                </div>

                <div className="text-[10px] uppercase font-mono text-slate-500 font-bold tracking-wider mb-1">
                  Status Rekonstruksi Alur
                </div>
                <div className="text-xs font-bold text-navy leading-snug">
                  {FEATURED_CASE.auditSummary.progressLabel}
                </div>
                <div className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  Rekonstruksi alur kerja metodologis untuk menguji ketersediaan data terbuka.
                </div>
              </div>
            </div>

            {/* Stepper: Chain of Evidence (4 Nodes) */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Rantai Alur Kebijakan & Bukti Lapangan (Chain of Evidence)
                </h4>
                <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                  Klik simpul untuk detail parameter
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {CHAIN_OF_EVIDENCE_NODES.map((node) => {
                  const isGap = node.statusType === 'gap';
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`rounded-lg border p-4 flex flex-col justify-between transition-all cursor-pointer hover:shadow-xs ${
                        isGap
                          ? 'bg-red-50/50 border-red-200 hover:border-red-300'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedNode(node);
                        }
                      }}
                      aria-label={`Lihat detail simpul ${node.stepNumber}: ${node.title}`}
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            {node.stepNumber}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                            {node.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h5
                          className={`text-sm font-bold mb-1.5 ${
                            isGap ? 'text-red-900' : 'text-navy'
                          }`}
                        >
                          {node.title}
                        </h5>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {node.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                        <StatusBadge
                          label={node.statusLabel}
                          type={node.statusType}
                          className="self-start text-[10px]"
                        />
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          {node.referenceCode}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-slate-500 font-sans flex items-center gap-1.5">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Simulasi pengujian alur bukti mencakup instansi kebijakan, alokasi anggaran, dan pengamatan lingkungan.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsPrintModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer"
                aria-label="Cetak / Simpan Halaman sebagai PDF"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>CETAK / SIMPAN HALAMAN SEBAGAI PDF</span>
              </button>

              <Link
                to="/kasus/BC-2026-08/ringkasan"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-navy text-white text-xs font-semibold hover:bg-sapphire transition-colors shadow-xs group cursor-pointer"
              >
                <span>BUKA KASUS & PERIKSA BUKTI LENGKAP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Node Inspection Modal */}
      {selectedNode && (
        <BaseModal
          isOpen={!!selectedNode}
          onClose={() => setSelectedNode(null)}
          title={`Simpul ${selectedNode.stepNumber}: ${selectedNode.title}`}
          subtitle={`Kategori: ${selectedNode.category}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-semibold text-navy mb-1">Deskripsi Faktual Rekonstruksi</h4>
              <p className="leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
                {selectedNode.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">KLASIFIKASI BUKTI:</span>
                <span className="font-bold text-navy">{selectedNode.statusLabel}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">STATUS DATA:</span>
                <span className="font-bold text-navy truncate block">{selectedNode.referenceCode}</span>
              </div>
            </div>

            {selectedNode.statusType === 'gap' ? (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-red-900 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-700" />
                  <span>Kesenjangan Keterbukaan Informasi Publik Teridentifikasi</span>
                </div>
                <p>
                  Dokumen kontrak lelang dan Berita Acara Serah Terima (BAST) tidak ditemukan pada repositori LPSE terkait. Warga berhak mengajukan Permohonan Informasi Publik resmi berdasarkan UU No. 14 Tahun 2008.
                </p>
              </div>
            ) : (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
                <strong>Catatan Verifikasi:</strong> Data pada simpul ini dimasukkan sebagai parameter alur skenario investigasi untuk menguji ketersediaan arsip publik.
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <Link
                to="/kasus/BC-2026-08/ringkasan"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sapphire hover:text-navy hover:underline"
              >
                <span>Periksa dalam Ruang Kerja Kasus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Print PDF Preparation Modal */}
      <BaseModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="Cetak / Simpan Halaman sebagai PDF"
        subtitle="Pratinjau Cetak Halaman Penelusuran Bukti (Native Print Dialog)"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p>
            Aksi ini akan membuka dialog cetak bawaan sistem peramban Anda. Anda dapat mencetak ke kertas fisik atau memilih opsi <strong>"Save as PDF" / "Simpan sebagai PDF"</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
            <li>Halaman diformat otomatis menggunakan stylesheet cetak bersih (menyembunyikan tombol navigasi dan form interaktif).</li>
            <li>Tidak ada dokumen PDF biner tersendiri yang dibuat atau diverifikasi oleh peladen eksternal.</li>
          </ul>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-600">
            <div>Dossier: #BC-2026-08 — Tanjung Puting</div>
            <div>Klasifikasi: Parameter Studi Kasus Demonstratif</div>
            <div>Fungsi: window.print() (Cetak / Simpan Halaman)</div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={() => setIsPrintModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
            >
              Batal
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Buka Dialog Cetak Sistem</span>
            </button>
          </div>
        </div>
      </BaseModal>
    </section>
  );
};
