# Restful API CRUD Manajemen Inventory

## Deskripsi
Project Assignment 4 Phincon Academy adalah aplikasi Node.js menggunakan Express.js dan Sequelize ORM. Ini menyediakan API RESTful untuk manajemen CRUD inventarory, memungkinkan Anda untuk membuat, membaca, memperbarui, dan menghapus item inventaris. Aplikasi ini dirancang untuk bekerja dengan Navicat untuk manajemen basis data dan Postman untuk pengujian API.

## Struktur Proyek
```bash
Assignment_4/
├── config/                  # Konfigurasi basis data
│   └── config.json
├── controller/              # Kontroler untuk menangani permintaan
│   ├── delete.js
│   ├── get.js
│   ├── post.js
│   ├── put.js
│   └── softDelete.js
├── migrations/              # File migrasi Sequelize
├── models/                  # Model Sequelize
│   ├── index.js
│   ├── user.js
│   ├── course.js
│   ├── schedule.js
│   ├── usersCourses.js
│   └── coursesSchedules.js
├── routes/                  # Definisi rute untuk API
│   ├── [auth.js]
├── seeders/                 # File seed Sequelize
├── .gitignore               # File git ignore
├── package.json             # Dependensi dan skrip Node.js
├── package-lock.json        # File lock untuk dependensi npm
└── server.js                # File server utama
```

**Instalasi**

Clone repository:
```
git clone https://github.com/rantidhanty/Assignment4_RamadhantySadewi
```

Install dependensi
```
npm install
```

**Penggunaan**

Jalankan migrasi basis data:
```npx sequelize-cli db:migrate```

Jalankan migrasi undo basis data
```npx sequelize-cli db:migrate:undo:all```

Seed basis data:
```npx sequelize-cli db:seed:all```

Mulai server:
```npm start```

Server akan berjalan di http://localhost:5000

**Endpoints**
```
POST /users - Menambahkan pengguna baru
POST /courses - Menambahkan kursus baru
POST /schedules - Menambahkan jadwal baru
POST /usercourses - Menambahkan hubungan pengguna dan kursus
POST /coursesschedules - Menambahkan hubungan kursus dan jadwal

PUT /users/:id - Memperbarui pengguna berdasarkan ID
PUT /courses/:id - Memperbarui kursus berdasarkan ID
PUT /schedules/:id - Memperbarui jadwal berdasarkan ID

DELETE /users/:id - Menghapus pengguna berdasarkan ID
DELETE /courses/:id - Menghapus kursus berdasarkan ID
DELETE /schedules/:id - Menghapus jadwal berdasarkan ID

PATCH /softdeleteuser/:id - Soft delete pengguna berdasarkan ID
PATCH /softdeletecourse/:id - Soft delete kursus berdasarkan ID
PATCH /softdeleteschedule/:id - Soft delete jadwal berdasarkan ID
```

**Teknologi yang Digunakan**
```
Node.js
Express.js
Sequelize ORM
MySQL (via Navicat)
Postman (untuk pengujian API)
```
