import React, { useState } from 'react';
import { PPID_MONITORING_DATA } from '../../../data/caseChronologyData';
import { BaseModal } from '../../common/BaseModal';
import {
  FileText,
  Clock,
  ExternalLink,
  ShieldAlert,
  Send,
  Copy,
  Check,
} from 'lucide-react';

export const PpidMonitoringWidget: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'status' | 'keberatan' | 'anonim' | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const percentage = Math.round(
    (PPID_MONITORING_DATA.currentDay / PPID_MONITORING_DATA.totalDays) * 100
  );

  const objectionDraftText = `[DRAF TEMPLAT ADVOKASI - SIMULASI PROTOTIPE BINARCELAH - BUKAN DOKUMEN RESMI PPID]

SURAT KEBERATAN ATAS PERMOHONAN INFORMASI PUBLIK
Nomor Registrasi Permohonan: #KIP-2026-X889 (Parameter Skenario)
Kepada Yth. Atasan PPID Kementerian Lingkungan Hidup dan Kehutanan RI
Di Tempat

Dengan hormat,
Berdasarkan ketentuan Pasal 35 ayat (1) Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, Pemohon dengan ini mengajukan Keberatan atas tidak dipenuhinya permintaan informasi:

1. Rincian Informasi yang Dimohonkan: Salinan Dokumen Kontrak Pengadaan & Berita Acara Serah Terima (BAST) 12 Unit Mesin Pompa Jinjing Pemadam Gambut Bertekanan Tinggi (Alokasi DIPA BA 029 TA 2026).
2. Tanggal Pengajuan Permohonan: 18 Oktober 2026.
3. Alasan Keberatan: Tidak ditanggapinya permohonan informasi dalam batas waktu 10 (sepuluh) hari kerja sebagaimana diatur dalam Pasal 22 ayat (7) UU KIP.

Demikian surat keberatan ini disampaikan untuk ditindaklanjuti dalam tenggat 30 (tiga puluh) hari kerja.

Hormat kami,
Pemohon Informasi Publik`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(objectionDraftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-sapphire" />
          <h3 className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
            PERMOHONAN INFORMASI PUBLIK (PPID): {PPID_MONITORING_DATA.ticketNumber}
          </h3>
        </div>
        <span className="text-[10px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-bold">
          PASAL 22 UU KIP NO. 14/2008
        </span>
      </div>

      <div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          {PPID_MONITORING_DATA.statusText}
        </p>
      </div>

      {/* Progress Track */}
      <div className="space-y-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="font-semibold text-navy">{PPID_MONITORING_DATA.startDate}</span>
          <span className="font-bold text-sapphire">
            Hari ke-{PPID_MONITORING_DATA.currentDay} [Simulasi]: Sisa {PPID_MONITORING_DATA.remainingDays} Hari Kerja menuju Batas Eskalasi Keberatan
          </span>
          <span className="font-semibold text-slate-700">{PPID_MONITORING_DATA.deadlineDate}</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden relative">
          <div
            className="bg-sapphire h-3 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
          <span>Registrasi Skenario</span>
          <span>Progres Waktu: {percentage}% (Hari ke-6 dari 10 [Simulasi])</span>
          <span>Hak Uji Sengketa</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={() => setActiveModal('status')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-bold bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer shadow-2xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>PANTAU STATUS PPID</span>
        </button>

        <button
          onClick={() => setActiveModal('keberatan')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-bold bg-white text-navy border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
        >
          <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
          <span>DRAF SURAT KEBERATAN</span>
        </button>

        <button
          onClick={() => setActiveModal('anonim')}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
        >
          <Send className="w-3.5 h-3.5 text-slate-500" />
          <span>KIRIM BUKTI ANONIM</span>
        </button>
      </div>

      {/* Modal 1: Status Detail */}
      {activeModal === 'status' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Detail Status Permohonan Informasi Publik"
          subtitle={`Nomor Registrasi: ${PPID_MONITORING_DATA.ticketNumber}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="grid grid-cols-2 gap-2 font-mono text-xs p-3 bg-slate-50 rounded border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px]">BADAN PUBLIK TUJUAN:</span>
                <span className="font-bold text-navy">PPID Kementerian LHK</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TANGGAL PENGAJUAN:</span>
                <span className="font-bold text-navy">18 Oktober 2026 (Skenario)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">STATUS TAHAPAN:</span>
                <span className="font-bold text-sapphire">Verifikasi Teknis Berkas (Simulasi)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">BATAS WAKTU STATUTER:</span>
                <span className="font-bold text-navy">10 Hari Kerja (Pasal 22 ayat (7))</span>
              </div>
            </div>

            <p>
              Sesuai Pasal 22 ayat (7) UU No. 14 Tahun 2008, Badan Publik wajib menyampaikan pemberitahuan tertulis mengenai dikabulkan atau ditolaknya permohonan dalam waktu paling lambat 10 hari kerja sejak permohonan teregistrasi resmi.
            </p>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
              <strong>Catatan Kepatuhan:</strong> Komponen ini merupakan simulasi antarmuka untuk mengedukasi warga atas hak pemantauan keterbukaan informasi publik.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 2: Draf Surat Keberatan */}
      {activeModal === 'keberatan' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Formulasi Draf Surat Keberatan Informasi Publik"
          subtitle="Rujukan Pasal 35 & 36 UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs text-slate-700">
            <p className="leading-relaxed">
              Apabila Badan Publik tidak merespon permohonan informasi dalam waktu 10 + 7 hari kerja, pemohon berhak mengajukan keberatan tertulis kepada Atasan PPID sebelum mengajukan sengketa ke Komisi Informasi:
            </p>

            <pre className="p-3 bg-slate-900 text-slate-100 rounded-md font-mono text-[11px] overflow-x-auto leading-relaxed whitespace-pre-wrap">
              {objectionDraftText}
            </pre>

            <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] font-mono text-slate-500">
                Format Draf Standar Advokasi KIP
              </span>
              <button
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-semibold text-slate-700 cursor-pointer transition-colors"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tersalin ke Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Salin Teks Draf</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 3: Kirim Bukti Anonim Disclosure */}
      {activeModal === 'anonim' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Saluran Pengiriman Bukti Lapangan"
          subtitle="Protokol Whistleblowing & Saluran Resmi Pengaduan Pemerintah"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs">
              <strong>Pemberitahuan Transparansi Prototipe:</strong> Platform penelitian BinarCelah tidak mengoperasikan server penyimpanan dokumen rahasia langsung. Warga dan aparatur yang memiliki dokumen perbendaharaan atau bukti fisik disarankan menyalurkan laporan melalui mekanisme pengaduan resmi negara.
            </div>

            <div>
              <h4 className="font-bold text-navy text-xs uppercase mb-1">
                Kanal Pengaduan Resmi Pemerintah:
              </h4>
              <p className="text-xs text-slate-600">
                Gunakan Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional di{' '}
                <a
                  href="https://www.lapor.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sapphire underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>SP4N LAPOR!</span>
                  <ExternalLink className="w-3 h-3" />
                </a>{' '}
                atau portal Whistleblowing System kementerian terkait.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Mengerti & Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};

