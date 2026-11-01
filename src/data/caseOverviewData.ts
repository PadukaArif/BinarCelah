import type {
  TimestampNode,
  EvidenceDocumentCard,
  TriangulationVector,
  AccountabilityGap,
  CaseCustodyItem,
} from '../types/case';

export const CASE_METADATA = {
  id: '#BC-2026-08',
  badge: 'STUDI KASUS DEMONSTRATIF',
  title: 'Menelusuri penanganan kebakaran Taman Nasional Tanjung Puting',
  scopeSummary:
    'Pemeriksaan silang terhadap komitmen penanggulangan karhutla di koridor penyangga DAS Sekonyer, Kalimantan Tengah. Membandingkan data deteksi anomali satelit, instruksi penugasan SK Tanggap Darurat, pencatatan DIPA APBN Rp 14,2 Miliar, dengan realisasi fisik logistik lapangan.',
  region: 'Kalimantan Tengah / Koridor Penyangga Sekonyer',
  lastReview: 'Parameter Skenario: Oktober 2026',
  status: 'PARAMETER SKENARIO DEMONSTRATIF',
  rootHash: 'TIDAK DIKALKULASI (PROTOTIPE)',
  standard: 'Metodologi: Nol-Spekulasi Naratif (UU KIP No. 14/2008)',
};

export const SENSOR_EXPLANATION = {
  thermalSensorName: 'Sensor Radiometri Termal (VIIRS 375m & MODIS 1km)',
  thermalSensorRole:
    'Mendeteksi pixel anomali suhu kecerahan tinggi (fire radiative power) untuk deteksi titik panas permukaan.',
  opticalSensorName: 'Sensor Optik Multispektral (Sentinel-2 L2A MSI 10m/20m)',
  opticalSensorRole:
    'Bukan sensor radiometri termal. Menggunakan kombinasi pantulan spektrum SWIR False Color (B12-B8A-B04) untuk memetakan penetrasi asap, tutupan lahan, dan jejak arang bekas terbakar (burn scars) pasca-kejadian.',
};

export const EVIDENCE_DOCUMENT_01A: EvidenceDocumentCard = {
  id: 'doc-01a',
  code: 'BERKAS BUKTI #01-A',
  title: 'Citra Satelit Multispektral Sentinel-2 L2A (SWIR False Color)',
  classification: '[PARAMETER STUDI KASUS]',
  statusType: 'case_param',
  instrument: 'Sentinel-2 MSI (Multi-Spectral Instrument)',
  bandsOrFormat: 'B12 (SWIR-2), B8A (Narrow NIR), B04 (Red)',
  resolution: '20 Meter / Pixel',
  coordinatesNote: '2°45\'S 111°58\'E (Parameter Demonstratif)',
  checksumStatus: 'TIDAK DIKALKULASI (PROTOTIPE)',
  summary:
    'Citra optik digunakan untuk memverifikasi reflektansi permukaan dan jejak arang gambut pasca-anomali termal, membedakan vegetasi sehat dengan zona terdampak tanpa klaim sensor termal.',
};

export const CHAIN_OF_TIMESTAMPS: TimestampNode[] = [
  {
    id: 'ts-1',
    time: '06:14 WIB',
    date: '12 Okt 2026',
    title: 'Deteksi Awal Anomali Termal Satelit',
    sensorOrSource: 'Instrumen Sensor Termal Ruang (Skenario Demonstratif)',
    description: 'Pixel radiometri termal pertama terdaftar di koridor penyangga gambut Sekonyer.',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
  },
  {
    id: 'ts-2',
    time: '14:00 WIB',
    date: '15 Okt 2026',
    title: 'Penerbitan Instruksi Penugasan Regu Lapangan',
    sensorOrSource: 'Administrasi Instansi Kebijakan (Skenario Demonstratif)',
    description: 'Penerbitan surat penugasan penanggulangan kedaruratan bagi regu pemadam lapangan.',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
  },
  {
    id: 'ts-3',
    time: '21:00 WIB',
    date: '18 Okt 2026',
    title: 'Laporan Mobilisasi Unit Pompa Pemadam',
    sensorOrSource: 'Logistik Lapangan (Skenario Demonstratif)',
    description: 'Pencatatan kedatangan unit pompa apung di posko desa terdampak.',
    statusLabel: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
  },
];

export const TIMESTAMP_DISPARITY_NOTE =
  'Catatan Disparitas Waktu: Terdapat jeda administratif demonstratif sekitar 78 jam antara deteksi anomali termal awal dengan penerbitan instruksi penugasan regu. Seluruh stempel waktu disusun berdasarkan parameter studi kasus simulasi dan bukan merupakan tuduhan kelalaian pidana.';

export const TRIANGULATION_VECTORS: TriangulationVector[] = [
  {
    id: 'vec-a',
    vectorCode: 'VEKTOR A',
    title: 'Deteksi Ruang & Anomali Termal',
    sourceAgency: 'Sensor Ruang (NASA FIRMS / MODIS & VIIRS)',
    factualParameter: 'Indikasi titik anomali termal pada koordinat koridor gambut DAS Sekonyer.',
    evidenceStatus: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    finding: 'Menunjukkan adanya indikasi radiasi termal tinggi di atas ambang batas vegetasi gambut.',
    limitations: 'Sensor termal satelit memiliki keterbatasan tutupan awan dan jeda waktu orbit melintas (revisit time).',
  },
  {
    id: 'vec-b',
    vectorCode: 'VEKTOR B',
    title: 'Respon Komando & Regulasi Penugasan',
    sourceAgency: 'Ditjen Gakkum KLHK (Skenario Simulasi)',
    factualParameter: 'Penerbitan instruksi penugasan penanggulangan karhutla regional.',
    evidenceStatus: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    finding: 'Mengonfirmasi pengakuan status kedaruratan oleh pemangku kebijakan wilayah.',
    limitations: 'Surat keputusan penugasan tidak memuat secara otomatis bukti mobilisasi fisik logistik seketika.',
  },
  {
    id: 'vec-c',
    vectorCode: 'VEKTOR C',
    title: 'Alokasi Finansial & Logistik Anggaran',
    sourceAgency: 'Kementerian Keuangan (Bagian Anggaran BA 029)',
    factualParameter: 'Pencatatan DIPA APBN alokasi penanggulangan karhutla regional.',
    evidenceStatus: '[PARAMETER STUDI KASUS]',
    statusType: 'case_param',
    finding: 'Alokasi dana kedaruratan tercatat pada dokumen perencanaan fiskal APBN.',
    limitations: 'Pencatatan DIPA merupakan komitmen anggaran, bukan bukti penyerapan riil tanpa Berita Acara Serah Terima (BAST).',
  },
];

export const MERKLE_TREE_NOTE = {
  tag: 'TREE-NODE-BK9021',
  label: 'Skema Visual Penandaan Integritas Bukti: TREE-NODE-BK9021 [SKEMA PROTOTIPE]',
  description:
    'Skema visual penandaan struktur data lokal untuk pengujian integritas alur verifikasi. Bukan merupakan blockchain atau ledger terverifikasi pihak ketiga.',
};

export const ACCOUNTABILITY_GAPS: AccountabilityGap[] = [
  {
    id: 'gap-01',
    code: 'CELAH #01',
    title: 'Ketiadaan Kontrak Lelang & BAST 12 Pompa Khusus Gambut',
    gapType: 'Kesenjangan Pengadaan Logistik',
    statusType: 'gap',
    description:
      'Tidak ditemukan dokumen kontrak lelang e-katalog LPSE atau Berita Acara Serah Terima (BAST) untuk pengadaan 12 pompa jinjing bertekanan tinggi di posko terdampak.',
    legalBasis: 'Pasal 9 & 11 UU KIP No. 14/2008 (Informasi Berkala Pengadaan Barang & Jasa)',
    actionLabel: 'PANTAU SURAT PERMOHONAN KIP →',
    actionType: 'kip_request',
  },
  {
    id: 'gap-02',
    code: 'CELAH #02',
    title: 'Ketiadaan Laporan Asesmen Dampak Paparan Asap Satwa Camp Leakey',
    gapType: 'Kesenjangan Data Ekologis',
    statusType: 'gap',
    description:
      'Tidak ditemukan publikasi hasil pemantauan kualitas udara atau laporan dokter hewan terkait dampak infeksi saluran pernapasan pada populasi satwa lindung.',
    legalBasis: 'Pasal 10 UU KIP No. 14/2008 (Informasi Serta Merta Mengenai Ancaman Hajat Hidup)',
    actionLabel: 'PERIKSA PANDUAN INFORMASI →',
    actionType: 'submit_evidence',
  },
  {
    id: 'gap-03',
    code: 'CELAH #03',
    title: 'Status Parit Kanal Gambut di Perbatasan Konsesi Perkebunan',
    gapType: 'Kesenjangan Data Spasial & Izin',
    statusType: 'gap',
    description:
      'Peta tata batas dan status muka air parit drainase gambut pada batas kawasan taman nasional dengan konsesi perkebunan sekitar belum dipublikasikan secara terbuka.',
    legalBasis:
      'Dasar Permohonan: UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik; Rujukan Geospasial: Perpres No. 9 Tahun 2016 jo. Perpres No. 23 Tahun 2021 tentang Kebijakan Satu Peta; Preseden Keterbukaan HGU: Putusan MA No. 121 K/TUN/2017.',
    actionLabel: 'PANDUAN SENGKETA INFORMASI KIP →',
    actionType: 'dispute_info',
  },
];

export const PRESUMPTION_OF_INNOCENCE_NOTICE =
  'Pemberitahuan Etika Bukti Sipil: Celah informasi publik mencerminkan ketiadaan dokumen dalam repositori terbuka yang dapat diakses warga, bukan vonis atau penetapan kesalahan hukum. Seluruh subjek dilindungi oleh asas praduga tak bersalah sebagai prinsip hukum peradilan (Pasal 8 ayat (1) UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman), sedangkan hak warga untuk memohon dan mengakses dokumen publik dijamin secara terpisah oleh UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.';

export const CASE_CUSTODY_ITEMS: CaseCustodyItem[] = [
  {
    id: 'custody-1',
    stageNumber: '01',
    title: 'Observasi Satelit',
    statusText: 'Terpetakan [Parameter Skenario]',
    statusType: 'case_param',
    isComplete: true,
  },
  {
    id: 'custody-2',
    stageNumber: '02',
    title: 'Regulasi Penugasan',
    statusText: 'Terpetakan [Parameter Skenario]',
    statusType: 'case_param',
    isComplete: true,
  },
  {
    id: 'custody-3',
    stageNumber: '03',
    title: 'Alokasi Anggaran',
    statusText: 'Terpetakan [Parameter Skenario]',
    statusType: 'case_param',
    isComplete: true,
  },
  {
    id: 'custody-4',
    stageNumber: '04',
    title: 'Kontrak & BAST Fisik',
    statusText: 'Belum Tersedia [Celah Repositori]',
    statusType: 'gap',
    isComplete: false,
  },
];

export const SPATIAL_COVERAGE_DATA = {
  mapLabel: '[PETA ILUSTRATIF STUDI KASUS — BUKAN CITRA GEOSPASIAL RESMI]',
  coordinates: '2°45\'S 111°58\'E (Format Demonstratif)',
  areaEstimate: '±480 Ha (Parameter Skenario)',
  ecosystem: 'Gambut Dalam (>3m) (Parameter Skenario)',
  locationName: 'Koridor Penyangga DAS Sekonyer',
};

export const PUBLIC_METADATA_DATA = {
  initiator: 'Divisi Riset Kebijakan Publik BinarCelah (Peran Simulasi Skenario)',
  reviewers: '2 Peninjau Metodologis Independen (Peran Simulasi Skenario)',
  license: 'Repositori Kode & Dokumentasi Terbuka (Lisensi Belum Ditetapkan)',
  urn: 'urn:binarcelah:dossier:bc-2026-08',
};

