# UTS PWL — Sistem Manajemen Data Mahasiswa

## Deskripsi
Sistem Manajemen Data Mahasiswa merupakan aplikasi *web* berbasis *full-stack* yang dirancang untuk mengelola data mahasiswa secara digital. Sistem ini menyediakan fitur CRUD (*Create, Read, Update, Delete*) lengkap, mulai dari menambah data mahasiswa baru, menampilkan daftar mahasiswa, mengubah data yang sudah ada, hingga menghapus data. Aplikasi ini dibangun menggunakan *runtime* Bun dengan *framework* Hono, Prisma ORM sebagai penghubung ke database MySQL, serta EJS sebagai *template engine* untuk tampilan antarmuka yang responsif berbasis Tailwind CSS.

## Teknologi
* Bun (JavaScript Runtime)
* Hono (Web Framework)
* TypeScript / JavaScript (ESM)
* Prisma ORM (Database ORM)
* MySQL (Database)
* EJS (Template Engine)
* Tailwind CSS 3 (CSS Framework)

## Struktur Folder
    UTS-PWL/
    │── prisma/
    │   ├── migrations/
    │   └── schema.prisma
    │── src/
    │   ├── config/
    │   │   ├── prisma.js
    │   │   └── viewEngine.js
    │   ├── controllers/
    │   │   ├── homeController.js
    │   │   └── mahasiswaController.js
    │   ├── generated/
    │   │   └── prisma/
    │   ├── models/
    │   │   └── mahasiswaModel.js
    │   ├── public/
    │   │   └── css/
    │   ├── routes/
    │   │   └── web.js
    │   └── views/
    │       ├── mahasiswa/
    │       │   ├── create.ejs
    │       │   ├── edit.ejs
    │       │   └── index.ejs
    │       ├── home.ejs
    │       └── layout.ejs
    │── index.ts
    │── package.json
    │── prisma.config.ts
    │── tailwind.config.js
    │── tsconfig.json
    │── bun.lock
    └── README.md

## Cara Menjalankan
1. **Persiapan Lingkungan:** Pastikan komputer Anda sudah terinstal **Bun** dan **MySQL**.
   ```bash
   # Install Bun (jika belum)
   curl -fsSL https://bun.sh/install | bash
   ```
2. **Unduh Repositori:** *Clone* repositori ini ke komputer Anda.
   ```bash
   git clone <url-repositori>
   cd uts-pwl
   ```
3. **Instalasi Dependensi:** Jalankan perintah berikut di dalam folder proyek:
   ```bash
   bun install
   ```
4. **Konfigurasi Database:**
   * Buat database baru di MySQL, misalnya `db_mahasiswa`.
   * Buat file `.env` di root folder dan isi konfigurasi berikut:
     ```env
     DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/db_mahasiswa"
     ```
5. **Migrasi Database:** Jalankan migrasi Prisma untuk membuat tabel secara otomatis:
   ```bash
   bunx prisma migrate dev
   ```
6. **Generate Prisma Client:**
   ```bash
   bunx prisma generate
   ```
7. **Jalankan Aplikasi:**
   ```bash
   bun run src/app.js
   ```
8. **Akses:** Buka *browser* dan kunjungi `http://localhost:3000`.

---
Dikembangkan oleh: @franzxml
