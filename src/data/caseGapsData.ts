import type {
  GapDetailedItem,
  AdvocacyStepItem,
} from '../types/case';

export const GAPS_PAGE_HEADER = {
  title: 'Kesenjangan Informasi & Pertanyaan Riset',
  subtitle:
    'Komparasi forensik antara penetapan alokasi kedaruratan negara, logistik teknis lapangan, dan data ekologis independen periode triwulan IV 2026.',
  dossierCode: 'BERKAS PUBLIK BC-2026-08',
  region: 'Wilayah: Kotawaringin Barat, Kalteng',
  statusBadge: 'STATUS: AUDIT AKTIF | REVISI VERIFIKASI: 24 OKT 2026 [PARAMETER SKENARIO]',
  manifestHash: 'SHA-256: 8a7cf9b210e74...d41c [SKEMA PROTOTIPE]',
};

export const GAPS_MANDATORY_DISCLAIMER =
  'Pertanyaan-pertanyaan ini menjelaskan bukti yang belum ditemukan atau belum terbukti. Ini adalah pertanyaan penelitian berdasarkan ketiadaan data publik resmi, bukan tuduhan pidana.';

export const GAPS_SUMMARY_KPIS = [
  {
    id: 'kpi-1',
    value: '3 Celah',
    label: 'AKUNTABILITAS TERIDENTIFIKASI',
    highlight: 'text-red-700',
    badge: 'Katalog Kasus',
  },
  {
    id: 'kpi-2',
    value: '8 Dokumen',
    label: '[PARAMETER STUDI KASUS]',
    highlight: 'text-navy',
    badge: 'Basis Penelusuran',
  },
  {
    id: 'kpi-3',
    value: 'Hari ke-6',
    label: '1 PERMOHONAN PPID BERJALAN [Simulasi Alur Kerja]',
    highlight: 'text-sapphire',
    badge: 'Progres UU KIP',
  },
  {
    id: 'kpi-4',
    value: '100% Bebas',
    label: 'TUDUHAN PIDANA (AUDIT HAK PUBLIK)',
    highlight: 'text-emerald-800',
    badge: 'Asas Praduga Tak Bersalah',
  },
];

export const GAPS_DETAILED_ITEMS: GapDetailedItem[] = [
  {
    id: 'gap-01',
    code: '#CELAH-2026-01',
    significance: 'TINGGI',
    sector: 'PENANGANAN TANGGAP DARURAT & LOGISTIK',
    category: 'realisasi',
    verifiedAt: '22 Okt 2026 / 14:10 WIB',
    researchQuestion:
      'Apakah terdapat dokumen publik yang menghubungkan komitmen tanggap darurat dengan realisasi kegiatan pengadaan pompa apung di lapangan?',
    knownFacts: {
      header: 'FAKTA EMPIRIS DIKETAHUI [PARAMETER SKENARIO]',
      statusLabel: 'STATUS: RESMI TERBIT',
      statusType: 'official',
      points: [
        'SK Ditjen Gakkum No. 441/2026 memerintahkan penugasan 45 personel Manggala Agni dan pengerahan 8 unit pompa portabel ke Koridor Sekonyer.',
        'DIPA Petikan Kemenkeu BA 029 mencatat alokasi tanggap darurat sebesar Rp 14,2 Miliar, dengan sub-alokasi logistik Rp 4.800.000.000,- untuk pengadaan 12 unit pompa pemadam khusus gambut bertekanan tinggi.',
      ],
      reference: 'Sumber Primer: DIPA No. 029.05.1.412891/2026 & SK Gakkum KLHK RI [Parameter Skenario].',
    },
    unknownFacts: {
      header: 'FAKTA BELUM TERKONFIRMASI / TIDAK TERSEDIA',
      statusLabel: 'STATUS: TIDAK DITEMUKAN',
      statusType: 'gap',
      points: [
        'Tidak ditemukan arsip lelang tender e-katalog, tender darurat, maupun penunjukan langsung di LPSE Kementerian LHK untuk wilayah Kotawaringin Barat periode Oktober 2026.',
        'Berita Acara Serah Terima (BAST) fisik 12 unit pompa pemadam gambut belum diunggah ke repositori keterbukaan informasi PPID hingga batas audit data terkini.',
        'Laporan harian posko darurat mencatat kendala pemadaman akibat keterbatasan alat sedimen gambut tanpa konfirmasi kedatangan 12 unit baru tersebut.',
      ],
      gapIndication:
        'Indikasi Celah: Ketiadaan dokumentasi serah-terima operasional di basis data publik terbuka.',
    },
    relatedEvidenceDocs: [
      {
        code: 'DOC-SK-GAKKUM-441',
        title: 'SK Penugasan Khusus Satuan Manggala Agni Daops III',
        source: 'Ditjen Gakkum KLHK RI',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
      {
        code: 'DOC-SPAN-BA029-DIPA',
        title: 'Petikan DIPA Alokasi Belanja Kedaruratan Rp 4,8 Miliar',
        source: 'Sistem SPAN Kemenkeu RI (BA 029)',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
      {
        code: 'DOC-LPSE-NIHIL-OCT26',
        title: 'Hasil Penelusuran Portal LPSE Wilayah Kotawaringin Barat',
        source: 'Portal Pengadaan Terbuka LPSE',
        statusLabel: '[Celah Repositori]',
        statusType: 'gap',
      },
    ],
    kipQuestionDraft: `Rincian Permohonan Informasi Publik (Pasal 22 UU No. 14/2008):
1. Salinan Surat Perjanjian Kontrak Pengadaan 12 Unit Pompa Jinjing Pemadam Gambut (Sub-Alokasi DIPA BA 029 TA 2026 Satker 521890).
2. Salinan Berita Acara Serah Terima (BAST) Fisik Pompa dari Penyedia kepada Satker Wilayah Kalimantan Tengah.
3. Daftar Penempatan Unit Pompa pada Daops III Pangkalan Bun periode Oktober 2026.`,
    factualQuotation:
      'DIPA Kemenkeu BA 029 mencatat alokasi tanggap darurat Rp 4,8 Miliar untuk 12 unit pompa gambut, namun catatan lelang LPSE KLHK nihil dan BAST serah terima fisik belum diunggah pada repositori terbuka per 24 Oktober 2026 [Parameter Skenario].',
  },
  {
    id: 'gap-02',
    code: '#CELAH-2026-02',
    significance: 'SEDANG',
    sector: 'ALOKASI BIAYA SEWA HELI WATER BOMBING',
    category: 'anggaran',
    verifiedAt: '21 Okt 2026 / 17:45 WIB',
    researchQuestion:
      'Bagaimana rincian verifikasi jam terbang operasional helikopter water bombing terhadap pencairan termin pertama sebesar Rp 9,4 Miliar?',
    knownFacts: {
      header: 'KLAIM BELUM TERKONFIRMASI — PARAMETER STUDI KASUS',
      statusLabel: 'STATUS: RESMI TERBIT',
      statusType: 'official',
      points: [
        'Surat Perintah Pencairan Dana (SP2D) Kemenkeu No. 8912/2026 membuktikan termin pencairan pertama logistik udara sebesar Rp 9.400.000.000,- telah didebit ke rekening operasional BNPB/KLHK Wilayah Kalteng pada 18 Oktober 2026.',
        'Kontrak payung mencakup 120 jam operasional sorti pemadaman udara untuk 2 armada helikopter Kamov Ka-32.',
      ],
      reference: 'Basis Data SP2D Kas Negara & Lampiran Kontrak BNPB No. 119/LOG-AIR/2026 [Parameter Skenario].',
    },
    unknownFacts: {
      header: 'FAKTA BELUM TERKONFIRMASI / TIDAK TERSEDIA',
      statusLabel: 'STATUS: TIDAK DITEMUKAN',
      statusType: 'gap',
      points: [
        'Buku catatan penerbangan harian (daily flight manifests), logbook bahan bakar avtur, dan rekaman telemetri drop point air di atas zona inti Tanjung Puting belum dirilis ke publik.',
        'Data koordinat pelepasan air tidak dapat dicocokkan dengan titik panas (hotspots) aktif NASA FIRMS untuk rentang tanggal 14–17 Oktober 2026.',
      ],
      gapIndication:
        'Indikasi Celah: Ketiadaan audit independen atas keselarasan jam operasional riil vs nominal pembayaran termin.',
    },
    relatedEvidenceDocs: [
      {
        code: 'DOC-SP2D-8912-2026',
        title: 'Surat Perintah Pencairan Dana (SP2D) Termin I Sewa Heli',
        source: 'KPPN Kemenkeu RI',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
      {
        code: 'DOC-KONTRAK-119-BNPB',
        title: 'Perjanjian Kerja Sama Sewa Heli Bom Air Kamov Ka-32',
        source: 'Satgas Udara BNPB',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
    ],
    kipQuestionDraft: `Rincian Permohonan Informasi Publik (Pasal 22 UU No. 14/2008):
1. Salinan Daily Flight Manifest dan Logbook Jam Terbang 2 Unit Helikopter Kamov Ka-32 periode 14–20 Oktober 2026.
2. Rekaman Titik Koordinat GPS Water Dropping Sorti Pemadaman Karhutla di Koridor Sekonyer.
3. Berita Acara Rekonsiliasi Penggunaan Bahan Bakar Avtur Operasi Udara BNPB/KLHK Wilayah Kalteng.`,
    factualQuotation:
      'SP2D No. 8912/2026 mencatat pencairan Rp 9,4 Miliar untuk 120 jam sewa heli Kamov Ka-32, namun daily flight manifests dan rekaman koordinat drop point air belum dibuka ke publik [Parameter Skenario].',
  },
  {
    id: 'gap-03',
    code: '#CELAH-2026-03',
    significance: 'TINGGI',
    sector: 'KORIDOR SATWA CAMP LEAKEY & EKOSISTEM GAMBUT',
    category: 'ekologis',
    verifiedAt: '20 Okt 2026 / 09:20 WIB',
    researchQuestion:
      'Apakah telah dilakukan asesmen resmi berkala mengenai dampak konsentrasi PM2.5 asap gambut terhadap populasi Orangutan Kalimantan di radius 15 km?',
    knownFacts: {
      header: 'DATA SPASIAL INDEPENDEN [PARAMETER SKENARIO]',
      statusLabel: 'STATUS: DATA SPASIAL INDEPENDEN',
      statusType: 'case_param',
      points: [
        'Citra satelit Sentinel-5P TROPOMI mendeteksi lonjakan aerosol index dan kolom karbon monoksida (CO) mencapai 2.800 µmol/m² (melebihi ambang batas aman) pada 13–17 Oktober 2026 di Koridor Sekonyer.',
        'Sensor kualitas udara portabel Stasiun Riset mencatat rata-rata PM2.5 sebesar 342 µg/m³ selama periode pembakaran gambut intensif.',
      ],
      reference: 'Telemetri Terbuka Sentinel-5P & Logbook Sensor Kualitas Udara Lapangan [Parameter Skenario].',
    },
    unknownFacts: {
      header: 'FAKTA BELUM TERKONFIRMASI / TIDAK TERSEDIA',
      statusLabel: 'STATUS: TIDAK DITEMUKAN',
      statusType: 'gap',
      points: [
        'Balai Taman Nasional Tanjung Puting belum merilis laporan survei patologi satwa maupun protokol mitigasi evakuasi fauna liar untuk stasiun riset Camp Leakey.',
        'Tidak ada catatan status kondisi satwa terancam punah pasca pemadaman di kanal publikasi resmi Kementerian LHK.',
      ],
      gapIndication:
        'Indikasi Celah: Ketiadaan transparansi laporan biologis dampak kebakaran terhadap satwa dilindungi.',
    },
    relatedEvidenceDocs: [
      {
        code: 'DOC-SAT-SENTINEL-5P',
        title: 'Citra Densitas Aerosol & Kolom CO Koridor Sekonyer',
        source: 'Sensor TROPOMI ESA / Copernicus',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
      {
        code: 'DOC-SENSOR-PM25-RESORT',
        title: 'Log Telemetri Kualitas Udara Portabel Dermaga Sekonyer',
        source: 'Posko Lapangan Komunitas MPA',
        statusLabel: '[Parameter Skenario]',
        statusType: 'case_param',
      },
      {
        code: 'DOC-TNTP-SURVEI-NIHIL',
        title: 'Catatan Laporan Patologi Satwa Balai TNTP Periode Karhutla',
        source: 'Publikasi Resmi Ditjen KSDAE KLHK',
        statusLabel: '[Dokumen Belum Tersedia]',
        statusType: 'repo_unavailable',
      },
    ],
    kipQuestionDraft: `Rincian Permohonan Informasi Publik (Pasal 22 UU No. 14/2008):
1. Salinan Laporan Penilaian Dampak Paparan Asap Gambut terhadap Satwa Primata di Wilayah Kerja Resort Sekonyer dan Camp Leakey.
2. Dokumen Prosedur Standar Operasional (SOP) Mitigasi Kedaruratan Satwa Liar Korban Kebakaran Hutan Balai TN Tanjung Puting.
3. Data Morbiditas dan Mortalitas Satwa Dilindungi yang Terdokumentasi selama Periode Tanggap Darurat Oktober 2026.`,
    factualQuotation:
      'Sensor Sentinel-5P dan stasiun riset mencatat konsentrasi aerosol tinggi dan PM2.5 mencapai 342 µg/m³ di Koridor Sekonyer, namun Balai TNTP belum merilis laporan survei patologi dan kondisi satwa terlindungi [Parameter Skenario].',
  },
];

export const SPATIAL_HOTSPOT_DATA = {
  kicker: 'SENSOR SPASIAL & HOTSPOT',
  title: 'Peta Anomali Termal Gambut',
  description:
    'Citra satelit mendeteksi 47 anomali suhu termal di koridor penyangga Sungai Sekonyer yang berkorelasi langsung dengan laporan ketiadaan pompa apung pada 15 Oktober 2026.',
  sensor: 'MODIS / VIIRS Terra-Aqua',
  coreCoordinates: `2°45'S 111°56'E`,
  geoTiffHash: 'a4b1c8f921...e789 (Skema Prototipe)',
  impactZoneBadge: 'ZONA TERDAMPAK: 1.420 HEKTAR GAMBUT DALAM',
  illustrativeNotice: '[PETA ILUSTRATIF STUDI KASUS — BUKAN BUKTI GEOSPASIAL RESMI]',
};

export const ADVOCACY_STEPS: AdvocacyStepItem[] = [
  {
    number: '01',
    title: 'VALIDASI PRIMER',
    subtitle: 'Inspeksi Dokumen Sumber Asli',
    description:
      'Unduh dan verifikasi dokumen primer, data telemetri satelit GeoJSON, serta lembar DIPA dengan hash SHA-256 untuk memastikan keaslian arsip tanpa modifikasi pihak ketiga.',
    actions: [
      {
        label: 'UNDUH DATA SPASIAL (.GEOJSON)',
        actionKey: 'download_spatial',
        type: 'modal',
      },
      {
        label: 'UNDUH PETIKAN DIPA (.PDF)',
        actionKey: 'download_dipa',
        type: 'modal',
      },
      {
        label: 'CEK MERKLE ROOT SHA-256',
        actionKey: 'check_merkle',
        type: 'modal',
      },
    ],
  },
  {
    number: '02',
    title: 'FORMULASI SURAT',
    subtitle: 'Susun Pertanyaan Informasi Publik',
    description:
      'Gunakan draf surat permohonan informasi publik resmi berbasis format standar UU No. 14/2008 yang telah diselaraskan dengan pasal keterbukaan dokumen pengadaan & lingkungan.',
    actions: [
      {
        label: 'DRAF FORMAT PPID KLHK (.TXT)',
        actionKey: 'download_format_klhk',
        type: 'download_txt',
        filename: 'Formulir_Permohonan_Informasi_KLHK.txt',
      },
      {
        label: 'DRAF FORMAT KEMENKEU (.TXT)',
        actionKey: 'download_format_kemenkeu',
        type: 'download_txt',
        filename: 'Formulir_Permohonan_Informasi_Kemenkeu.txt',
      },
      {
        label: 'LIHAT PANDUAN HAK WARGA',
        actionKey: 'view_citizen_rights',
        type: 'modal',
      },
    ],
  },
  {
    number: '03',
    title: 'PENGIRIMAN RESMI',
    subtitle: 'Akses Saluran Resmi Pemerintah',
    description:
      'Kirimkan surat permohonan melalui saluran resmi PPID kementerian terkait atau laporkan ketidaksesuaian administrasi melalui portal pengaduan nasional terpadu.',
    actions: [
      {
        label: 'PPID KEMENTERIAN LHK',
        actionKey: 'portal_klhk',
        type: 'external_link',
        href: 'https://ppid.menlhk.go.id',
      },
      {
        label: 'PPID KEMENTERIAN KEUANGAN',
        actionKey: 'portal_kemenkeu',
        type: 'external_link',
        href: 'https://ppid.kemenkeu.go.id',
      },
      {
        label: 'PORTAL SP4N-LAPOR!',
        actionKey: 'portal_lapor',
        type: 'external_link',
        href: 'https://www.lapor.go.id',
      },
    ],
  },
];

export const NON_AFFILIATION_NOTICE = {
  title: 'PRINSIP NON-AFILIASI & PERLINDUNGAN HAK PRIVASI WARGA',
  body:
    'Membuka saluran luar tidak berarti pengaduan telah dikirimkan atau dilacak oleh platform ini. BinarCelah adalah repositori jurnalisme data independen. Platform ini tidak bertindak sebagai kuasa hukum, tidak mengumpulkan data pribadi pelapor, dan tidak merekam aktivitas pengguna saat berinteraksi dengan portal resmi pemerintah. Seluruh aksi warga dilakukan atas inisiatif mandiri.',
};

export const ADVOCACY_TEXT_TEMPLATES = {
  klhk: `[CATATAN INTEGRITAS: Dokumen ini adalah bagian dari studi kasus demonstratif BinarCelah untuk evaluasi First Draft dan BUKAN dokumen resmi yang diterbitkan instansi pemerintah.]

FORMULIR PERMOHONAN INFORMASI PUBLIK (UU NO. 14 TAHUN 2008)
Kepada Yth.
Pejabat Pengelola Informasi dan Dokumentasi (PPID)
Kementerian Lingkungan Hidup dan Kehutanan RI
Gedung Manggala Wanabakti, Jakarta Pusat

Dengan hormat,
Berdasarkan hak konstitusional atas informasi publik yang dijamin dalam Pasal 28F UUD 1945 serta ketentuan Pasal 4 ayat (1) dan Pasal 22 ayat (1) Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, saya yang bertanda tangan di bawah ini mengajukan permohonan informasi publik sebagai berikut:

A. RINCIAN INFORMASI YANG DIMOHONKAN:
1. Salinan Dokumen Kontrak Kerja Sama Pengadaan 12 Unit Mesin Pompa Jinjing Pemadam Gambut Bertekanan Tinggi (Alokasi Sub-Pagu DIPA BA 029 TA 2026).
2. Salinan Berita Acara Serah Terima (BAST) Fisik Pengadaan Pompa untuk Penanganan Karhutla Wilayah Kalimantan Tengah.
3. Dokumen SOP dan Evaluasi Penanganan Kebakaran Gambut Bawah Permukaan di Koridor Penyangga TN Tanjung Puting periode Oktober 2026.

B. TUJUAN PENGGUNAAN INFORMASI:
Pengawasan partisipasi publik, penelitian independen transparansi tata kelola kedaruratan karhutla, dan advokasi akuntabilitas sumber daya publik.

C. CARA MEMPEROLEH INFORMASI:
Salinan elektronik (PDF) yang dikirimkan melalui surel pemohon.

Demikian permohonan ini diajukan untuk ditanggapi dalam tenggat 10 (sepuluh) hari kerja sebagaimana diatur dalam Pasal 22 ayat (7) UU No. 14 Tahun 2008.

Hormat saya,
Pemohon Informasi Publik`,

  kemenkeu: `[CATATAN INTEGRITAS: Dokumen ini adalah bagian dari studi kasus demonstratif BinarCelah untuk evaluasi First Draft dan BUKAN dokumen resmi yang diterbitkan instansi pemerintah.]

FORMULIR PERMOHONAN INFORMASI KEUANGAN NEGARA (UU NO. 14 TAHUN 2008)
Kepada Yth.
Pejabat Pengelola Informasi dan Dokumentasi (PPID)
Kementerian Keuangan Republik Indonesia
Jl. Dr. Wahidin Raya No. 1, Jakarta Pusat

Dengan hormat,
Merujuk pada ketentuan UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik serta UU Nomor 17 Tahun 2003 tentang Keuangan Negara, Pemohon mengajukan permohonan keterbukaan informasi publik terkait:

A. INFORMASI PERBENDAHARAAN & BELANJA KEDARURATAN:
1. Rincian Realisasi Pencairan Anggaran DIPA Bagian Anggaran 029 (Akun 537112 - Belanja Modal Kedaruratan) periode Triwulan IV TA 2026 untuk Satker 521890.
2. Salinan Dokumen SP2D Nomor 8912/2026 terkait pembayaran sewa sorti helikopter water bombing di Provinsi Kalimantan Tengah.
3. Rekonsiliasi Hasil Audit Penyerapan Anggaran Pengadaan Sarana Pemadam Api Gambut Regional Kalimantan.

B. DASAR HUKUM:
Pasal 9 dan Pasal 11 UU KIP (Kewajiban Badan Publik menyediakan informasi publik yang berkaitan dengan pengelolaan anggaran negara).

Demikian disampaikan. Mohon tanggapan tertulis sesuai ketentuan perundang-undangan.

Hormat saya,
Pemohon Informasi Publik`,
};

