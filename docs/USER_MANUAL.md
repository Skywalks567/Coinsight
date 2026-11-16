# Panduan Penggunaan Aplikasi (User Manual)
## Expense Tracker — Pengelolaan Keuangan Pribadi Cerdas & Offline-First

---

### Daftar Topik Panduan
1. [Dasar & Pengaturan Anggaran Harian](#1-dasar--pengaturan-anggaran-harian)
2. [Pencatatan Transaksi: Kas Harian vs Tabungan](#2-pencatatan-transaksi-kas-harian-vs-tabungan)
3. [Fitur Pinjam Tabungan & Pelunasan Otomatis](#3-fitur-pinjam-tabungan--pelunasan-otomatis)
4. [Mengoreksi, Menghapus, & Mencari Transaksi](#4-mengoreksi-menghapus--mencari-transaksi)
5. [Evaluasi Laporan & Ekspor Microsoft Excel (.xlsx)](#5-evaluasi-laporan--ekspor-microsoft-excel-xlsx)
6. [Cadangan Data Saat Ganti HP & Alarm Pengingat](#6-cadangan-data-saat-ganti-hp--alarm-pengingat)

---

### 1. Dasar & Pengaturan Anggaran Harian

#### A. Menjaga Batas Anggaran Harian Tetap Hijau
Aplikasi ini menggunakan kalkulasi **Dynamic Daily Pool** untuk mencegah anggaran bulananmu jebol:
$$\text{Jatah Hari Ini} = \frac{\text{Sisa Saldo Kas}}{\text{Sisa Hari Bulan Ini}}$$

**Langkah-Langkah Praktis:**
1. **Periksa Kartu Jatah:** Setiap pagi atau sebelum memesan makanan, lihat kartu *Jatah Hari Ini* di Beranda.
2. **Belanja Sesuai Batas:** Selalu pilih Sumber *Kas Harian* saat berbelanja rutin.
3. **Akumulasi Otomatis:** Jika jatah belanjamu hari ini bersisa (misal sisa Rp 40.000), sisa tersebut otomatis mengalir menambah jatah belanjamu esok hari.
4. **Indikator Warna:**
   * **Hijau:** Belanja masih jauh di bawah batas aman.
   * **Kuning:** Waspada, pengeluaran mendekati batas jatah harian.
   * **Merah:** Melebihi jatah harian; jatah hari berikutnya otomatis dikurangi secara adil agar budget bulanan tetap aman.

#### B. Mengatur Batas Anggaran Bulanan
1. Buka tab **Pengaturan** (ikon gerigi).
2. Pada bagian **Batas Budget Bulanan**, masukkan nominal pengeluaran operasional targetmu (misal: `Rp 3.000.000`).
3. Tekan **Simpan**.

---

### 2. Pencatatan Transaksi: Kas Harian vs Tabungan

#### A. Memisahkan Kas Operasional vs Simpanan Tabungan
1. Tekan tombol tambah besar **(+)** di tengah bilah navigasi bawah.
2. Tentukan pos transaksi:
   * **Kas Harian:** Untuk belanja makan, bensin, pulsa, dan tagihan rutin. Transaksi ini memotong jatah belanja harianmu.
   * **Tabungan:** Untuk menyisihkan dana darurat atau simpanan masa depan. Transaksi ini tidak memotong jatah makan harianmu.

#### B. Mencatat Transaksi Cepat dengan Catatan Rinci
1. Tekan tombol **(+)** di navbar bawah.
2. Pilih tab tipe transaksi: **Pengeluaran** (Merah), **Pemasukan** (Hijau), atau **Tabungan** (Biru).
3. Gunakan tombol nominal cepat (`+10k`, `+20k`, `+50k`, `+100k`) untuk mempercepat pengisian.
4. Tulis rincian di kotak catatan multi-baris (misal: *"Nasi Padang + Es Teh"*).
5. Tekan tombol **Simpan Transaksi**.

---

### 3. Fitur Pinjam Tabungan & Pelunasan Otomatis

#### A. Meminjam Tabungan Saat Kondisi Darurat
Jika ada kebutuhan mendadak besar (misal servis laptop atau ban bocor) dan kamu tidak ingin jatah makan harianmu langsung merah padam:
1. Buka form **(+)**, pilih tab **Pengeluaran**.
2. Pada Sumber Dana, pilih **Tabungan**.
3. Centang opsi **"Pinjam Tabungan (Tandai sebagai pinjaman)"**.
4. Masukkan nominal dan tekan **Simpan Pengeluaran**.
5. Kartu Beranda akan memunculkan lencana: `📌 Pinjam Tabungan: Rp X` disertai tombol **`[Kembalikan]`**.

#### B. Melunasi Pinjaman Tabungan secara Otomatis
1. Saat gajian atau memiliki dana pengganti, tekan tombol **`[Kembalikan]`** pada kartu Beranda.
2. Form pencatatan otomatis terbuka dengan mode **Tabungan**, nominal otomatis terisi sejumlah sisa pinjaman, dan opsi **"Ini pelunasan pinjaman tabungan"** otomatis aktif.
3. Tekan **Simpan Transaksi**. Sisa pinjaman langsung berkurang atau lunas (Rp 0), dan lencana hutang otomatis hilang.

---

### 4. Mengoreksi, Menghapus, & Mencari Transaksi

#### A. Mengubah (Edit) Transaksi
1. Buka tab **Riwayat** atau halaman **Laporan**.
2. Ketuk tombol titik tiga `[•••]` di sisi kanan baris transaksi yang ingin diperbaiki.
3. Pilih menu **Ubah**.
4. Koreksi nominal, kategori, atau catatan belanja.
5. Tekan **Simpan Perubahan**. Jam dan tanggal asli transaksi tetap dipertahankan agar catatan historis tidak berubah.

#### B. Menghapus Transaksi
1. Ketuk tombol titik tiga `[•••]` pada baris transaksi.
2. Pilih menu **Hapus**, lalu konfirmasi. Transaksi akan terhapus dan saldo kembali terkalkulasi otomatis.

#### C. Mencari Transaksi Lama (Quick Search)
1. Ketuk ikon kaca pembesar di pojok kanan atas Beranda.
2. Ketik nama toko, barang, atau catatan belanja.
3. Gunakan filter waktu (*Hari Ini*, *7 Hari*, *30 Hari*) untuk mempersempit hasil.
4. Ketuk baris hasil pencarian untuk melihat detail atau langsung mengeditnya.

---

### 5. Evaluasi Laporan & Ekspor Microsoft Excel (.xlsx)

#### A. Membaca Laporan & Rasio Tabungan Sehat
1. Buka tab **Laporan** di bilah menu navigasi bawah.
2. Periksa diagram donat visual untuk melihat porsi pengeluaran per kategori.
3. Gulir ke bawah ke kartu **Rasio Tabungan**:
   $$\text{Rasio Tabungan} = \frac{\text{Total Tabungan}}{\text{Total Pemasukan}} \times 100\%$$
   * Pastikan rasio tabunganmu berada di atas **20%** untuk kondisi finansial yang prima.

#### B. Mengekspor Laporan Resmi Excel (.xlsx) Multi-Sheet
1. Buka menu **Pengaturan** atau ketuk ikon Excel hijau di halaman Laporan.
2. Tekan tombol **Ekspor Laporan Excel (.xlsx)**.
3. Aplikasi akan mengompilasi berkas `.xlsx` resmi dengan 4 sheet terpisah:
   * **Sheet 1 (Ringkasan):** Angka total saldo, banner periode, dan tabel distribusi kategori siap dibuatkan pie chart.
   * **Sheet 2 (Pengeluaran):** Daftar seluruh pengeluaran berurutan No 1, 2, 3 dengan baris total di bawah.
   * **Sheet 3 (Pemasukan):** Daftar riwayat uang masuk lengkap dengan sumber dana.
   * **Sheet 4 (Tabungan):** Seluruh mutasi simpanan dan pelunasan pinjaman.
4. Simpan ke ponsel atau bagikan via WhatsApp/Email ke komputer kerjamu.

---

### 6. Cadangan Data Saat Ganti HP & Alarm Pengingat

#### A. Mencadangkan & Memindahkan Data ke HP Baru (100% Offline)
Aplikasi ini menyimpan basis data di SQLite lokal ponsel tanpa mengunggah ke internet atau cloud.
1. **Di HP Lama:** Buka **Pengaturan** ➔ tekan **Ekspor Cadangan JSON (.json)**.
2. **Kirim Berkas:** Kirim file `.json` tersebut ke HP baru melalui WhatsApp, Google Drive, atau Bluetooth.
3. **Di HP Baru:** Buka **Pengaturan** ➔ tekan **Pilih File Cadangan (.json)** ➔ pilih file cadanganmu. Seluruh saldo, riwayat, dan pengaturan akan pulih dalam 1 detik.

#### B. Mengaktifkan Alarm Pengingat Malam Otomatis
1. Buka menu **Pengaturan** dari bilah navigasi bawah.
2. Aktifkan sakelar **Pengingat Malam** (jadwal default: pukul 20:00).
3. **Fitur Cerdas:** Alarm hanya akan berbunyi jika kamu belum mencatat pengeluaran sama sekali sepanjang hari. Jika sudah mencatat, alarm otomatis tenang dan tidak mengganggu.
