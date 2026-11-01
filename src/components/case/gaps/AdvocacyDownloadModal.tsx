import React, { useState } from 'react';
import { BaseModal } from '../../common/BaseModal';
import { ADVOCACY_TEXT_TEMPLATES, GAPS_DETAILED_ITEMS } from '../../../data/caseGapsData';
import { Download, FileText, Check, Archive } from 'lucide-react';

interface AdvocacyDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvocacyDownloadModal: React.FC<AdvocacyDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloadedKey, setDownloadedKey] = useState<string | null>(null);

  const downloadTextFile = (content: string, filename: string, key: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedKey(key);
    setTimeout(() => setDownloadedKey(null), 2500);
  };

  const gapSummaryText = `[CATATAN INTEGRITAS: Dokumen ini adalah bagian dari studi kasus demonstratif BinarCelah untuk evaluasi First Draft dan BUKAN dokumen resmi yang diterbitkan instansi pemerintah.]

RINGKASAN 3 CELAH AKUNTABILITAS PUBLIK (KASUS #BC-2026-08)
Kawasan: Koridor Penyangga TN Tanjung Puting, Kalimantan Tengah

${GAPS_DETAILED_ITEMS.map(
  (g, i) => `${i + 1}. KODE: ${g.code} | SEKTOR: ${g.sector} | TINGKAT: ${g.significance}
   Pertanyaan Riset: "${g.researchQuestion}"
   Fakta Terdata: ${g.knownFacts.points.join(' ')}
   Kesenjangan: ${g.unknownFacts.points.join(' ')}
   Kutipan Faktual: ${g.factualQuotation}
`
).join('\n')}
Redaksi BinarCelah menjunjung asas praduga tak bersalah (Pasal 8 ayat (1) UU No. 48 Tahun 2009).`;

  const filesToDownload = [
    {
      key: 'klhk',
      title: 'Formulir Permohonan Informasi PPID KLHK',
      filename: 'Formulir_Permohonan_Informasi_KLHK.txt',
      desc: 'Draf format baku permohonan dokumen kontrak dan BAST pompa (Pasal 22 UU KIP).',
      content: ADVOCACY_TEXT_TEMPLATES.klhk,
      size: '2.1 KB',
    },
    {
      key: 'kemenkeu',
      title: 'Formulir Permohonan Informasi Keuangan PPID Kemenkeu',
      filename: 'Formulir_Permohonan_Informasi_Kemenkeu.txt',
      desc: 'Draf format permohonan audit realisasi DIPA BA 029 dan SP2D sewa helikopter.',
      content: ADVOCACY_TEXT_TEMPLATES.kemenkeu,
      size: '1.8 KB',
    },
    {
      key: 'summary',
      title: 'Matriks Komparasi 3 Celah Akuntabilitas Kasus',
      filename: 'Matriks_3_Celah_Akuntabilitas.txt',
      desc: 'Kompilasi ringkasan parameter empiris versus ketiadaan data publik terbuka.',
      content: gapSummaryText,
      size: '3.4 KB',
    },
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Pusat Unduhan Berkas Advokasi Publik"
      subtitle="Paket Draf & Templat Permohonan Keterbukaan Informasi (UU No. 14/2008)"
      showIntegrityBadge={true}
    >
      <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {/* Transparency callout about individual text files vs zip */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-navy">
            <Archive className="w-4 h-4 text-sapphire" />
            <span>Pemberitahuan Transparansi Paket Berkas (F-101):</span>
          </div>
          <p className="text-slate-600">
            Untuk memastikan kebersihan muatan data dan kepatuhan terhadap standar bebas dependensi liar, BinarCelah menyajikan berkas teks template advokasi secara transparan per dokumen individual (.txt) lengkap dengan catatan integritas resmi di baris pertama.
          </p>
        </div>

        {/* Files list */}
        <div className="space-y-3">
          {filesToDownload.map((f) => (
            <div
              key={f.key}
              className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sapphire shrink-0" />
                  <span className="font-mono text-xs font-bold text-navy">
                    {f.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 pl-6">
                  {f.desc}
                </p>
                <div className="text-[10px] font-mono text-slate-400 pl-6">
                  Nama Berkas: <code>{f.filename}</code> ({f.size})
                </div>
              </div>

              <button
                type="button"
                onClick={() => downloadTextFile(f.content, f.filename, f.key)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-2xs"
              >
                {downloadedKey === f.key ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Terunduh</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Teks</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold rounded bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
