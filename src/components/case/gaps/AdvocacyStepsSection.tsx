import React, { useState } from 'react';
import {
  ADVOCACY_STEPS,
  ADVOCACY_TEXT_TEMPLATES,
} from '../../../data/caseGapsData';
import { BaseModal } from '../../common/BaseModal';
import {
  FileText,
  Download,
  ExternalLink,
  Check,
  Copy,
} from 'lucide-react';

export const AdvocacyStepsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const downloadTextFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = (text: string, templateKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateKey);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const handleActionClick = (actionKey: string) => {
    if (actionKey === 'download_format_klhk') {
      downloadTextFile(
        ADVOCACY_TEXT_TEMPLATES.klhk,
        'Formulir_Permohonan_Informasi_KLHK.txt'
      );
      setActiveModal('modal_klhk');
    } else if (actionKey === 'download_format_kemenkeu') {
      downloadTextFile(
        ADVOCACY_TEXT_TEMPLATES.kemenkeu,
        'Formulir_Permohonan_Informasi_Kemenkeu.txt'
      );
      setActiveModal('modal_kemenkeu');
    } else {
      setActiveModal(actionKey);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* 1. Header */}
      <div className="border-b border-slate-200 pb-4 space-y-1">
        <span className="text-xs font-mono font-bold text-sapphire uppercase tracking-wider block">
          PEDOMAN ADVOKASI BERBASIS BUKTI
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
          Langkah Terukur Penggunaan Data Publik
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-4xl pt-1">
          BinarCelah menyediakan data mentah dan format permohonan informasi standar untuk mempermudah warga negara mengajukan hak keterbukaan informasi publik secara sah sesuai UU No. 14 Tahun 2008.
        </p>
      </div>

      {/* 2. 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ADVOCACY_STEPS.map((step) => (
          <div
            key={step.number}
            className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-extrabold text-white bg-navy px-2 py-0.5 rounded shadow-2xs">
                  {step.number}
                </span>
                <h4 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                  {step.title}
                </h4>
              </div>

              <div className="text-xs font-bold text-slate-800">
                {step.subtitle}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>

            {/* Actions for Step */}
            <div className="pt-4 border-t border-slate-200/90 space-y-2">
              {step.actions.map((act) => {
                if (act.type === 'external_link' && act.href) {
                  return (
                    <a
                      key={act.actionKey}
                      href={act.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-semibold bg-white text-navy border border-slate-300 hover:bg-slate-100 hover:text-sapphire transition-colors group shadow-2xs"
                    >
                      <span className="font-mono text-[11px] font-bold truncate">
                        {act.label}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sapphire shrink-0 ml-1.5" />
                    </a>
                  );
                }

                return (
                  <button
                    key={act.actionKey}
                    type="button"
                    onClick={() => handleActionClick(act.actionKey)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-semibold bg-white text-navy border border-slate-300 hover:bg-slate-100 hover:text-sapphire transition-colors cursor-pointer group shadow-2xs"
                  >
                    <span className="font-mono text-[11px] font-bold truncate">
                      {act.label}
                    </span>
                    {act.type === 'download_txt' ? (
                      <Download className="w-3.5 h-3.5 text-sapphire group-hover:translate-y-0.5 transition-transform shrink-0 ml-1.5" />
                    ) : (
                      <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-sapphire shrink-0 ml-1.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* --- Action Modals --- */}

      {/* Modal 1: Unduh Data Spasial Status (F-PROV-01 Compliant) */}
      {activeModal === 'download_spatial' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Status Dokumen: Data Spasial Primer"
          subtitle="Ketersediaan Data Spasial Resmi (.GeoJSON / .SHP)"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 text-xs space-y-1.5">
              <strong className="block font-bold">Pemberitahuan Integritas Bukti (F-PROV-01):</strong>
              <p>
                <strong>DATA SPASIAL PRIMER BELUM TERSEDIA DALAM REPOSITORI TERBUKA.</strong> File poligon GeoJSON resmi untuk batas izin konsesi restorasi dan koridor penyangga Sekonyer belum dirilis secara publik oleh otoritas yang berwenang.
              </p>
            </div>

            <p>
              Platform BinarCelah menjunjung tinggi integritas data geospasial dan <strong>menolak membuat koordinat poligon GIS buatan</strong> yang tidak memiliki ketetapan dari Badan Informasi Geospasial (BIG) atau Kementerian Lingkungan Hidup dan Kehutanan.
            </p>

            <p>
              Untuk memperoleh shapefile resmi, silakan gunakan draf surat permohonan informasi PPID pada Langkah 02 di bawah.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire cursor-pointer"
              >
                Pahami & Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 2: Unduh Petikan DIPA (F-PROV-03 Compliant) */}
      {activeModal === 'download_dipa' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Catatan Alokasi Anggaran — Parameter Studi Kasus Demonstratif"
          subtitle="Ringkasan Catatan Pembukuan SPAN Bagian Anggaran 029 (F-PROV-03)"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
              <strong>Pemberitahuan Transparansi Arsip:</strong> Dokumen berikut merupakan catatan alokasi pagu anggaran demonstratif untuk pengujian rantai transparansi, bukan salinan berkas fisik PDF resmi Kementerian Keuangan.
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px]">NOMOR DIPA SKENARIO:</span>
                <span className="font-bold text-navy">DIPA-029.05.1.412891/2026</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">KODE SATUAN KERJA:</span>
                <span className="font-bold text-navy">521890 (Daops Wilayah)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL ALOKASI DARURAT:</span>
                <span className="font-bold text-navy">Rp 14.200.000.000,-</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">SUB-PAGU POMPA:</span>
                <span className="font-bold text-sapphire">Rp 4.800.000.000,- (12 Unit)</span>
              </div>
            </div>

            <p>
              Pencatatan DIPA pada SPAN membuktikan penetapan alokasi fiskal. Ketiadaan dokumen BAST fisik di lapangan menandakan celah akuntabilitas yang dapat diadvokasikan via UU KIP.
            </p>

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

      {/* Modal 3: Cek Merkle Root SHA-256 */}
      {activeModal === 'check_merkle' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Verifikasi Integritas Kriptografis Payload Lokal"
          subtitle="Verifikasi Sidik Jari Kriptografis Payload Statis Repositori"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs space-y-1">
              <div>Algoritma: SHA-256 (Klien Peramban)</div>
              <div>Digest Payload: 8a7cf9b210e74...d41c</div>
              <div>Status: Valid & Konsisten dengan Snapshot Repositori</div>
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-950 text-xs">
              <strong>Penafian Integritas Kriptografi:</strong>
              <p className="mt-1">
                Kalkulasi hash lokal ini hanya memverifikasi keutuhan payload statis aplikasi, bukan pembuktian keaslian hukum arsip negara atau sertifikat digital BSrE.
              </p>
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

      {/* Modal 4: Draf Format PPID KLHK Preview & Copy */}
      {activeModal === 'modal_klhk' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Formulir Permohonan Informasi Publik: PPID KLHK"
          subtitle="Format Standar Surat Permohonan Sesuai UU No. 14 Tahun 2008"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-950 text-xs flex items-center justify-between">
              <span>Berkas <code>Formulir_Permohonan_Informasi_KLHK.txt</code> berhasil diunduh.</span>
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>

            <pre className="p-3.5 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] overflow-x-auto whitespace-pre-wrap max-h-64 leading-relaxed">
              {ADVOCACY_TEXT_TEMPLATES.klhk}
            </pre>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Memuat catatan integritas F-101
              </span>
              <button
                type="button"
                onClick={() => handleCopyText(ADVOCACY_TEXT_TEMPLATES.klhk, 'klhk')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy text-white hover:bg-sapphire text-xs font-bold cursor-pointer transition-colors"
              >
                {copiedTemplate === 'klhk' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Seluruh Teks</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 5: Draf Format PPID Kemenkeu Preview & Copy */}
      {activeModal === 'modal_kemenkeu' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Formulir Permohonan Informasi Keuangan: PPID Kemenkeu"
          subtitle="Format Standar Permohonan Informasi Anggaran Negara (UU No. 14/2008)"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-950 text-xs flex items-center justify-between">
              <span>Berkas <code>Formulir_Permohonan_Informasi_Kemenkeu.txt</code> berhasil diunduh.</span>
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>

            <pre className="p-3.5 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] overflow-x-auto whitespace-pre-wrap max-h-64 leading-relaxed">
              {ADVOCACY_TEXT_TEMPLATES.kemenkeu}
            </pre>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Memuat catatan integritas F-101
              </span>
              <button
                type="button"
                onClick={() => handleCopyText(ADVOCACY_TEXT_TEMPLATES.kemenkeu, 'kemenkeu')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy text-white hover:bg-sapphire text-xs font-bold cursor-pointer transition-colors"
              >
                {copiedTemplate === 'kemenkeu' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Seluruh Teks</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 6: Panduan Hak Warga UU KIP */}
      {activeModal === 'view_citizen_rights' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Panduan Hak Warga Negara atas Keterbukaan Informasi Publik"
          subtitle="Rujukan Yuridis: Undang-Undang Republik Indonesia Nomor 14 Tahun 2008"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-navy text-xs uppercase">
                1. Tenggat Waktu Tanggapan PPID (Pasal 22 ayat (7))
              </h4>
              <p>
                Badan Publik wajib menyampaikan pemberitahuan tertulis mengenai dikabulkan atau ditolaknya permohonan dalam waktu paling lambat <strong>10 (sepuluh) hari kerja</strong> sejak diterimanya permohonan, dan dapat diperpanjang paling lambat <strong>7 (tujuh) hari kerja</strong> dengan alasan tertulis.
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-200 pt-3">
              <h4 className="font-bold text-navy text-xs uppercase">
                2. Pengajuan Keberatan kepada Atasan PPID (Pasal 35 & 36)
              </h4>
              <p>
                Pemohon berhak mengajukan keberatan kepada Atasan PPID dalam jangka waktu paling lambat <strong>30 (tiga puluh) hari kerja</strong> setelah ditemukannya alasan keberatan (misal tidak ditanggapinya permohonan atau pengenaan biaya yang tidak wajar). Atasan PPID wajib memberikan tanggapan dalam waktu 30 hari kerja.
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-200 pt-3">
              <h4 className="font-bold text-navy text-xs uppercase">
                3. Penyelesaian Sengketa Informasi Publik (Pasal 37)
              </h4>
              <p>
                Jika tanggapan Atasan PPID tidak memuaskan, pemohon berhak mengajukan permohonan penyelesaian sengketa informasi kepada <strong>Komisi Informasi</strong> dalam waktu paling lambat 14 (empat belas) hari kerja sejak diterimanya tanggapan Atasan PPID.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire cursor-pointer"
              >
                Pahami & Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};
