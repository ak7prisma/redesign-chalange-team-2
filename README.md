# Redesign Team 2 — Project Run Guide

Panduan singkat untuk menjalankan proyek ini (frontend, backend, dan database lokal).

## Prasyarat
- Node.js (disarankan v18+)
- npm atau pnpm
- Git (opsional)

## Struktur singkat
- `backend/` — Express + Prisma (SQLite)
- `frontend/` — React + Vite + Tailwind
- `db/dev.db` — file SQLite development (database sudah tersedia)

## Database (dev.db)
Database contoh berada di `db/dev.db` pada root repository. Ada dua opsi untuk membuat backend menggunakan file ini:

1) Copy (cepat dan disarankan):

PowerShell:

```powershell
Copy-Item db\dev.db backend\prisma\dev.db -Force
```

macOS / Linux:

```bash
cp db/dev.db backend/prisma/dev.db
```

2) Alternatif (ubah Prisma schema): edit `backend/prisma/schema.prisma` dan ubah `url` datasource menjadi `file:../../db/dev.db` atau gunakan `DATABASE_URL` environment variable.

Catatan: beberapa skrip Prisma (mis. `npm run db:seed`) mengasumsikan file berada di `backend/prisma/dev.db`.

## Menjalankan Backend
1. Buka terminal, masuk ke folder backend:

```bash
cd backend
npm install
```

2. Jika belum menyalin `dev.db`, jalankan perintah copy seperti di atas.

3. Generate Prisma client (jika perlu):

```bash
npx prisma generate
```

4. (Opsional) Jalankan seed data:

```bash
npm run db:seed
```

5. Jalankan server (development):

```bash
npm run dev
```

Server default akan berjalan di `http://localhost:3000` (atau sesuai `PORT` environment variable).

Contoh file environment (`backend/.env`) contoh:

```
PORT=3000
CORS_ORIGINS=http://localhost:5173,http://localhost:4173
```

## Menjalankan Frontend
1. Buka terminal baru, masuk ke folder frontend:

```bash
cd frontend
npm install
```

2. (Opsional) Buat file `.env.local` untuk konfigurasi Vite (jika ingin menghubungkan ke backend):

```
VITE_ENABLE_API=true
VITE_API_URL=http://localhost:3000/api
```

3. Jalankan development server:

```bash
npm run dev
```

Frontend default akan tersedia di `http://localhost:5173`.

## Skrip yang berguna
- Backend:
	- `npm run dev` — jalankan server dengan `nodemon`
	- `npm run start` — jalankan `node index.js`
	- `npm run db:seed` — jalankan seed (node prisma/seed.js)
	- `npm run db:migrate` — jalankan prisma migrate dev

- Frontend:
	- `npm run dev` — jalankan Vite dev server
	- `npm run build` — build produksi
	- `npm run preview` — preview build produksi

## Troubleshooting singkat
- Jika backend tidak menemukan `dev.db`, pastikan file ada di `backend/prisma/dev.db` atau sesuaikan `schema.prisma`.
- Jika API tidak aktif di frontend, pastikan `VITE_ENABLE_API` di-set dan `VITE_API_URL` menunjuk ke `http://localhost:3000/api`.
- Jika Prisma memberi peringatan, jalankan `npx prisma generate` lalu coba lagi.

Jika kamu mau, saya bisa:
- Menyalin `db/dev.db` ke `backend/prisma/dev.db` otomatis sekarang.
- Atau mengubah `schema.prisma` agar menggunakan `../../db/dev.db`.

--
Panduan singkat dibuat otomatis. Beri tahu langkah mana yang mau saya jalankan selanjutnya.
