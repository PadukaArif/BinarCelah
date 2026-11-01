import React from 'react';
import { Shield, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-slate-300 text-xs border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-sapphire text-white flex items-center justify-center font-bold text-sm shadow-xs">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block leading-tight font-sans">
                  BinarCelah
                </span>
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block leading-none">
                  Jurnalisme Bukti Publik
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Platform rekonstruksi kebijakan publik, pemetaan rantai bukti, dan pelacakan celah keterbukaan data anggaran negara berbasis dokumen terbuka.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400">
              Repositori Kode & Dokumentasi Terbuka (Lisensi Belum Ditetapkan)
            </div>
          </div>

          {/* Col 2: Navigasi Internal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#featured-case" className="text-slate-400 hover:text-white transition-colors">
                  Studi Kasus Demonstratif (#BC-2026-08)
                </a>
              </li>
              <li>
                <a href="/#metodologi" className="text-slate-400 hover:text-white transition-colors">
                  Kerangka Metodologi 4-Tahap
                </a>
              </li>
              <li>
                <a href="/#katalog-arsip" className="text-slate-400 hover:text-white transition-colors">
                  Katalog Pengujian Dokumen
                </a>
              </li>
              <li>
                <a href="/#secure-drop" className="text-slate-400 hover:text-white transition-colors">
                  Simulasi Kanal Penyerahan Berkas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Rujukan & Portal Resmi */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Tautan Portal Informasi Publik Terkait
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <span className="text-slate-400 inline-flex items-center gap-1.5 cursor-not-allowed">
                  <span>Portal PPID KLHK</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                    Tautan Belum Tersedia
                  </span>
                </span>
              </li>
              <li>
                <a
                  href="https://lpse.kemenkeu.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LPSE Pengadaan Kemenkeu</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://jdihn.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Jaringan Dokumentasi Hukum Nasional (JDIHN)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://komisiinformasi.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Komisi Informasi Pusat RI</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Landasan Hukum & Etika Bukti */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Landasan Hukum & Etika
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              BinarCelah beroperasi di bawah prinsip <strong className="text-slate-300">UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik</strong>. Menjunjung asas praduga tak bersalah dan memisahkan secara tegas antara dokumen primer yang diperoleh dengan interpretasi publik.
            </p>
            <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
              Standar: Keterbukaan Informasi Publik (UU No. 14 Tahun 2008)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 BinarCelah. Rekonstruksi Kebijakan & Pengawasan Publik Terbuka.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-blue-400">STATUS: PROTOTIPE DESAIN AKTIF (NON-OPERASIONAL)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2 py-1 px-2 rounded hover:bg-slate-800"
              aria-label="Kembali ke atas halaman"
            >
              <span>Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
