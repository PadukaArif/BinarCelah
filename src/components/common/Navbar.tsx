import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-200/80 sticky top-0 z-40 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded bg-navy text-white flex items-center justify-center font-bold text-sm tracking-wider group-hover:bg-sapphire transition-colors shadow-xs">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-lg font-bold text-navy tracking-tight block leading-tight font-sans">
                BinarCelah
              </span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest block leading-none">
                Jurnalisme Bukti & Rekonstruksi Kebijakan
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide text-slate-600">
            <a href="/#featured-case" className="hover:text-navy transition-colors">
              Kasus Utama
            </a>
            <a href="/#metodologi" className="hover:text-navy transition-colors">
              Metodologi
            </a>
            <a href="/#katalog-arsip" className="hover:text-navy transition-colors">
              Katalog Arsip
            </a>
            <a href="/#secure-drop" className="hover:text-navy transition-colors">
              Kanal Anonim
            </a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PadukaArif/BinarCelah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors"
              aria-label="Repositori GitHub BinarCelah"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
