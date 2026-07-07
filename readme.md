# 30 Days, 30 Projects Challenge 🚀

Selamat datang di repositori tantangan coding 30 hari saya! Repositori ini dibuat sebagai wadah untuk melatih konsistensi, mengasah logika pemrograman, serta memperdalam pemahaman mengenai **HTML5, CSS3, dan Vanilla JavaScript (DOM Manipulation & Asynchronous)** secara mandiri.

Setiap hari, saya akan membangun satu mini-proyek dari dasar (*from scratch*) dengan fokus pada fungsionalitas kode yang bersih dan kenyamanan UI/UX.

---

## 📅 Jurnal & Daftar Proyek

| Hari | Nama Proyek | Teknologi | Status |
| :---: | :--- | :--- | :---: |
| **01** | [Jam Digital & Stopwatch](./day-01-clock-stopwatch/) | HTML, CSS (Glassmorphic), JavaScript | ✅ Selesai |
| **02** | [To-Do List App + Toast Notification](./day-03-todo-list/) | HTML, CSS, JavaScript (Dynamic DOM) | ✅ Selesai |
| **03** | [To-Do List Upgrade (CRUD + LocalStorage)](./day-03-todo-list/) | HTML, CSS, JavaScript (State Persistence) | ✅ Selesai |
| **04** | Aplikasi Catatan Pendek (Notes App) | - | ⏳ Besok |

---

## Detail Proyek yang Telah Selesai

### Hari 01: Jam Digital & Stopwatch
Proyek pertama ini berfokus pada pengelolaan waktu *real-time* dan pembuatan kontrol stopwatch yang aman dari tumpang-tindih interval (*race condition*).
* **Fitur:** Jam lokal riil, stopwatch akurat, *smart padding* angka `0` di bawah nilai 10, dan pencegahan *bug* klik ganda pada tombol start.
* **UI/UX:** Tema *Modern Dark Mode* dengan efek *Neon Glow* (`text-shadow`) dan tombol interaktif yang berubah warna sesuai fungsinya.

### Hari 02: To-Do List App dengan Toast Notification
Proyek kedua ini melatih kemampuan dasar manipulasi elemen secara dinamis langsung dari memori JavaScript ke dalam struktur HTML (DOM).
* **Fitur:** Menambah daftar tugas dinamis, pengaman input kosong, dan fitur klik untuk coret tugas selesai (*toggle class*).
* **Fitur Premium:** **Toast Notification** kustom yang muncul dari pojok kanan atas dengan animasi `slideIn` selama 2 detik sebelum memudar (*fade-out*).

### Hari 03: To-Do List Upgrade (CRUD & LocalStorage)
Mengembangkan proyek Hari 02 menjadi aplikasi CRUD lokal penuh yang tangguh, di mana data tidak lagi hilang saat halaman dimuat ulang.
* **Fitur Utama:** Integrasi `LocalStorage` (`JSON.stringify` & `JSON.parse`) untuk mengunci data tugas, fitur **Hapus Tugas** berbasis indeks array, dan perbaikan *bug scrollbar overflow*.
* **UI/UX Pop-Up Modern:** Mengganti fungsi `prompt()` bawaan browser yang kaku dengan **Modal Pop-Up Glassmorphism Kustom** yang interaktif dengan efek transisi memantul halus saat dibuka.

---

## Cara Menjalankan Proyek di Lokal

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git](https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git)