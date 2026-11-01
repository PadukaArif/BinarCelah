import React, { useState, useMemo } from 'react';
import { CaseLayout } from '../components/case/CaseLayout';
import {
  GAPS_PAGE_HEADER,
  GAPS_MANDATORY_DISCLAIMER,
  GAPS_DETAILED_ITEMS,
} from '../data/caseGapsData';
import { GapsSummaryKpiStrip } from '../components/case/gaps/GapsSummaryKpiStrip';
import { GapsFilterBar, type GapCategoryType } from '../components/case/gaps/GapsFilterBar';
import { GapComparisonCard } from '../components/case/gaps/GapComparisonCard';
import { SpatialHotspotCard } from '../components/case/gaps/SpatialHotspotCard';
import { AdvocacyStepsSection } from '../components/case/gaps/AdvocacyStepsSection';
import { AdvocacyDownloadModal } from '../components/case/gaps/AdvocacyDownloadModal';
import { NonAffiliationBanner } from '../components/case/gaps/NonAffiliationBanner';
import { StatusBadge } from '../components/common/StatusBadge';
import {
  AlertCircle,
  Copy,
  Check,
  Download,
  Hash,
  Shield,
} from 'lucide-react';

export const CaseGapsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GapCategoryType>('semua');
  const [copiedHash, setCopiedHash] = useState(false);
  const [isDownloadCenterOpen, setIsDownloadCenterOpen] = useState(false);

  const handleCopyManifestHash = () => {
    navigator.clipboard.writeText(GAPS_PAGE_HEADER.manifestHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const counts = useMemo(() => {
    return {
      semua: GAPS_DETAILED_ITEMS.length,
      realisasi: GAPS_DETAILED_ITEMS.filter((g) => g.category === 'realisasi').length,
      anggaran: GAPS_DETAILED_ITEMS.filter((g) => g.category === 'anggaran').length,
      ekologis: GAPS_DETAILED_ITEMS.filter((g) => g.category === 'ekologis').length,
    };
  }, []);

  const filteredGaps = useMemo(() => {
    if (activeCategory === 'semua') return GAPS_DETAILED_ITEMS;
    return GAPS_DETAILED_ITEMS.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  return (
    <CaseLayout activeTab="celah">
      <div className="space-y-8">
        {/* 1. Sub-Header & Primary Page Actions */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs font-mono">
                <span className="font-bold text-navy bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {GAPS_PAGE_HEADER.dossierCode}
                </span>
                <span className="text-slate-500 font-semibold">
                  {GAPS_PAGE_HEADER.region}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
                {GAPS_PAGE_HEADER.title}
              </h2>
            </div>

            {/* Action Buttons in Sub-Header */}
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
              <button
                type="button"
                onClick={handleCopyManifestHash}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold bg-white text-navy border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
                title="Salin Hash Manifest Bukti Kriptografis"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hash Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>SALIN MANIFEST HASH</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsDownloadCenterOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>UNDUH BERKAS ADVOKASI (ZIP)</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl font-sans">
              {GAPS_PAGE_HEADER.subtitle}
            </p>
            <StatusBadge
              label={GAPS_PAGE_HEADER.statusBadge}
              type="case_param"
              className="self-start sm:self-auto shrink-0"
            />
          </div>
        </div>

        {/* 2. Summary KPI Strip (4 Metrics per F-PROV-04) */}
        <GapsSummaryKpiStrip />

        {/* 3. Section Header & Mandatory Disclaimer */}
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider block">
                INVESTIGASI CELAH TRANSPARANSI
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                Kesenjangan Informasi & Pertanyaan Riset
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 self-start sm:self-auto font-bold">
              3 CELAH TERVALIDASI METODOLOGI
            </span>
          </div>

          {/* Mandatory Contextual Non-criminal Disclaimer */}
          <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-900 block mb-0.5">
                Penafian Metodologi Riset Akuntabilitas:
              </strong>
              <p>{GAPS_MANDATORY_DISCLAIMER}</p>
            </div>
          </div>
        </div>

        {/* 4. Filter Pills Bar */}
        <GapsFilterBar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />

        {/* 5. Detailed Gap Comparison Cards List */}
        <div className="space-y-6">
          {filteredGaps.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-300 p-8 text-center space-y-3">
              <p className="text-slate-600 text-sm">
                Tidak ada celah yang cocok dengan kategori filter yang dipilih.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('semua')}
                className="px-4 py-2 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer"
              >
                Tampilkan Semua Celah
              </button>
            </div>
          ) : (
            filteredGaps.map((gap) => (
              <GapComparisonCard key={gap.id} gap={gap} />
            ))
          )}
        </div>

        {/* 6. Spatial & Hotspot Sensor Map Section */}
        <SpatialHotspotCard />

        {/* 7. Evidence-based Advocacy Steps (3 Steps) */}
        <AdvocacyStepsSection />

        {/* 8. Non-Affiliation and Privacy Protection Banner */}
        <NonAffiliationBanner />

        {/* 9. Case Workspace Footer Integrity Checksum */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-3 max-w-2xl">
            <Shield className="w-5 h-5 text-sapphire shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="font-bold text-navy text-xs uppercase block">
                Integritas Bukti & Batasan Faktual
              </strong>
              <p className="leading-relaxed text-[11px] text-slate-500">
                Seluruh berkas yang tertera disusun berdasarkan bukti dokumen terbuka, citra satelit independen, dan hak akses informasi publik. Redaksi BinarCelah menjunjung asas praduga tak bersalah (Pasal 8 ayat (1) UU No. 48 Tahun 2009). Keberadaan status Celah Bukti menandakan ketiadaan dokumentasi akuntabilitas publik pada repositori resmi negara, bukan vonis pidana.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] shrink-0 space-y-1">
            <div className="flex items-center gap-1.5 text-navy font-bold">
              <Hash className="w-3.5 h-3.5 text-slate-400" />
              <span>MERKLE ROOT HASH</span>
            </div>
            <div className="text-slate-600 truncate max-w-xs">
              7b39f029c2...41a7d8004fce [SKEMA PROTOTIPE]
            </div>
            <div className="text-[10px] text-slate-400">
              Disinkronisasi: 28 Okt 2026, 23:59 WIB [SIMULASI]
            </div>
          </div>
        </div>
      </div>

      {/* Advocacy Download Center Modal */}
      <AdvocacyDownloadModal
        isOpen={isDownloadCenterOpen}
        onClose={() => setIsDownloadCenterOpen(false)}
      />
    </CaseLayout>
  );
};
