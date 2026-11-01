import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ProtocolHeader } from '../common/ProtocolHeader';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import { CASE_METADATA } from '../../data/caseOverviewData';
import {
  MapPin,
  Calendar,
  Printer,
  Code2,
  Check,
  Copy,
  ChevronRight,
} from 'lucide-react';

interface CaseLayoutProps {
  children: React.ReactNode;
  activeTab?: 'ringkasan' | 'kronologi' | 'celah';
}

export const CaseLayout: React.FC<CaseLayoutProps> = ({
  children,
  activeTab = 'ringkasan',
}) => {
  const { caseId = 'BC-2026-08' } = useParams<{ caseId: string }>();
  const location = useLocation();
  const [isManifestOpen, setIsManifestOpen] = useState(false);
  const [copiedManifest, setCopiedManifest] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Derive active tab from pathname if not explicitly passed
  const currentTab = location.pathname.includes('/kronologi')
    ? 'kronologi'
    : location.pathname.includes('/celah')
    ? 'celah'
    : activeTab;

  const handlePrint = () => {
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 200);
  };

  const handleCopyManifest = () => {
    const manifestJson = JSON.stringify(
      {
        dossierId: CASE_METADATA.id,
        classification: 'PARAMETER_STUDI_KASUS_DEMONSTRATIF',
        title: CASE_METADATA.title,
        region: CASE_METADATA.region,
        status: CASE_METADATA.status,
        rootHash: CASE_METADATA.rootHash,
        disclaimer:
          'Kalkulasi hash lokal ini hanya memverifikasi keutuhan payload statis aplikasi, bukan pembuktian keaslian hukum arsip negara atau sertifikat digital BSrE.',
      },
      null,
      2
    );
    navigator.clipboard.writeText(manifestJson);
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-slate-800">
      {/* 1. Global Protocol Header */}
      <ProtocolHeader />

      {/* 2. Brand Navbar */}
      <Navbar />

      {/* 3. Case Header & Navigation Shell */}
      <header className="bg-white border-b border-slate-200/90 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 mb-4 flex-wrap"
          >
            <Link to="/" className="hover:text-navy underline">
              BERANDA
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/" className="hover:text-navy">
              TEMUKAN ISU
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-700">
              DOSSIER {caseId}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-bold text-navy uppercase">
              {currentTab === 'ringkasan'
                ? 'RINGKASAN & NARASI'
                : currentTab === 'kronologi'
                ? 'KRONOLOGI & JEJAK BUKTI'
                : 'CELAH AKUNTABILITAS'}
            </span>
          </nav>

          {/* Case Metadata Header */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            {/* Row 1: ID, Region, Review Date */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-600">
              <span className="font-mono font-bold text-navy text-sm bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {CASE_METADATA.id}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {CASE_METADATA.region}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {CASE_METADATA.lastReview}
              </span>
            </div>

            {/* Row 2: Main Title & Scope Paragraph */}
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy tracking-tight leading-snug">
                {CASE_METADATA.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-4xl font-sans">
                {CASE_METADATA.scopeSummary}
              </p>
            </div>

            {/* Row 3: Status Badge, Methodology Target, Hash State */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <StatusBadge
                label={CASE_METADATA.status}
                type="case_param"
              />
              <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                {CASE_METADATA.standard}
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                ROOT HASH: {CASE_METADATA.rootHash}
              </span>
            </div>
          </div>

          {/* Horizontal Navigation Tabs & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3">
            {/* 3 Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
              {/* Tab 1: Ringkasan & Narasi */}
              <Link
                to={`/kasus/${caseId}/ringkasan`}
                className={`px-3.5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors whitespace-nowrap ${
                  currentTab === 'ringkasan'
                    ? 'border-navy text-navy bg-slate-50/60'
                    : 'border-transparent text-slate-500 hover:text-navy hover:border-slate-300'
                }`}
              >
                1. RINGKASAN & NARASI
              </Link>

              {/* Tab 2: Kronologi & Jejak Bukti */}
              <Link
                to={`/kasus/${caseId}/kronologi`}
                className={`px-3.5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors whitespace-nowrap ${
                  currentTab === 'kronologi'
                    ? 'border-navy text-navy bg-slate-50/60'
                    : 'border-transparent text-slate-500 hover:text-navy hover:border-slate-300'
                }`}
              >
                2. KRONOLOGI & JEJAK BUKTI
              </Link>

              {/* Tab 3: Celah Akuntabilitas & Langkah Lanjutan */}
              <Link
                to={`/kasus/${caseId}/celah`}
                className={`px-3.5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  currentTab === 'celah'
                    ? 'border-navy text-navy bg-slate-50/60'
                    : 'border-transparent text-slate-500 hover:text-navy hover:border-slate-300'
                }`}
              >
                <span>3. CELAH AKUNTABILITAS</span>
                <span className="bg-red-100 text-red-800 text-[10px] px-1.5 py-0.2 rounded font-bold">
                  3 AKTIF
                </span>
              </Link>
            </div>

            {/* Action Buttons: Export & Manifest */}
            <div className="flex items-center gap-2 pb-2 sm:pb-0">
              <button
                onClick={() => setIsManifestOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
                title="Lihat Manifest Sumber JSON"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">MANIFEST JSON</span>
              </button>

              <button
                onClick={() => setIsPrintModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 transition-colors cursor-pointer"
                title="Cetak / Simpan Halaman sebagai PDF"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>CETAK / SIMPAN SEBAGAI PDF</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Public Footer */}
      <Footer />

      {/* JSON Manifest Modal */}
      <BaseModal
        isOpen={isManifestOpen}
        onClose={() => setIsManifestOpen(false)}
        title="Manifest Data Sumber (JSON)"
        subtitle={`Struktur Data Parameter Kasus: ${CASE_METADATA.id}`}
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs">
          <p className="text-slate-600">
            Berikut adalah representasi manifes metadata lokal untuk pengujian skenario penelusuran bukti terbuka:
          </p>

          <pre className="p-3 bg-slate-900 text-slate-100 rounded-md font-mono text-[11px] overflow-x-auto leading-relaxed">
            {JSON.stringify(
              {
                dossierId: CASE_METADATA.id,
                classification: 'PARAMETER_STUDI_KASUS_DEMONSTRATIF',
                title: CASE_METADATA.title,
                region: CASE_METADATA.region,
                lastReview: CASE_METADATA.lastReview,
                status: CASE_METADATA.status,
                rootHash: CASE_METADATA.rootHash,
                triangulationVectors: ['VEKTOR_A_SATELIT', 'VEKTOR_B_GAKKUM', 'VEKTOR_C_DIPA'],
                activeAccountabilityGaps: 3,
                disclaimer:
                  'Kalkulasi hash lokal ini hanya memverifikasi keutuhan payload statis aplikasi, bukan pembuktian keaslian hukum arsip negara atau sertifikat digital BSrE.',
              },
              null,
              2
            )}
          </pre>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={handleCopyManifest}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-semibold text-slate-700 cursor-pointer transition-colors"
            >
              {copiedManifest ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tersalin ke Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Salin JSON</span>
                </>
              )}
            </button>
          </div>
        </div>
      </BaseModal>

      {/* Print Confirmation Modal */}
      <BaseModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        title="Cetak / Simpan Halaman sebagai PDF"
        subtitle={`Laporan Ruang Kerja Kasus: ${CASE_METADATA.id}`}
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p>
            Aksi ini akan membuka dialog cetak peramban bawaan sistem Anda untuk mencetak atau menyimpan dokumen sebagai PDF bersih.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
            <li>Menyembunyikan navigasi atas, tab bar, dan elemen interaktif (.no-print).</li>
            <li>Memuat identitas lengkap dossier kasus dan catatan kepatuhan bukti.</li>
            <li>Tidak ada file biner terpisah yang dibuat oleh peladen eksternal.</li>
          </ul>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={() => setIsPrintModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
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
    </div>
  );
};

