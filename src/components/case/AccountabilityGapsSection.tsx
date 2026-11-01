import React, { useState } from 'react';
import {
  ACCOUNTABILITY_GAPS,
  PRESUMPTION_OF_INNOCENCE_NOTICE,
} from '../../data/caseOverviewData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import type { AccountabilityGap } from '../../types/case';
import {
  AlertOctagon,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react';

export const AccountabilityGapsSection: React.FC = () => {
  const [selectedGap, setSelectedGap] = useState<AccountabilityGap | null>(null);

  return (
    <section className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider block mb-1">
            SEKSI INVESTIGASI TAHAP 3
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
            3. Apa yang belum jelas? (Celah Bukti)
          </h2>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-50 text-red-800 border border-red-200">
          3 CELAH TERBUKA
        </span>
      </div>

      {/* Ethical Presumption of Innocence Notice */}
      <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-lg text-amber-950 text-xs leading-relaxed flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong className="block mb-0.5 text-amber-900 font-bold">
            Asas Praduga Tak Bersalah & Keterbukaan Informasi:
          </strong>
          <p>{PRESUMPTION_OF_INNOCENCE_NOTICE}</p>
        </div>
      </div>

      {/* 3 Accountability Gap Cards */}
      <div className="space-y-4">
        {ACCOUNTABILITY_GAPS.map((gap) => (
          <div
            key={gap.id}
            className="p-5 rounded-lg border border-red-200/80 bg-red-50/30 hover:bg-red-50/50 transition-colors space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-red-600" />
                <span className="font-mono text-xs font-bold text-red-800">
                  {gap.code}
                </span>
                <span className="text-xs text-slate-500 font-mono">|</span>
                <span className="text-xs font-semibold text-slate-700">
                  {gap.gapType}
                </span>
              </div>
              <StatusBadge
                label="[CELAH BUKTI]"
                type="gap"
                className="self-start text-[10px]"
              />
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-navy mb-1 leading-snug">
                {gap.title}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {gap.description}
              </p>
            </div>

            <div className="pt-2 border-t border-red-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-[11px] font-mono text-slate-500">
                Dasar Hukum: <span className="font-medium text-slate-700">{gap.legalBasis}</span>
              </div>

              <button
                onClick={() => setSelectedGap(gap)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold bg-white text-navy border border-slate-300 hover:bg-navy hover:text-white transition-colors cursor-pointer self-start sm:self-auto shadow-2xs"
              >
                <span>{gap.actionLabel}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Gap Action Detail Modal */}
      {selectedGap && (
        <BaseModal
          isOpen={!!selectedGap}
          onClose={() => setSelectedGap(null)}
          title={`Advokasi Informasi Publik: ${selectedGap.code}`}
          subtitle={selectedGap.title}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide mb-1">
                Kesenjangan Dokumen Publik yang Teridentifikasi:
              </h4>
              <p className="bg-slate-50 p-3 rounded border border-slate-200 leading-relaxed">
                {selectedGap.description}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
              <span className="font-bold text-navy text-xs uppercase block">
                Dasar Hukum & Rujukan Keterbukaan Informasi:
              </span>
              <p className="text-slate-600">{selectedGap.legalBasis}</p>
            </div>

            <div>
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide mb-1.5">
                Langkah Permohonan Informasi ke Badan Publik Terkait:
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600 pl-1">
                <li>
                  Ajukan permohonan tertulis atau daring melalui portal PPID instansi penerbit anggaran atau pengadaan.
                </li>
                <li>
                  Cantumkan rujukan Pasal 11 UU KIP (Kewajiban Badan Publik menyediakan informasi pengadaan barang dan jasa pemerintah).
                </li>
                <li>
                  Badan publik wajib memberikan jawaban tertulis dalam kurun waktu 10 + 7 hari kerja sejak permohonan teregistrasi.
                </li>
                <li>
                  Apabila tidak ditanggapi, warga berhak mengajukan keberatan kepada Atasan PPID hingga sengketa informasi ke Komisi Informasi.
                </li>
              </ol>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-slate-100">
              <a
                href="https://komisiinformasi.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-navy"
              >
                <span>Portal Komisi Informasi Pusat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedGap(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire transition-colors"
              >
                Pahami & Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </section>
  );
};
