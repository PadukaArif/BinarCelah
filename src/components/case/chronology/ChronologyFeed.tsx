import React, { useState } from 'react';
import type { ChronologyNodeItem } from '../../../types/case';
import { StatusBadge } from '../../common/StatusBadge';
import { BaseModal } from '../../common/BaseModal';
import {
  FileText,
  Clock,
  ArrowDown,
  Eye,
  ShieldCheck,
} from 'lucide-react';

interface ChronologyFeedProps {
  nodes: ChronologyNodeItem[];
  isFiltered?: boolean;
  onResetFilters: () => void;
}

export const ChronologyFeed: React.FC<ChronologyFeedProps> = ({
  nodes,
  isFiltered = false,
  onResetFilters,
}) => {
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null);

  // Interval banners are displayed ONLY on the complete, unfiltered master chronology
  const showIntervalBanners = !isFiltered && nodes.length === 4;

  if (nodes.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-300 p-8 text-center space-y-3">
        <p className="text-slate-600 text-sm">
          Tidak ada simpul peristiwa yang cocok dengan filter yang dipilih.
        </p>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer"
        >
          Reset Filter Linimasa
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 relative">
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;

        return (
          <div key={node.id} className="relative">
            {/* Node Container: 2 Columns on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column (~35% / 4 cols): Temporal Stamps & Badges */}
              <div className="lg:col-span-4 bg-white rounded-xl border border-slate-300 shadow-xs p-5 space-y-3.5 relative">
                {/* Badge & Simpul Index */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <span className="font-mono text-xs font-bold text-sapphire bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    SIMPUL #{node.simpulNumber}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tight">
                    {node.simpulBadge}
                  </span>
                </div>

                {/* Primary Date & Time */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-mono tracking-tight">
                    {node.date}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{node.time}</span>
                  </div>
                </div>

                {/* 4 Protocol Date Stamps */}
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-[11px] font-mono text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">[Tgl Peristiwa]:</span>
                    <span className="font-semibold text-slate-800">{node.eventDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">[Tgl Dokumen]:</span>
                    <span className="font-semibold text-slate-800">{node.docDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">[Tgl Publikasi]:</span>
                    <span className="font-semibold text-slate-800">{node.pubDate}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1">
                    <span className="text-slate-400">[Diperiksa]:</span>
                    <span className="font-bold text-emerald-800">{node.auditDate}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <StatusBadge
                    label={node.statusLabel}
                    type={node.statusType}
                    className="text-[9px] w-full justify-center text-center"
                  />
                </div>
              </div>

              {/* Right Column (~65% / 8 cols): Evidence Content Card */}
              <div className="lg:col-span-8 bg-white rounded-xl border border-slate-300 shadow-xs p-6 space-y-4">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <span className="font-mono text-xs font-bold text-sapphire uppercase tracking-wider">
                    {node.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Audit Rantai #{node.simpulNumber}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-navy mb-2 leading-snug">
                    {node.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {node.description}
                  </p>
                </div>

                {/* File / Artifact Metadata Preview */}
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sapphire shrink-0" />
                    <span className="font-mono text-xs font-bold text-navy truncate">
                      {node.fileName}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-slate-500">
                    <span>{node.fileMeta}</span>
                    <span className="text-slate-400">{node.hashSnippet}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveModalKey(node.action1.actionKey)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold bg-navy text-white hover:bg-sapphire transition-colors cursor-pointer shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{node.action1.label}</span>
                  </button>

                  <button
                    onClick={() => setActiveModalKey(node.action2.actionKey)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold bg-white text-navy border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-sapphire" />
                    <span>{node.action2.label}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Connecting Disparity Interstitial Banner (between nodes) - displayed only on complete unfiltered master chronology */}
            {!isLast && showIntervalBanners && node.interstitialNote && (
              <div className="my-5 flex flex-col items-center">
                <div className="w-0.5 h-4 bg-slate-300"></div>
                <div className="w-full max-w-2xl bg-amber-50/90 border border-amber-200 text-amber-950 rounded-lg px-4 py-2.5 text-xs text-center flex items-center justify-center gap-2 shadow-2xs">
                  <ArrowDown className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="font-mono text-[11px] font-bold leading-normal">
                    {node.interstitialNote}
                  </span>
                </div>
                <div className="w-0.5 h-4 bg-slate-300"></div>
              </div>
            )}
          </div>
        );
      })}

      {/* --- Action Modals --- */}

      {/* Modal 1: Raw Satellite Telemetry */}
      {activeModalKey === 'raw_satellite' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Telemetri Penginderaan Jauh Sensor Ruang"
          subtitle="Parameter Deteksi Anomali Termal Satelit NASA FIRMS & Sentinel-2"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="grid grid-cols-2 gap-2 font-mono text-xs p-3 bg-slate-50 rounded border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px]">SENSOR INSTRUMEN:</span>
                <span className="font-bold text-navy">VIIRS (375m) & MODIS (1km)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">BRIGHTNESS TEMP:</span>
                <span className="font-bold text-navy">&gt; 340 Kelvin (FRP Tinggi)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">KOORDINAT INDIKASI:</span>
                <span className="font-bold text-navy">2°45'18"S 111°58'34"E</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">STATUS DATA RASTER:</span>
                <span className="font-bold text-amber-800">Parameter Skenario</span>
              </div>
            </div>

            <p>
              Data deteksi anomali termal bersumber dari instrumen radiometer ruang. Berdasarkan prinsip metodologi BinarCelah, keberadaan titik api satelit adalah indikator awal radiasi panas permukaan, bukan dokumen hukum kepemilikan lahan atau vonis kesengajaan membakar.
            </p>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-950 text-xs">
              <strong>Catatan Integritas Repositori (F-PROV-02):</strong> File citra raster asli (.tiff) tidak disimpan di peladen lokal dan disimulasikan melalui parameter terbuka.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 2: Metadata Satelit */}
      {activeModalKey === 'metadata_satelit' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Metadata Spektral & Karakteristik Sensor"
          subtitle="Sentinel-2 MSI vs Sensor Termal VIIRS / MODIS"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Pembedaan metodologi teknis: Sentinel-2A MSI adalah sensor optik multispektral (SWIR false color B12-B8A-B04) untuk memetakan penetrasi asap dan bekas kebakaran (*burn scars*), sedangkan VIIRS Suomi NPP adalah radiometer inframerah termal untuk deteksi emisi kalor langsung.
            </p>
            <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-xs space-y-1">
              <div>Resolusi Spasial SWIR: 20 Meter / Pixel</div>
              <div>Orbit: Sun-synchronous (Polar Orbit)</div>
              <div>Tingkat Kepercayaan Skenario: &gt; 85%</div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 3: Transkrip Laporan Lapangan */}
      {activeModalKey === 'transkrip_laporan' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Transkrip Laporan Situasi Posko Teluk Pulai"
          subtitle="Ilustrasi Format Logbook Lapangan [Parameter Skenario Demonstratif]"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs space-y-1">
              <strong>Pemberitahuan Integritas Catatan Lapangan (F-PROV-02):</strong>
              <p>
                Transkrip ini disusun sebagai ilustrasi format laporan posko untuk pengujian rantai audit platform. Dokumen fisik asli posko MPA tidak tersimpan di repositori terbuka ini.
              </p>
            </div>

            <div className="p-3 bg-slate-900 text-slate-100 rounded-md font-mono text-[11px] leading-relaxed whitespace-pre-wrap">
              {`[FORMAT DRAF SIMULASI LAPORAN POSKO]
LOGBOOK SITUASI LAPANGAN #04/MPA-SEKONYER/X/2026
Waktu Lapor: 14 Oktober 2026, 16:45 WIB
Pelapor: Posko Bersama MPA Teluk Pulai & Resort Sekonyer

TEMUAN SITUASI:
1. Terpantau kepulan asap pekat menjalar di bawah lapisan serasah gambut (kedalaman >50 cm).
2. Alat pemantau PM2.5 di sekitar dermaga mencatat konsentrasi 285 ug/m3 (kategori berbahaya).
3. Kendala Utama: Unit pompa apung lama tersumbat lumpur pekat. Pasokan air bertekanan tinggi tidak mencukupi untuk pemadaman bawah permukaan.
4. Permohonan Bantuan: Segera kirim tambahan unit pompa jinjing tekanan tinggi dan selang sekat bakar.`}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 4: Verifikasi Hash Muatan */}
      {activeModalKey === 'verifikasi_hash' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Verifikasi Hash Payload Data Lokal"
          subtitle="Integritas Muatan Statis Aplikasi BinarCelah"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-xs space-y-1">
              <div>Algoritma: SHA-256 (Kalkulasi Klien)</div>
              <div>Digest Muatan: b129f1d48c0279a...ca01</div>
              <div>Status: Terverifikasi Konsisten dengan Payload Lokal</div>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs">
              <strong>Catatan Kriptografis:</strong> Hash ini memverifikasi keutuhan teks statis di sisi klien peramban, bukan sertifikat tanda tangan elektronik resmi kementerian.
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 5: Unduh Salinan SK (F-PROV-02 Compliant) */}
      {activeModalKey === 'unduh_sk' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Status Dokumen: SK Tanggap Darurat Ditjen Gakkum"
          subtitle="Dokumen Belum Tersedia dalam Repositori Publik Terbuka"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-950 text-xs space-y-1">
              <strong>Pemberitahuan Integritas Bukti (F-PROV-02):</strong>
              <p>
                Salinan berkas biner PDF asli untuk <code>SK_GAKKUM_KLHK_No_441_2026.pdf</code> belum diperoleh atau dipublikasikan dalam repositori dokumen terbuka ini. BinarCelah tidak merekayasa atau menyediakan berkas unduhan palsu.
              </p>
            </div>
            <p>
              Parameter nomor dan tanggal dokumen ditampilkan berdasarkan data perancangan skenario demonstratif. Untuk memperoleh salinan fisik atau digital resmi, warga dapat mengajukan permohonan informasi publik melalui kanal PPID Kementerian LHK.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Pahami & Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 6: Uji Validitas TTE */}
      {activeModalKey === 'uji_tte' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Verifikasi Tanda Tangan Elektronik (TTE)"
          subtitle="Protokol Otentikasi Sertifikat Digital Instansi Pemerintah"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Tanda Tangan Elektronik resmi pada dokumen administrasi negara diverifikasi melalui Otoritas Sertifikasi Induk Indonesia yang dikelola oleh Balai Sertifikasi Elektronik (BSrE - BSSN).
            </p>
            <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-xs space-y-1">
              <div>Lembaga Sertifikasi: BSrE (Badan Siber dan Sandi Negara)</div>
              <div>Integritas Dokumen Skenario: Validasi Format Simulasi</div>
              <div>Status Hukum: Memerlukan Arsip Asli untuk Pengujian Mandiri</div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 7: Periksa Arsip SPAN (F-PROV-03 Compliant) */}
      {activeModalKey === 'periksa_span' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Catatan Alokasi Anggaran: SPAN BA 029"
          subtitle="Parameter Catatan Perbendaharaan Negara (Skenario Demonstratif)"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="grid grid-cols-2 gap-2 font-mono text-xs p-3 bg-slate-50 rounded border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px]">BAGIAN ANGGARAN:</span>
                <span className="font-bold text-navy">BA 029 (Kementerian Keuangan)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL PAGU KARHUTLA:</span>
                <span className="font-bold text-navy">Rp 14.200.000.000,-</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PENCAIRAN TAHAP I:</span>
                <span className="font-bold text-navy">Rp 4.800.000.000,-</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">STATUS PERTANGGUNGJAWABAN:</span>
                <span className="font-bold text-red-700">BAST Belum Terbuka</span>
              </div>
            </div>

            <p>
              Pencatatan DIPA pada SPAN membuktikan komitmen perencanaan anggaran fiskal negara. Namun, pencatatan DIPA bukan merupakan bukti serah terima barang fisik di posko lapangan tanpa adanya Berita Acara Serah Terima (BAST).
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}

      {/* Modal 8: Cek Kode Transaksi SPAN */}
      {activeModalKey === 'kode_transaksi' && (
        <BaseModal
          isOpen={true}
          onClose={() => setActiveModalKey(null)}
          title="Struktur Kode Transaksi Anggaran Perbendaharaan"
          subtitle="Klasifikasi Belanja Barang & Modal Kedaruratan"
          showIntegrityBadge={true}
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-xs space-y-1">
              <div>Kode Satuan Kerja: 521890 (Satker Daops Wilayah)</div>
              <div>Kode Akun Belanja: 537112 (Belanja Modal Kedaruratan)</div>
              <div>Sistem Sumber: Sistem Perbendaharaan dan Anggaran Negara (SPAN)</div>
            </div>
            <p>
              Dalam tata kelola keuangan negara, akun 537112 mensyaratkan pencatatan aset barang milik negara (BMN) dan laporan hasil pengadaan sebelum akun dinyatakan tuntas diaudit BPK.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalKey(null)}
                className="px-4 py-1.5 text-xs font-bold rounded bg-navy text-white hover:bg-sapphire"
              >
                Tutup
              </button>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
};
