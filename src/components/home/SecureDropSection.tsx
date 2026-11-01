import React, { useState } from 'react';
import { SECURE_DROP_CONFIG } from '../../data/homeData';
import { UploadCloud, Shield, Lock, EyeOff, FileText, AlertCircle } from 'lucide-react';
import { BaseModal } from '../common/BaseModal';

export const SecureDropSection: React.FC = () => {
  const [isDropModalOpen, setIsDropModalOpen] = useState(false);

  const handleTriggerDropzone = (e: React.MouseEvent | React.DragEvent) => {
    e.preventDefault();
    setIsDropModalOpen(true);
  };

  return (
    <section id="secure-drop" className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200/80 border border-slate-300 text-slate-700 text-xs font-mono font-semibold mb-3">
            <Lock className="w-3.5 h-3.5 text-navy" />
            PROTOTIPE KANAL BUKTI WARGA
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Kanal Penyerahan Berkas Bukti (Prototipe Non-Operasional)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Simulasi alur penyerahan dokumen primer oleh masyarakat sipil. Antarmuka ini merupakan prototipe perancangan; tidak ada pengiriman atau penyimpanan berkas yang berlangsung pada sistem.
          </p>
        </div>

        {/* Drop Box & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Dropzone Prototype */}
          <div className="lg:col-span-7">
            <div
              onClick={handleTriggerDropzone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleTriggerDropzone}
              className="border-2 border-dashed border-slate-300 hover:border-sapphire bg-white hover:bg-slate-50/50 rounded-xl p-8 sm:p-10 text-center transition-all cursor-pointer group shadow-2xs"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsDropModalOpen(true);
                }
              }}
              aria-label="Zona simulasi penyerahan berkas bukti prototipe"
            >
              <div className="w-14 h-14 rounded-full bg-slate-100 group-hover:bg-slate-200/80 flex items-center justify-center mx-auto mb-4 transition-colors">
                <UploadCloud className="w-7 h-7 text-sapphire group-hover:scale-105 transition-transform" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5">
                Simulasi Penyerahan Dokumen Primer
              </h3>

              <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
                Format berkas yang direncanakan: PDF, JPG, PNG, atau XLSX. Formulir ini tidak aktif dan tidak menerima atau menyimpan unggahan berkas.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-navy text-white text-xs font-semibold group-hover:bg-sapphire transition-colors shadow-xs">
                <FileText className="w-4 h-4" />
                <span>INFORMASI PROTOKOL PENGUNGGAHAN (PROTOTIPE)</span>
              </div>

              <div className="mt-4 text-[10px] text-amber-800 font-mono">
                [PROTOTIPE ANTARMUKA — PENGUNGGAHAN TIDAK AKTIF]
              </div>
            </div>

            {/* PGP / Cryptographic Status Strip (Honest State) */}
            <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  STATUS ENKRIPSI ASIMETRIS / PGP:
                </span>
                <span className="font-mono font-bold text-slate-600 text-xs break-all">
                  {SECURE_DROP_CONFIG.publicKeyFingerprint}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-bold">
                  {SECURE_DROP_CONFIG.prototypeStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Architectural Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
              Prinsip Perancangan Pengawasan Publik
            </h4>

            {SECURE_DROP_CONFIG.securityPillars.map((pillar, idx) => {
              const icons = [
                <EyeOff key="1" className="w-4 h-4 text-sapphire" />,
                <Shield key="2" className="w-4 h-4 text-blue-700" />,
                <Lock key="3" className="w-4 h-4 text-navy" />,
              ];

              return (
                <div key={pillar.title} className="bg-white rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
                      {icons[idx]}
                    </div>
                    <h5 className="text-xs font-bold font-mono text-navy tracking-wide">
                      {pillar.title}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

            {/* Legal / Ethical Notice */}
            <div className="p-3.5 bg-amber-50/80 rounded-lg border border-amber-200/80 text-amber-950 text-xs leading-relaxed">
              <strong className="block mb-1 text-amber-900 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                Pemberitahuan Transparansi Prototipe
              </strong>
              {SECURE_DROP_CONFIG.legalComplianceText}
            </div>
          </div>
        </div>
      </div>

      {/* Non-operational Prototype Dropzone Modal */}
      <BaseModal
        isOpen={isDropModalOpen}
        onClose={() => setIsDropModalOpen(false)}
        title="Prototipe Antarmuka Pengunggahan Bukti"
        subtitle="Simulasi Kanal Penyerahan Berkas Non-Operasional"
        showIntegrityBadge={true}
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-950 text-xs space-y-2">
            <div className="font-bold flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-800" />
              <span>Pemberitahuan Transparansi Prototipe</span>
            </div>
            <p>
              Komponen penyerahan berkas ini merupakan <strong>prototipe rancangan antarmuka (UI mockup)</strong>. Platform ini tidak menyediakan enkripsi PGP operasional, penghapusan metadata otomatis, kebijakan tanpa log aktif, atau kerahasiaan informan pada saat ini.
            </p>
            <p>
              Tidak ada koneksi server backend, penyimpanan file, atau transmisi data yang berlangsung melalui antarmuka ini.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-navy text-xs uppercase tracking-wider mb-2">
              Saluran Resmi Pengaduan & Keterbukaan Publik yang Sah:
            </h4>
            <ul className="list-decimal list-inside space-y-1.5 text-xs text-slate-600 pl-1">
              <li>
                <strong>SP4N LAPOR!:</strong> Layanan Pengelolaan Pengaduan Pelayanan Publik Nasional di{' '}
                <a
                  href="https://www.lapor.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sapphire underline"
                >
                  lapor.go.id
                </a>
              </li>
              <li>
                <strong>KPK Whistleblower System (KWS):</strong> Sistem pelaporan terenkripsi KPK di portal resmi kpk.go.id.
              </li>
              <li>
                <strong>Permohonan KIP Resmi:</strong> Akses Pejabat Pengelola Informasi dan Dokumentasi (PPID) pada instansi pemerintah terkait sesuai UU No. 14 Tahun 2008.
              </li>
            </ul>
          </div>

          <div className="p-2.5 bg-slate-100 rounded border border-slate-200 font-mono text-[11px] text-slate-600">
            Status: Prototipe Non-Operasional (Tidak Mengirim atau Menyimpan Data)
          </div>
        </div>
      </BaseModal>
    </section>
  );
};
