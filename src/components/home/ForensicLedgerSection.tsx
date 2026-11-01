import React, { useState } from 'react';
import { FORENSIC_LEDGER_RECORDS } from '../../data/homeData';
import { StatusBadge } from '../common/StatusBadge';
import { BaseModal } from '../common/BaseModal';
import type { LedgerRecord } from '../../types/case';
import { Search, Eye, FileQuestion, ExternalLink, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ForensicLedgerSection: React.FC = () => {
  const [selectedRecord, setSelectedRecord] = useState<LedgerRecord | null>(null);
  const [isKipModalOpen, setIsKipModalOpen] = useState(false);
  const [activeKipRecord, setActiveKipRecord] = useState<LedgerRecord | null>(null);

  const handleInspect = (record: LedgerRecord) => {
    setSelectedRecord(record);
  };

  const handleOpenKip = (record: LedgerRecord) => {
    setActiveKipRecord(record);
    setIsKipModalOpen(true);
  };

  return (
    <section id="katalog-arsip" className="py-12 lg:py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold mb-2">
              <Search className="w-3.5 h-3.5 text-sapphire" />
              KATALOG PENGUJIAN DOKUMEN
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Katalog Pembaruan Arsip & Parameter Bukti
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl">
              Pencatatan status ketersediaan berkas publik dalam skenario pengujian BinarCelah. Menampilkan status penelusuran primer dan ketiadaan dokumen.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Klasifikasi: Parameter Skenario & Celah Repositori
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl border border-slate-300 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">Klasifikasi Berkas</th>
                  <th className="py-3 px-4 font-semibold">Instansi Terkait</th>
                  <th className="py-3 px-4 font-semibold">Perihal Dokumen</th>
                  <th className="py-3 px-4 font-semibold">Status Keterbukaan</th>
                  <th className="py-3 px-4 font-semibold">Status Checksum</th>
                  <th className="py-3 px-4 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {FORENSIC_LEDGER_RECORDS.map((record, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    {/* Klasifikasi Berkas */}
                    <td className="py-3.5 px-4 font-mono font-bold text-navy whitespace-nowrap">
                      {record.code}
                    </td>

                    {/* Instansi */}
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                      {record.agency}
                    </td>

                    {/* Perihal */}
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {record.subject}
                    </td>

                    {/* Status Keterbukaan */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <StatusBadge
                        label={record.forensicStatus}
                        type={record.statusType}
                      />
                    </td>

                    {/* Checksum */}
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-500 whitespace-nowrap">
                      <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                        {record.hash}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      {record.actionType === 'inspect' ? (
                        <button
                          onClick={() => handleInspect(record)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-navy hover:text-white transition-colors cursor-pointer"
                          aria-label={`Periksa parameter ${record.subject}`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Periksa</span>
                        </button>
                      ) : (
                        <button
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            handleOpenKip(record);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-red-100 text-red-800 hover:bg-red-200 border border-red-200 transition-colors cursor-pointer"
                          aria-label={`Ajukan permohonan KIP untuk ${record.subject}`}
                        >
                          <FileQuestion className="w-3.5 h-3.5 text-red-700" />
                          <span>Ajukan KIP</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <span>
              Seluruh entri pada tabel ini diklasifikasikan sebagai parameter pengujian atau dokumen yang belum tersedia.
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              Rujukan: Keterbukaan Informasi Publik (UU KIP No. 14/2008)
            </span>
          </div>
        </div>
      </div>

      {/* Inspect Record Modal */}
      {selectedRecord && (
        <BaseModal
          isOpen={!!selectedRecord}
          onClose={() => setSelectedRecord(null)}
          title={`Inspeksi Parameter: ${selectedRecord.subject}`}
          subtitle={`Instansi Terkait: ${selectedRecord.agency}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">
                Perihal Dokumen
              </h4>
              <p className="bg-slate-50 p-3 rounded border border-slate-200 font-medium text-slate-800">
                {selectedRecord.subject}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">KLASIFIKASI:</span>
                <span className="font-bold text-navy">{selectedRecord.forensicStatus}</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px]">STATUS PUBLIKASI:</span>
                <span className="font-bold text-navy">{selectedRecord.publishDate || 'Data Primer Belum Tersedia'}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">
                Status Kriptografi Payload
              </h4>
              <div className="p-2.5 bg-slate-100 rounded border border-slate-200 font-mono text-xs text-slate-600">
                TIDAK DIKALKULASI PADA PARAMETER DEMONSTRATIF
              </div>
              <p className="text-[11px] text-slate-500 mt-1 italic">
                *Kalkulasi hash lokal ini hanya memverifikasi keutuhan payload statis aplikasi, bukan pembuktian keaslian hukum arsip negara atau sertifikat digital BSrE.
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
              <strong>Catatan Pengujian:</strong> {selectedRecord.detailNote}
            </div>

            <div className="pt-2 flex justify-end">
              <Link
                to="/kasus/BC-2026-08/ringkasan"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sapphire hover:text-navy hover:underline"
              >
                <span>Lihat Alur Bukti Terkait dalam Dossier</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </BaseModal>
      )}

      {/* KIP Request Info Modal */}
      {isKipModalOpen && (
        <BaseModal
          isOpen={isKipModalOpen}
          onClose={() => setIsKipModalOpen(false)}
          title="Permohonan Informasi Publik (UU KIP No. 14/2008)"
          subtitle={`Subjek: ${activeKipRecord?.subject || 'Dokumen Pengadaan & BAST [DATA PRIMER BELUM TERSEDIA]'}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-950 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
              <div>
                <strong>Celah Keterbukaan Informasi Ditemukan:</strong>
                <p className="mt-1">
                  Dokumen kontrak lelang atau Berita Acara Serah Terima (BAST) ini tidak ditemukan pada LPSE maupun kanal informasi publik resmi hingga tanggal audit.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-navy text-xs uppercase tracking-wider mb-1">
                Langkah Permohonan Warga Negara
              </h4>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600 pl-1">
                <li>
                  Gunakan formulir resmi permohonan informasi publik ke PPID instansi terkait ({activeKipRecord?.agency || 'ULP Terkait'}).
                </li>
                <li>
                  Sebutkan dasar hukum: Pasal 22 UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
                </li>
                <li>
                  Minta salinan dokumen Kerangka Acuan Kerja (KAK), Harga Perkiraan Sendiri (HPS), dan Berita Acara Serah Terima (BAST).
                </li>
                <li>
                  Instansi wajib merespons dalam kurun waktu 10 + 7 hari kerja.
                </li>
              </ol>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
              <div className="font-semibold text-navy">Format Rekomendasi Subjek Permohonan:</div>
              <div className="font-mono text-slate-700 bg-white p-2 rounded border border-slate-200">
                "Permohonan Salinan Dokumen Kontrak & BAST Pengadaan {activeKipRecord?.subject || 'Pompa Air Pemadam Gambut'}"
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <a
                href="https://komisiinformasi.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-500 hover:text-navy inline-flex items-center gap-1"
              >
                <span>Portal Komisi Informasi Pusat RI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/kasus/BC-2026-08/ringkasan"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-navy hover:bg-sapphire px-4 py-2 rounded transition-colors"
              >
                <span>Buka Celah Kasus</span>
              </Link>
            </div>
          </div>
        </BaseModal>
      )}
    </section>
  );
};
