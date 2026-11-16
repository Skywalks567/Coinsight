import { Chapter } from './manualChaptersPart1';

export const manualChaptersPart2: Chapter[] = [
  {
    id: 'guide-report-ratio',
    category: 'report',
    categoryLabel: 'Analisis Laporan',
    title: 'Membaca Diagram Belanja & Rasio Tabungan',
    steps: [
      'Buka tab "Laporan" di bilah menu navigasi bawah.',
      'Perhatikan diagram donat untuk melihat persentase kategori belanja yang paling boros.',
      'Cek kartu "Rasio Tabungan" di bagian bawah—pastikan porsi tabunganmu di atas 20% (Zona Sehat).',
    ],
    formula: 'Rasio Tabungan = (Total Tabungan) ÷ (Total Pemasukan) × 100%',
  },
  {
    id: 'guide-excel-export',
    category: 'report',
    categoryLabel: 'Spreadsheet',
    title: 'Mengekspor Laporan Rapi ke Microsoft Excel (.xlsx)',
    steps: [
      'Buka menu "Pengaturan" atau ketuk ikon Excel hijau di halaman Laporan.',
      'Tekan tombol "Ekspor Laporan Excel (.xlsx)".',
      'Berkas resmi 4 sheet (Ringkasan, Pengeluaran, Pemasukan, Tabungan) otomatis disiapkan.',
      'Pilih opsi simpan ke memori HP atau bagikan langsung via WhatsApp/Email ke laptop kerjamu.',
    ],
  },
  {
    id: 'guide-search',
    category: 'transaction',
    categoryLabel: 'Pencarian',
    title: 'Mencari Riwayat Transaksi Lama dalam Sekejap',
    steps: [
      'Ketuk ikon kaca pembesar (Cari) di pojok kanan atas layar Beranda.',
      'Ketik kata kunci (nama toko, barang, atau catatan) pada kolom pencarian.',
      'Gunakan chip filter waktu (Hari ini, 7 Hari, 30 Hari) untuk mempersempit pencarian.',
      'Ketuk hasil pencarian untuk melihat rincian lengkap atau langsung mengubah datanya.',
    ],
  },
  {
    id: 'guide-backup',
    category: 'backup',
    categoryLabel: 'Cadangan & Migrasi',
    title: 'Mencadangkan & Memindahkan Data Saat Ganti HP',
    steps: [
      'Di HP lama: Buka "Pengaturan" ➔ tekan "Ekspor Cadangan JSON (.json)".',
      'Kirim berkas cadangan ke HP barumu via WhatsApp, Telegram, atau Google Drive.',
      'Di HP baru: Buka "Pengaturan" ➔ tekan "Pilih File Cadangan (.json)" dan pilih berkas tersebut.',
      'Seluruh data transaksi, saldo, dan pengaturan langsung pulih dalam 1 detik.',
    ],
    note: 'Aplikasi ini 100% offline (database lokal SQLite di memori HP). Simpan cadangan sebulan sekali.',
  },
  {
    id: 'guide-night-alarm',
    category: 'backup',
    categoryLabel: 'Alarm Pengingat',
    title: 'Menyalakan Alarm Pengingat Malam Otomatis',
    steps: [
      'Buka tab "Pengaturan" dari bilah menu navigasi bawah.',
      'Gulir ke bagian Pengingat & Suara, lalu aktifkan sakelar "Pengingat Malam".',
      'Aplikasi pintar akan mengecek: jika belum ada transaksi dicatat hari ini, alarm akan berbunyi jam 20:00.',
    ],
  },
];
