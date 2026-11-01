import type { EvidenceChainNode, LedgerRecord, MethodologyStep, PlatformMetric } from '../types/case';

export const PROTOCOL_INFO = {
  standard: 'Rujukan Metodologi: Prinsip Penanganan Bukti Digital',
  statusLabel: 'STATUS SISTEM',
  statusState: 'PROTOTIPE TAHAP 1',
  statusNote: 'Antarmuka prototipe demonstratif',
  description: 'Kerangka metodologi penelusuran dokumen publik terbuka dan pemisahan fakta primer dari narasi spekulatif.',
  rootHash: 'TIDAK DIKALKULASI (PROTOTIPE)',
};

export const PLATFORM_METRICS: PlatformMetric[] = [
  {
    id: 'm-1',
    label: 'REKONSTRUKSI ALUR KEBIJAKAN',
    type: 'capability',
    note: 'Menghubungkan peristiwa, regulasi, dan realisasi anggaran negara secara berurutan.',
  },
  {
    id: 'm-2',
    label: 'PENELUSURAN DOKUMEN PRIMER',
    type: 'capability',
    note: 'Menguji ketersediaan arsip resmi dari LPSE, JDIH, dan portal keterbukaan informasi.',
  },
  {
    id: 'm-3',
    label: 'IDENTIFIKASI CELAH AKUNTABILITAS',
    type: 'target',
    note: 'Menandai ketertutupan data publik atau disparitas dokumen tanpa membuat vonis sepihak.',
  },
  {
    id: 'm-4',
    label: 'TINDAK LANJUT BERBASIS UU KIP',
    type: 'methodology',
    note: 'Menyediakan panduan permohonan informasi publik resmi berdasarkan UU No. 14/2008.',
  },
];

export const FEATURED_CASE = {
  id: '#BC-2026-08',
  badge: 'STUDI KASUS DEMONSTRATIF',
  subtitle: 'Simulasi Rekonstruksi Rantai Kebijakan & Bukti Lapangan',
  lastReview: 'Parameter Skenario: Oktober 2026',
  status: 'PARAMETER SKENARIO DEMONSTRATIF',
  region: 'Koridor Penyangga Tanjung Puting (Studi Kasus)',
  title: 'Menelusuri penanganan kebakaran Taman Nasional Tanjung Puting',
  summary:
    'Simulasi pengujian alur keterbukaan data penanggulangan karhutla di koridor penyangga Tanjung Puting. Menguji ketersediaan data indikasi satelit, surat keputusan penugasan, alokasi anggaran penanganan, serta verifikasi dokumen pengadaan di lapangan.',
  auditSummary: {
    progressLabel: '3 Simpul Parameter Skenario • 1 Simpul Celah Keterbukaan Informasi',
  },
  catalogSummary: 'Katalog Studi Kasus: Parameter skenario percontohan untuk pengujian keterbukaan publik',
};

export const CHAIN_OF_EVIDENCE_NODES: EvidenceChainNode[] = [
  {
    id: 'chain-1',
    stepNumber: '01',
    category: 'PERISTIWA',
    statusLabel: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
    statusType: 'case_param',
    title: 'Indikasi Deteksi Termal Satelit',
    description: 'Titik anomali termal terdeteksi instrumen observasi satelit di kawasan Tanjung Puting (Skenario simulasi).',
    referenceCode: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
  },
  {
    id: 'chain-2',
    stepNumber: '02',
    category: 'RESPON KEBIJAKAN',
    statusLabel: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
    statusType: 'case_param',
    title: 'Instruksi Tanggap Darurat & Penugasan Regu',
    description: 'Penerbitan surat penugasan penanggulangan kedaruratan bagi regu pemadam lapangan (Skenario simulasi).',
    referenceCode: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
  },
  {
    id: 'chain-3',
    stepNumber: '03',
    category: 'ALOKASI ANGGARAN',
    statusLabel: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
    statusType: 'case_param',
    title: 'Pencatatan Alokasi Anggaran Penanggulangan',
    description: 'Alokasi pos anggaran kedaruratan penanganan lahan gambut pada kementerian terkait (Skenario simulasi).',
    referenceCode: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
  },
  {
    id: 'chain-4',
    stepNumber: '04',
    category: 'KESENJANGAN DATA',
    statusLabel: '[DOKUMEN TIDAK TERSEDIA DALAM REPOSITORI]',
    statusType: 'gap',
    title: 'Dokumen Pengadaan Pompa & BAST Fisik',
    description: 'Tidak ditemukan arsip lelang terbuka atau Berita Acara Serah Terima (BAST) pompa air di repositori LPSE terkait.',
    referenceCode: '[DOKUMEN TIDAK TERSEDIA DALAM REPOSITORI]',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: '01',
    category: 'KONTEKS',
    title: 'Pahami',
    description:
      'Baca ringkasan kasus faktual tanpa narasi sensasional. Pahami yurisdiksi, subjek kebijakan, dan rentang waktu peristiwa secara terukur.',
    standard: 'Prinsip: Deskripsi Netral',
  },
  {
    stepNumber: '02',
    category: 'BUKTI',
    title: 'Telusuri',
    description:
      'Periksa dokumen primer pada kanal keterbukaan informasi publik: surat keputusan, data pengamatan lingkungan, dan lembar alokasi anggaran resmi.',
    standard: 'Prinsip: Sumber Informasi Terbuka',
  },
  {
    stepNumber: '03',
    category: 'CELAH BUKTI',
    title: 'Temukan Kesenjangan',
    description:
      'Identifikasi titik ketidakterbukaan data publik. Membedakan secara tegas antara apa yang didukung dokumen versus apa yang belum dapat diverifikasi.',
    standard: 'Prinsip: Pemisahan Fakta-Opini',
  },
  {
    stepNumber: '04',
    category: 'AKSI SIPIL',
    title: 'Tindak Lanjut',
    description:
      'Pemanfaatan mekanisme permohonan informasi publik resmi berdasarkan UU No. 14 Tahun 2008 melalui PPID instansi pemerintah terkait.',
    standard: 'Prinsip: Instrumen UU KIP No. 14/2008',
  },
];

export const FORENSIC_LEDGER_RECORDS: LedgerRecord[] = [
  {
    code: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
    agency: 'Kementerian Lingkungan Hidup & Kehutanan',
    subject: 'Data Sebaran Regu Lapangan (Simulasi)',
    forensicStatus: '[BELUM TERVERIFIKASI PRIMER]',
    statusType: 'neutral',
    hash: 'TIDAK DIKALKULASI',
    actionType: 'inspect',
    publishDate: 'Data Primer Belum Tersedia',
    detailNote: 'Parameter sebaran regu lapangan pada simulasi studi kasus demonstratif. Belum ada dokumen primer yang diunggah atau diverifikasi.',
  },
  {
    code: '[PARAMETER STUDI KASUS DEMONSTRATIF]',
    agency: 'Kementerian Keuangan (DJPB)',
    subject: 'Pos Alokasi Anggaran Kedaruratan (Simulasi)',
    forensicStatus: '[BELUM TERVERIFIKASI PRIMER]',
    statusType: 'neutral',
    hash: 'TIDAK DIKALKULASI',
    actionType: 'inspect',
    publishDate: 'Data Primer Belum Tersedia',
    detailNote: 'Simulasi pencatatan alokasi anggaran pada skenario studi kasus. Dokumen DIPA asli belum diperoleh dalam repositori.',
  },
  {
    code: '[DOKUMEN TIDAK TERSEDIA DALAM REPOSITORI]',
    agency: 'Unit Layanan Pengadaan Terkait',
    subject: 'Dokumen Kontrak & BAST Pompa Air',
    forensicStatus: '[DOKUMEN TIDAK TERSEDIA DALAM REPOSITORI]',
    statusType: 'repo_unavailable',
    hash: 'NIHIL (DOKUMEN TIDAK TERSEDIA)',
    actionType: 'request_kip',
    publishDate: 'Dokumen Belum Ditemukan',
    detailNote: 'Ketiadaan paket tender pengadaan mesin pompa darurat pada repositori terbuka hingga batas waktu audit.',
  },
];

export const SECURE_DROP_CONFIG = {
  publicKeyFingerprint: 'TIDAK DIKONFIGURASI (PROTOTIPE NON-OPERASIONAL)',
  prototypeStatus: 'PROTOTIPE ANTARMUKA',
  securityPillars: [
    {
      title: 'RENCANA SANITASI METADATA',
      description: 'Arsitektur masa depan direncanakan menyaring metadata (geotag GPS, identitas perangkat) sebelum data diproses.',
    },
    {
      title: 'TARGET MINIMALISASI LOG',
      description: 'Perancangan sistem ditargetkan tanpa pencatatan jejak IP penelusur guna melindungi kerahasiaan masyarakat.',
    },
    {
      title: 'SALURAN PENGADUAN RESMI NEGARA',
      description: 'Untuk perlindungan saksi berlandaskan hukum saat ini, warga diarahkan mengakses kanal resmi seperti SP4N LAPOR! atau LPSK.',
    },
  ],
  legalComplianceText:
    'Pemberitahuan: BinarCelah tidak menerima atau menyimpan dokumen operasional pada tahap prototipe ini. Untuk penyampaian informasi resmi, warga dapat memanfaatkan saluran PPID dan pengaduan negara.',
};
