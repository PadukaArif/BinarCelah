# BinarCelah

BinarCelah adalah platform penelusuran bukti isu publik terintegrasi bagi warga negara Indonesia. Platform ini menghubungkan peristiwa publik, respon kebijakan pemerintah, alokasi anggaran negara, pengamatan lingkungan independen, serta celah informasi yang belum terkonfirmasi dalam satu alur pembuktian terbuka tanpa interpretasi spekulatif.

Prinsip Utama: **Narasi terstruktur. Bukti selalu dapat ditelusuri. Ketidakpastian tidak disembunyikan.**

---

## Arsitektur Rute Aplikasi

Aplikasi dibangun sebagai *Single Page Application* (SPA) berbasis React Router dengan empat rute terintegrasi:

| Rute URL | Tampilan / Peran | Deskripsi |
|---|---|---|
| `/` | **Beranda & Temukan Isu** | Pengenalan platform, metrik metodologi, kartu sorotan kasus demonstratif (#BC-2026-08), metodologi 4-langkah, katalog ledger arsip, dan prototipe dropzone aman. |
| `/kasus/:caseId/ringkasan` | **Tab 1: Ringkasan & Narasi** | Rekonstruksi alur peristiwa faktual, pembedaan sensor optik vs termal, matriks triangulasi 3-vektor (satelit, regulasi, fiskal), ikhtisar celah, dan peta cakupan spasial ilustratif. |
| `/kasus/:caseId/kronologi` | **Tab 2: Kronologi & Jejak Bukti** | Penafian non-pidana permanen, filter linimasa reaktif, feed simpul kronologis dengan 4 atribut tanggal protokol, audit triangulasi pengadaan pompa, dan widget pemantauan KIP demonstratif. |
| `/kasus/:caseId/celah` | **Tab 3: Celah Akuntabilitas & Advokasi** | Penyaring kategori celah, kartu komparasi fakta empiris vs kesenjangan data, peta hotspot termal ilustratif, alur advokasi 3-langkah, serta unduhan draf permohonan informasi UU KIP (.txt). |

*Catatan Navigasi:* Mengakses `/kasus/:caseId` secara otomatis mengarahkan ke tab ringkasan default (`/kasus/:caseId/ringkasan`).

---

## Status dan Progres Proyek (First Draft)

Implementasi antarmuka untuk cakupan *First Draft* telah selesai dikerjakan secara utuh:

- **BC-05.1 (Beranda / Temukan Isu):** SELESAI — Implementasi landing page editorial investigatif (`Container.pdf`).
- **BC-05.2 (Ringkasan Kasus & Triangulasi):** SELESAI — Implementasi shell ruang kerja kasus dan tab ringkasan narasi (`Container-1.pdf`).
- **BC-05.3 (Kronologi & Jejak Bukti):** SELESAI — Implementasi linimasa temporal, audit jeda pengadaan pompa, dan widget pelacak PPID (`Container-2.pdf`).
- **BC-05.4 (Celah Akuntabilitas & Advokasi):** SELESAI — Implementasi komparasi kesenjangan data publik, hotspot spasial, dan pusat unduhan draf surat UU KIP (`Container-3.pdf`).
- **Integritas Build:** Berhasil dikompilasi dengan `tsc -b && vite build` (0 error, 0 warning).

---

## Batasan Prototipe & Integritas Bukti

Untuk menjaga kepatuhan etika data dan kejujuran akademis/publik, BinarCelah menerapkan batasan integritas bukti yang ketat:

1. **Parameter Skenario Demonstratif:** Seluruh data kasus yang ditampilkan (`#BC-2026-08` - Koridor Penyangga Tanjung Puting) merupakan parameter studi kasus demonstratif yang dirancang untuk menguji alur keterbukaan informasi publik, bukan vonis pidana.
2. **Asas Praduga Tak Bersalah:** Celah akuntabilitas publik mencerminkan ketiadaan dokumen dalam repositori terbuka yang dapat diakses warga, bukan penetapan kesalahan hukum. Seluruh subjek dilindungi oleh asas praduga tak bersalah (Pasal 8 ayat (1) UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman). Hak warga untuk mengakses informasi publik dijamin oleh UU No. 14 Tahun 2008.
3. **Peta Vektor Ilustratif:** Seluruh tampilan peta adalah grafik vektor ilustratif untuk orientasi konteks wilayah studi kasus, bukan citra geospasial resmi berstandar Badan Informasi Geospasial (BIG). Platform menolak memfabrikasi poligon GIS buatan.
4. **Prototipe Saluran Pengaduan Non-Operasional:** Komponen dropzone berkas anonim merupakan simulasi alur antarmuka tanpa backend penyimpanan berkas atau enkripsi PGP aktif. Warga diarahkan ke saluran resmi pemerintah (SP4N LAPOR!, LPSK, KPK).
5. **Verifikasi Hash Klien:** Nilai digest kriptografis SHA-256 yang ditampilkan memverifikasi keutuhan payload statis aplikasi di sisi peramban pengguna, bukan sertifikat tanda tangan elektronik (TTE) resmi kementerian atau institusi BSrE.
6. **Unduhan Berkas Advokasi:** Format berkas advokasi disediakan dalam bentuk dokumen teks standar (`.txt`) transparan dengan catatan integritas wajib di baris pertama, tanpa menjanjikan berkas biner instansi pemerintah palsu.

---

## Teknologi (Tech Stack)

Aplikasi dibangun menggunakan stack frontend murni (tanpa backend kustom pada tahap First Draft):
- **React** (`^19.3.1`) — Antarmuka komponen deklaratif
- **Vite** (`^8.3.5`) — Build tool dan bundler frontend modern
- **TypeScript** (`~7.0.2`) — Pengetikan statis ketat untuk data bukti dan model kasus
- **Tailwind CSS v4** (`^4.3.3` via `@tailwindcss/vite`) — Sistem token visual dan desain editorial responsif
- **React Router** (`^7.18.5` via `react-router-dom`) — Arsitektur rute Single Page Application
- **Lucide React** (`^1.65.0`) — Ikonografi semantik

---

## Petunjuk Menjalankan (Getting Started)

### Prasyarat
- Node.js (`v20+` disarankan; diverifikasi pada `v24.22.1`)
- npm (`v10+` disarankan; diverifikasi pada `11.19.1`)
- Git

### Langkah Instalasi dan Menjalankan

1. Clone repositori:
   ```bash
   git clone https://github.com/PadukaArif/BinarCelah.git
   cd BinarCelah
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan secara default di `http://localhost:5173`.

4. Untuk membuat build produksi:
   ```bash
   npm run build
   ```

5. Untuk melihat preview build produksi:
   ```bash
   npm run preview
   ```
