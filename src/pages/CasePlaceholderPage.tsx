import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { CaseLayout } from '../components/case/CaseLayout';
import { Shield, ArrowLeft, Calendar, FileQuestion, ArrowRight } from 'lucide-react';

export const CasePlaceholderPage: React.FC = () => {
  const { caseId = 'BC-2026-08' } = useParams<{ caseId: string }>();
  const location = useLocation();

  const isChronology = location.pathname.includes('/kronologi');
  const isGaps = location.pathname.includes('/celah');

  const activeTabKey = isChronology
    ? 'kronologi'
    : isGaps
    ? 'celah'
    : 'ringkasan';

  return (
    <CaseLayout activeTab={activeTabKey}>
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
            <Shield className="w-4 h-4 text-amber-700" />
            <span>
              {isChronology
                ? 'MODUL KRONOLOGI & JEJAK BUKTI — TAHAP BC-05.3'
                : isGaps
                ? 'MODUL CELAH AKUNTABILITAS & ADVOKASI — TAHAP BC-05.4'
                : 'MODUL RUANG KERJA KASUS — PROTOTIPE BERJALAN'}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              {isChronology
                ? '2. Kronologi & Jejak Bukti (Linimasa Temporal)'
                : isGaps
                ? '3. Celah Akuntabilitas & Langkah Lanjutan (Advokasi Sipil)'
                : `Ruang Kerja Kasus ${caseId}`}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {isChronology
                ? 'Rekonstruksi berurutan secara temporal untuk mengidentifikasi disparitas administrasi dan keterlambatan logistik percontohan dijadwalkan pada tahap BC-05.3 (Container-2.pdf).'
                : isGaps
                ? 'Penyusunan draf sengketa informasi resmi UU KIP No. 14/2008 dan Pusat Unduhan Advokasi dijadwalkan pada tahap BC-05.4 (Container-3.pdf).'
                : 'Halaman ini berada di luar cakupan vertikal slice saat ini.'}
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-3">
            <div className="font-bold text-navy text-xs uppercase tracking-wider">
              Status Slice Vertikal:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white rounded border border-slate-200">
                <div className="flex items-center gap-2 font-mono font-bold text-navy text-xs mb-1">
                  <Calendar className="w-4 h-4 text-sapphire" />
                  <span>BC-05.3 (Tahap Selanjutnya)</span>
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Kronologi & Traceability
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Feed linimasa temporal & audit jeda birokrasi (Container-2.pdf).
                </div>
              </div>

              <div className="p-3 bg-white rounded border border-slate-200">
                <div className="flex items-center gap-2 font-mono font-bold text-navy text-xs mb-1">
                  <FileQuestion className="w-4 h-4 text-sapphire" />
                  <span>BC-05.4 (Tahap Final Workspace)</span>
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Celah & Advokasi
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Draf sengketa informasi UU KIP & pusat unduhan (Container-3.pdf).
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to={`/kasus/${caseId}/ringkasan`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-navy text-white text-xs sm:text-sm font-semibold hover:bg-sapphire transition-colors shadow-xs"
            >
              <span>Buka Tab 1: Ringkasan & Narasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </CaseLayout>
  );
};
