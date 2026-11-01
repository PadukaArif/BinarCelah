import type {
  ChronologyDateProtocol,
  ChronologyNodeItem,
  PumpComparisonColumn,
  PpidMonitoringState,
} from '../types/case';

export const CHRONOLOGY_PAGE_HEADER = {
  title: 'Kronologi Faktual & Rekonstruksi Rantai Bukti',
  subtitle:
    'Penelusuran hubungan sekuensial antara deteksi kebakaran, surat penugasan penegakan hukum, realisasi anggaran DIPA, dan kesenjangan pengadaan sarana lapangan di Koridor Sekonyer.',
  badge: 'PARAMETER SKENARIO DEMONSTRATIF',
};

export const CHRONOLOGY_MANDATORY_DISCLAIMER =
  'Kronologi ini merupakan rekonstruksi alur kerja metodologis BinarCelah untuk menguji ketersediaan data terbuka. Jeda waktu dan catatan disparitas disusun berdasarkan parameter studi kasus demonstratif dan bukan merupakan tuduhan kesengajaan atau vonis pelanggaran hukum.';

export const DATE_PROTOCOL_ITEMS: ChronologyDateProtocol[] = [
  {
    key: 'event',
    label: '[TGL PERISTIWA]',
    description: 'Kejadian fisik di lapangan berdasarkan rekaman sensor atau laporan warga.',
  },
  {
    key: 'doc',
    label: '[TGL DOKUMEN]',
    description: 'Penerbitan surat keputusan atau arsip administratif resmi instansi.',
  },
  {
    key: 'pub',
    label: '[TGL PUBLIKASI]',
    description: 'Ketersediaan data pada portal terbuka pemerintah atau domain publik.',
  },
  {
    key: 'audit',
    label: '[STEMPEL VERIFIKASI]',
    description: 'Validasi integritas muatan data lokal dan pemeriksaan silang metodologi.',
  },
];

export const CHRONOLOGY_NODES: ChronologyNodeItem[] = [
  {
    id: 'node-01',
    simpulNumber: '01',
    simpulBadge: 'TERCATAT SUMBER PRIMER',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    date: '12 OKT 2026',
    time: 'Pukul 03:14 WIB (Dini Hari)',
    eventDate: '12 Okt 2026 — 03:14',
    docDate: '12 Okt 2026 — 04:30',
    pubDate: '12 Okt 2026 — 06:00',
    auditDate: '28 Okt 2026 (Valid)',
    category: 'SENSOR PENGINDERAAN JAUH SPEKTRAL',
    eventType: 'satelit',
    title: 'Deteksi Awal Anomali Termal Satelit MODIS & Sentinel-2A',
    description:
      'Sensor radiometri VIIRS Suomi NPP dan Sentinel-2A L2A mencatat lonjakan pantulan inframerah termal (brightness temperature >340K) di titik koordinat 2°45\'18"S 111°58\'34"E koridor Sekonyer. Lokasi berada tepat di zona penyangga hidrologis gambut dalam (ketebalan >3 meter) yang bersebelahan langsung dengan batas konsesi restorasi ekosistem.',
    fileName: 'NASA-FIRMS-ID-4921-OCT26.tiff',
    fileMeta: 'Deteksi Satelit Luar Angkasa | Tingkat Kepercayaan >85%',
    hashSnippet: 'SHA-256: fc08412ae477d9c8201a09...99a0 (Skema Prototipe)',
    action1: { label: 'BUKA RAW DATA SATELIT', actionKey: 'raw_satellite' },
    action2: { label: 'METADATA', actionKey: 'metadata_satelit' },
    interstitialNote:
      'VERIFIKASI SILANG LAPORAN PANTAUAN LAPANGAN MENGONFIRMASI TITIK PANAS DALAM 48 JAM [PARAMETER SKENARIO]',
    disparityHours: '48 Jam',
  },
  {
    id: 'node-02',
    simpulNumber: '02',
    simpulBadge: 'PARAMETER SKENARIO',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    date: '14 OKT 2026',
    time: 'Pukul 16:45 WIB (Sore)',
    eventDate: '13–14 Okt (Asap teramati)',
    docDate: '14 Okt 2026 — 16:45',
    pubDate: 'Internal Resort (KIP)',
    auditDate: '28 Okt 2026 (Valid)',
    category: 'OBSERVASI POSKO LAPANGAN BERBASIS KOMUNITAS',
    eventType: 'lapangan',
    title: 'Laporan Lapangan: Titik Api Terpantau Menjalar pada Gambut Dalam',
    description:
      'Laporan situasi lapangan dari Masyarakat Peduli Api (MPA) dan mitra konservasi mengonfirmasi kebakaran gambut bawah permukaan (smoldering fire) dengan kedalaman muka air tanah di bawah 40 cm. Tingkat kepekatan asap (PM2.5) di sekitar Resort Sekonyer mencapai 285 µg/m³. Logbook harian mencatat ketiadaan pasokan air bertekanan tinggi akibat minimnya unit pompa hisap apung.',
    fileName: 'Lap-04/MPA-Sekonyer/X/2026.pdf',
    fileMeta: 'Sumber: Posko Lapangan Teluk Pulai',
    hashSnippet: 'Hash: b129f1...ca01 (Skema Prototipe)',
    action1: { label: 'LIHAT TRANSKRIP LAPORAN', actionKey: 'transkrip_laporan' },
    action2: { label: 'VERIFIKASI HASH', actionKey: 'verifikasi_hash' },
    interstitialNote:
      'TANGGAPAN RESMI DIDOKUMENTASIKAN: ESKALASI STATUS TANGGAP DARURAT DAN KOMANDO PENEGAKAN HUKUM [PARAMETER SKENARIO]',
    disparityHours: '21 Jam',
  },
  {
    id: 'node-03',
    simpulNumber: '03',
    simpulBadge: 'DOKUMEN HUKUM TERVERIFIKASI',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    date: '15 OKT 2026',
    time: 'Pukul 14:00 WIB',
    eventDate: '15 Okt 2026',
    docDate: '15 Okt 2026 — 14:00',
    pubDate: '16 Okt 2026',
    auditDate: '28 Okt 2026 (Valid)',
    category: 'MANDAT ADMINISTRASI PENANGGULANGAN KARHUTLA',
    eventType: 'regulasi',
    title: 'Penerbitan Surat Keputusan Tanggap Darurat Ditjen Gakkum No. 441/2026',
    description:
      'Direktur Jenderal Penegakan Hukum LHK menerbitkan SK Penugasan Khusus 45 personel satuan Manggala Agni Daops III Pangkalan Bun serta perintah pengerahan 8 unit mesin pompa pemadam apung dan perlengkapan sekat kanal darurat. Dokumen memuat instruksi alokasi tanggap darurat yang ditujukan pada Satuan Kerja Wilayah III.',
    fileName: 'SK_GAKKUM_KLHK_No_441_2026.pdf (2.4 MB pada skenario)',
    fileMeta: 'Ditjen Gakkum LHK | Tanda Tangan Elektronik Balai Sertifikasi (BSrE)',
    hashSnippet: 'TTE BSrE: Validasi Simulasi Alur',
    action1: { label: 'UNDUH SALINAN SK', actionKey: 'unduh_sk' },
    action2: { label: 'UJI VALIDITAS TTE', actionKey: 'uji_tte' },
    interstitialNote:
      'ALOKASI PAGU ANGGARAN DITERBITKAN UNTUK MENDUKUNG LOGISTIK OPERASI PEMADAMAN [PARAMETER SKENARIO]',
    disparityHours: '115 Jam',
  },
  {
    id: 'node-04',
    simpulNumber: '04',
    simpulBadge: 'CATATAN FISKAL TERKONFIRMASI',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    date: '20 OKT 2026',
    time: 'Pukul 09:15 WIB',
    eventDate: '20 Okt 2026',
    docDate: '20 Okt 2026 — 09:15',
    pubDate: 'Sistem SPAN Kemenkeu',
    auditDate: '28 Okt 2026 (Valid)',
    category: 'BUKU BESAR PERBENDAHARAAN NEGARA (SPAN)',
    eventType: 'anggaran',
    title: 'Pencatatan DIPA Petikan Rp 14,2 Miliar pada Bagian Anggaran 029',
    description:
      'Catatan perbendaharaan negara menunjukkan realisasi alokasi penanganan karhutla regional Kalimantan Tengah sebesar Rp 14.200.000.000,- dengan sub-alokasi logistik operasional pompa dan sewa helikopter water bombing. Pencairan Tahap I sebesar Rp 4.800.000.000,- tercatat diterbitkan untuk pengadaan sarana darurat.',
    fileName: 'Petikan DIPA SPAN BA 029 Kemenkeu TA 2026',
    fileMeta: 'Kode Satker: 521890 | Akun 537112 (Belanja Modal Darurat)',
    hashSnippet: 'SPAN ID: 029-SPAN-2026-X88',
    action1: { label: 'PERIKSA ARSIP SPAN', actionKey: 'periksa_span' },
    action2: { label: 'CEK KODE TRANSAKSI', actionKey: 'kode_transaksi' },
  },
];

export const CRIMSON_BANNER_DATA = {
  title: 'HUBUNGAN ANGGARAN BELUM TERBUKTI / CELAH BUKTI KRITIS',
  description:
    'Realisasi fisik logistik tidak dapat diverifikasi silang dengan kontrak pengadaan terbuka maupun berita acara serah terima di lapangan.',
  disclaimer:
    'Ketiadaan dokumen pengadaan terbuka menandakan celah akuntabilitas publik yang perlu ditindaklanjuti melalui permohonan informasi UU KIP, bukan pembuktian kesalahan pidana.',
};

export const PUMP_TRIANGULATION_AUDIT: {
  gapCode: string;
  gapSubtitle: string;
  repoStatus: string;
  title: string;
  columns: PumpComparisonColumn[];
} = {
  gapCode: 'CELAH BUKTI #01',
  gapSubtitle: 'KETIADAAN DOKUMEN LELANG & BERITA ACARA (BAST)',
  repoStatus: 'BERKAS BELUM TERSEDIA DI REPOSITORI PUBLIK',
  title: 'Anomali Pengadaan 12 Pompa Khusus Gambut (DIPA Rp 4,8 Miliar)',
  columns: [
    {
      id: 'col-1',
      columnNumber: '1',
      title: 'TERCATAT DI DIPA KEMENKEU',
      body: 'Alokasi anggaran darurat Rp 4.800.000.000,- untuk pembelian 12 unit pompa pemadam tekanan tinggi berkapasitas 1.500 LPM berspesifikasi gambut dalam.',
      statusLabel: 'Status: Pagu Alokasi Tercatat [Parameter Skenario]',
      statusType: 'case_param',
    },
    {
      id: 'col-2',
      columnNumber: '2',
      title: 'TEMUAN DI PORTAL LPSE',
      body: 'Nihil. Tidak ada paket tender e-katalog, lelang darurat, maupun penunjukan langsung yang tercatat pada LPSE Kementerian LHK untuk wilayah Kotawaringin Barat periode Okt 2026.',
      statusLabel: 'Status: Rekam Pengadaan Absen [Celah Repositori]',
      statusType: 'gap',
    },
    {
      id: 'col-3',
      columnNumber: '3',
      title: 'REALISASI LAPANGAN MANGGALA AGNI',
      body: 'Satuan Daops III mengeluhkan ketiadaan armada pompa baru. Dari 8 unit lama yang dikerahkan, 3 unit mengalami kerusakan fatal akibat sedimen gambut dan tidak ada penggantian unit baru hingga 25 Okt 2026.',
      statusLabel: 'Status: Indikasi Defisit Sarana [Parameter Skenario]',
      statusType: 'case_param',
    },
  ],
};

export const PPID_MONITORING_DATA: PpidMonitoringState = {
  ticketNumber: '#KIP-2026-X889 [SIMULASI ALUR KERJA]',
  statusText:
    'Menunggu Tanggapan Resmi PPID Kementerian LHK (Hari ke-6 dari 10 Hari Kerja UU No. 14/2008).',
  startDate: 'Hari ke-1 (18 Okt)',
  currentDay: 6,
  totalDays: 10,
  remainingDays: 4,
  deadlineDate: 'Batas Akhir (02 Nov)',
};

export const CHRONOLOGY_FOOTER_DATA = {
  integrityStatement:
    'Seluruh berkas yang tertera disusun berdasarkan bukti dokumen terbuka, citra satelit independen, dan hak akses informasi publik. Redaksi BinarCelah menjunjung asas praduga tak bersalah (Pasal 8 ayat (1) UU No. 48 Tahun 2009). Keberadaan status Celah Bukti menandakan ketiadaan dokumentasi akuntabilitas publik pada repositori resmi negara, bukan vonis pidana.',
  merkleRoot: '7b39f029c2...41a7d8004fce [SKEMA PROTOTIPE]',
  syncedAt: '28 Okt 2026, 23:59 WIB [SIMULASI]',
};
