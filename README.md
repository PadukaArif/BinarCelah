# BinarCelah

BinarCelah adalah platform penelusuran bukti isu publik yang membantu warga memahami kronologi peristiwa, keterkaitan data, serta celah informasi yang belum terkonfirmasi.

## Teknologi (Tech Stack)

Aplikasi dibangun menggunakan stack frontend:
- **React** (`^19.3.1`)
- **Vite** (`^8.3.5`)
- **TypeScript** (`~7.0.2`)
- **Tailwind CSS v4** (`^4.3.3` via `@tailwindcss/vite`)
- **React Router** (`^7.18.5` via `react-router-dom`)
- **Lucide React** (`^1.65.0`)

## Petunjuk Menjalankan (Getting Started)

### Prasyarat
- Node.js (`v20+` disarankan; diverifikasi pada `v24.22.1`)
- npm (`v10+` disarankan; diverifikasi pada `11.19.1`)
- Git

### Langkah Instalasi dan Menjalankan

1. Clone repositori:
   ```bash
   git clone <repository-url>
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

## Status dan Progres Proyek

- **Status Saat Ini:** Fondasi frontend telah diinisialisasi (Task BC-01).
- **Progres:** Kerangka kerja aplikasi dasar (React + Vite + TypeScript + Tailwind CSS v4 + React Router + Lucide React) telah terpasang, terkonfigurasi, dan terverifikasi berhasil di-build.
- **Halaman Produk & Kasus:** Belum diimplementasikan (akan dikerjakan pada tahap berikutnya).

