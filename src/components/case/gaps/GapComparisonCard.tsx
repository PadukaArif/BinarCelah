import React, { useState } from 'react';
import type { GapDetailedItem } from '../../../types/case';
import { BaseModal } from '../../common/BaseModal';
import {
  AlertOctagon,
  HelpCircle,
  FileText,
  Copy,
  Check,
  Eye,
  FileQuestion,
} from 'lucide-react';

interface GapComparisonCardProps {
  gap: GapDetailedItem;
}

export const GapComparisonCard: React.FC<GapComparisonCardProps> = ({ gap }) => {
  const [activeModal, setActiveModal] = useState<'evidence' | 'kip' | null>(null);
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [copiedKip, setCopiedKip] = useState(false);

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(gap.factualQuotation);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleCopyKip = () => {
    const kipTextWithHeader = `[DRAF PERTANYAAN INFORMASI UU KIP NO. 14/2008 - SIMULASI PROTOTIPE BINARCELAH]

DASAR ADVOKASI: ${gap.code} (${gap.sector})
${gap.kipQuestionDraft}`;
    navigator.clipboard.writeText(kipTextWithHeader);
    setCopiedKip(true);
    setTimeout(() => setCopiedKip(false), 2000);
  };

  const significanceColor =
    gap.significance === 'TINGGI'
      ? 'bg-red-100 text-red-800 border-red-200'
      : 'bg-amber-100 text-amber-800 border-amber-200';

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* 1. Header Metadata Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-xs font-bold border ${significanceColor}`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>TINGKAT SIGNIFIKANSI: {gap.significance}</span>
          </span>

          <span className="font-mono text-xs font-bold text-navy bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            KODE: {gap.code}
          </span>

          <span className="text-xs font-mono font-bold text-slate-600">
            SEKTOR: {gap.sector}
          </span>
        </div>

        <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
          Diverifikasi: {gap.verifiedAt}
        </span>
      </div>

      {/* 2. Objective Research Question */}
      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 space-y-1.5">
        <div className="flex items-center gap-1.5 text-sapphire text-xs font-mono font-bold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>PERTANYAAN RISET OBJEKTIF:</span>
        </div>
        <p className="text-sm sm:text-base font-bold text-navy leading-snug">
          &ldquo;{gap.researchQuestion}&rdquo;
        </p>
      </div>

      {/* 3. Two-Column Comparison Grid (Desktop: 2 columns, Mobile: Stacked) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Parameter Terdata */}
        <div className="bg-slate-50/60 rounded-xl border border-slate-200 p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
              <h4 className="font-mono text-xs font-extrabold text-navy uppercase tracking-wider">
                {gap.knownFacts.header}
              </h4>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-900 border border-blue-200">
                {gap.knownFacts.statusLabel}
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans list-disc list-inside">
              {gap.knownFacts.points.map((pt, idx) => (
                <li key={idx} className="pl-1">
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
            {gap.knownFacts.reference}
          </div>
        </div>

        {/* Right Column: Celah / Fakta Belum Terkonfirmasi */}
        <div className="bg-red-50/30 rounded-xl border border-red-200/80 p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-red-200/60 pb-2.5">
              <h4 className="font-mono text-xs font-extrabold text-red-950 uppercase tracking-wider">
                {gap.unknownFacts.header}
              </h4>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-100 text-red-900 border border-red-200">
                {gap.unknownFacts.statusLabel}
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans list-disc list-inside">
              {gap.unknownFacts.points.map((pt, idx) => (
                <li key={idx} className="pl-1">
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-red-200/60 text-[11px] font-mono font-bold text-red-800">
            {gap.unknownFacts.gapIndication}
          </div>
        </div>
      </div>

      {/* 4. Action Buttons Bar */}
      <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200">
        <button
          type="button"
          onClick={() => setActiveModal('evidence')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer shadow-2xs"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>LIHAT BUKTI TERKAIT ({gap.relatedEvidenceDocs.length} DOKUMEN)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveModal('kip')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-white text-navy border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
        >
          <FileQuestion className="w-3.5 h-3.5 text-sapphire" />
          <span>DRAF PERTANYAAN INFORMASI (UU KIP)</span>
        </button>

        <button
          type="button"
          onClick={handleCopyQuote}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-colors cursor-pointer"
        >
          {copiedQuote ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Kutipan Tersalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>SALIN KUTIPAN FAKTUAL</span>
            </>
          )}
        </button>
      </div>

      {/* --- Action Modals --- */}

      {/* Modal 1: Related Evidence Documents */}
      {activeModal === 'evidence' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title={`Arsip Bukti & Parameter Terkait: ${gap.code}`}
          subtitle={`Sektor Investigasi: ${gap.sector}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Daftar dokumen berikut merupakan rujukan parameter studi kasus yang digunakan dalam memetakan kesenjangan informasi publik untuk kode celah <strong>{gap.code}</strong>:
            </p>

            <div className="space-y-2.5">
              {gap.relatedEvidenceDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sapphire shrink-0" />
                      <span className="font-mono text-xs font-bold text-navy">
                        {doc.title}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 pl-6">
                      Sumber: {doc.source} | Kode: {doc.code}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 self-start sm:self-auto">
                    {doc.statusLabel}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs">
              <strong>Catatan Integritas Repositori (F-PROV-02):</strong> Dokumen bertanda parameter studi kasus merujuk pada penetapan alokasi skenario dan ketiadaannya di repositori publik terbuka menjadi dasar pemenuhan hak informasi UU KIP.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 2: KIP Question Draft */}
      {activeModal === 'kip' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title={`Draf Pertanyaan Informasi Publik (UU KIP)`}
          subtitle={`Formulasi Legal Sesuai Pasal 22 UU No. 14/2008 untuk ${gap.code}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Draf permohonan informasi ini diformulasikan secara netral untuk mempermudah warga negara mengajukan hak uji dokumen publik kepada Pejabat Pengelola Informasi dan Dokumentasi (PPID):
            </p>

            <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {`[DRAF PERTANYAAN INFORMASI UU KIP NO. 14/2008 - SIMULASI PROTOTIPE BINARCELAH]

DASAR ADVOKASI: ${gap.code} (${gap.sector})
${gap.kipQuestionDraft}`}
            </pre>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Format Draf Terstruktur Advokasi Publik
              </span>
              <button
                type="button"
                onClick={handleCopyKip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy text-white hover:bg-sapphire text-xs font-bold cursor-pointer transition-colors"
              >
                {copiedKip ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Format Pertanyaan</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};
