import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../../data/homeData';
import { Search, Compass, AlertOctagon, Send, CheckCircle2 } from 'lucide-react';
import { BaseModal } from '../common/BaseModal';
import type { MethodologyStep } from '../../types/case';

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<MethodologyStep | null>(null);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-sapphire" />;
      case 1:
        return <Search className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <AlertOctagon className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Send className="w-5 h-5 text-navy" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="metodologi" className="py-12 lg:py-16 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-sapphire"></span>
            PROSEDUR ILMIAH JURNALISME BUKTI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Metodologi 4-Tahap: Dari Fakta Menuju Tindak Lanjut
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Metodologi BinarCelah memisahkan fakta terverifikasi dari narasi spekulatif melalui 4 tahapan audit independen yang dapat diuji ulang oleh warga negara.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              onClick={() => setActiveStep(step)}
              className="bg-slate-50/70 hover:bg-white rounded-lg border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all hover:shadow-xs cursor-pointer group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(step);
                }
              }}
              aria-label={`Pelajari langkah metodologi ${step.stepNumber}: ${step.title}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:border-sapphire/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xl font-extrabold font-mono text-slate-300 group-hover:text-sapphire transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">
                  {step.category}
                </div>

                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-sapphire transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {step.standard}
                </span>
                <span className="text-xs font-semibold text-sapphire group-hover:translate-x-0.5 transition-transform">
                  Detail →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Detail Modal */}
      {activeStep && (
        <BaseModal
          isOpen={!!activeStep}
          onClose={() => setActiveStep(null)}
          title={`Tahap ${activeStep.stepNumber}: ${activeStep.title}`}
          subtitle={`Kategori Metodologi: ${activeStep.category}`}
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <h4 className="font-bold text-navy text-xs uppercase tracking-wider mb-1">
                Tujuan & Ruang Lingkup Tahap
              </h4>
              <p className="bg-slate-50 p-3 rounded border border-slate-200">
                {activeStep.description}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2">
              <h4 className="font-bold text-navy text-xs uppercase tracking-wider">
                Prinsip Kepatuhan Audit
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                <li>Memverifikasi data terhadap instansi penerbit resmi negara.</li>
                <li>Menghindari atribusi kelalaian pidana tanpa putusan peradilan yang berkekuatan hukum tetap.</li>
                <li>Mengutamakan hak publik untuk mengetahui melalui instrumen hukum yang sah.</li>
              </ul>
            </div>

            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-950 font-mono text-xs">
              {activeStep.standard}
            </div>
          </div>
        </BaseModal>
      )}
    </section>
  );
};
