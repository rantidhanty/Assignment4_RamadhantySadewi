# Restful API CRUD Manajemen Inventory

## Deskripsi
Proyek ini adalah aplikasi Node.js menggunakan Express.js dan Sequelize ORM. Ini menyediakan API RESTful untuk manajemen CRUD inventaris, memungkinkan Anda untuk membuat, membaca, memperbarui, dan menghapus item inventaris. Aplikasi ini dirancang untuk bekerja dengan Navicat untuk manajemen basis data dan Postman untuk pengujian API.

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

