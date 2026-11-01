import React, { useState } from 'react';
import { ArrowRight, BookOpen, ShieldCheck, CheckCircle2, Lock, ExternalLink } from 'lucide-react';
import { BaseModal } from '../common/BaseModal';

export const HeroSection: React.FC = () => {
  const [isProtocolModalOpen, setIsProtocolModalOpen] = useState(false);

  const scrollToCase = () => {
    const el = document.getElementById('featured-case');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMethodology = () => {
    const el = document.getElementById('metodologi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-10 lg:pt-14 lg:pb-14 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              KERANGKA PENELUSURAN INFORMASI PUBLIK
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.15]">
              Pahami isu publik <br className="hidden sm:inline" />
              melalui <span className="underline decoration-blue-500 underline-offset-8">bukti</span>.
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Menghubungkan data citra satelit, regulasi kementerian, dan realisasi anggaran negara dalam satu alur pembuktian terbuka tanpa interpretasi spekulatif atau sensasionalisme.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={scrollToCase}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-sapphire transition-colors shadow-xs group cursor-pointer"
              >
                <span>TELUSURI ISU PUBLIK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToMethodology}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>PROTOKOL VERIFIKASI MANDIRI</span>
              </button>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Rujukan: UU KIP No. 14/2008</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Rujukan Metodologi Bukti Digital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>Pemisahan Fakta & Opini</span>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Archive Integrity Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-slate-200/90 shadow-xs p-6 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-sapphire to-blue-500"></div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  Metodologi Penelusuran Dokumen
                </span>
                <span className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-200 font-bold">
                  RUJUKAN KONSEPTUAL
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-navy">
                  Rancangan Penelusuran Bukti Publik
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Kerangka metodologi dirancang untuk menguji keterbukaan dokumen primer dan memverifikasi keutuhan payload aplikasi secara transparan tanpa spekulasi naratif.
                </p>
              </div>

              {/* Hash Box (Honest State) */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>METODE PEMERIKSAAN:</span>
                  <span className="text-navy font-semibold">Checksum Payload Lokal</span>
                </div>
                <div className="text-[11px] text-slate-500 italic bg-white p-2 rounded border border-slate-200 text-center">
                  TIDAK DIKALKULASI PADA PROTOTIPE STATIS
                </div>
                <div className="text-[10px] text-slate-500 italic">
                  *Checksum lokal belum dikonfigurasi pada build antarmuka saat ini.
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <button
                  onClick={() => setIsProtocolModalOpen(true)}
                  className="text-xs font-semibold text-sapphire hover:text-navy hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Baca Protokol Verifikasi Lengkap</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Verification Guide Modal */}
      <BaseModal
        isOpen={isProtocolModalOpen}
        onClose={() => setIsProtocolModalOpen(false)}
        title="Rancangan Metodologi & Hak Informasi Publik"
        subtitle="Kerangka Penelusuran Informasi Terbuka Berdasarkan UU No. 14 Tahun 2008"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            BinarCelah menggunakan metodologi berjenjang untuk memastikan bahwa setiap fakta yang disajikan dapat ditelusuri secara independen oleh masyarakat sipil.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide">
                1. Penelusuran Sumber Dokumen Primer
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Seluruh penelusuran diarahkan langsung pada sistem publik terbuka resmi seperti LPSE, JDIH instansi pemerintah, dan portal PPID negara.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide">
                2. Pemisahan Fakta dan Opini
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Data faktual disajikan tanpa pembingkaian hiperbolis. Jika terdapat ketiadaan dokumen penting (misal: BAST pengadaan), hal tersebut ditandai sebagai celah akuntabilitas publik, bukan vonis bersalah.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wide">
                3. Integritas Data Klien
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Pada implementasi operasional, arsitektur checksum lokal dirancang untuk memverifikasi keutuhan payload aplikasi di peramban pengguna.
              </p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 rounded border border-amber-200 text-amber-900 text-xs">
            <strong>Catatan Kepatuhan:</strong> Kalkulasi hash lokal ini hanya memverifikasi keutuhan payload statis aplikasi, bukan pembuktian keaslian hukum arsip negara atau sertifikat digital BSrE.
          </div>
        </div>
      </BaseModal>
    </section>
  );
};
