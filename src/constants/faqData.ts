export type FaqCategory = 'all' | 'budget' | 'saving' | 'alarm' | 'data' | 'excel';

export type FaqItem = {
  id: string;
  category: FaqCategory;
  tag: string;
  question: string;
  answer: string;
  tip?: string;
};

export const faqCategories: { key: FaqCategory; label: string }[] = [
  { key: 'all', label: 'Semua' },
  { key: 'budget', label: 'Batas Harian' },
  { key: 'saving', label: 'Tabungan' },
  { key: 'alarm', label: 'Alarm' },
  { key: 'data', label: 'Cadangan Data' },
  { key: 'excel', label: 'Ekspor Excel' },
];

export const faqList: FaqItem[] = [
  {
    id: 'f1',
    category: 'budget',
    tag: 'Batas Harian',
    question: 'Bagaimana cara kerja batas harian cerdas?',
    answer: 'Aplikasi membagi sisa saldo anggaran bulanan dengan jumlah sisa hari hingga akhir bulan secara dinamis.',
    tip: 'Jika hari ini hemat, sisa anggarannya otomatis menambah jatah belanjamu di hari esok!',
  },
  {
    id: 'f2',
    category: 'budget',
    tag: 'Batas Harian',
    question: 'Apa arti warna indikator Aman, Waspada, dan Berlebih?',
    answer: 'Hijau (Aman): belanja di bawah 85% batas harian. Kuning (Waspada): belanja 85%-99% jatah hari ini. Merah (Berlebih): belanja melampaui batas jatah hari ini.',
  },
  {
    id: 'f3',
    category: 'saving',
    tag: 'Tabungan',
    question: 'Kapan harus memilih Kas Harian vs Tabungan?',
    answer: 'Pilih Kas Harian untuk belanja kebutuhan rutin (makan, bensin). Pilih Tabungan hanya untuk belanja darurat/besar dari simpanan agar jatah harianmu tidak terpotong.',
  },
  {
    id: 'f4',
    category: 'saving',
    tag: 'Tabungan',
    question: 'Apa itu fitur Pinjam Tabungan & cara melunasinya?',
    answer: 'Tandai pengeluaran tabungan dengan "Pinjam Tabungan" untuk mencatatnya sebagai hutang pribadi. Lencana hutang akan muncul di kartu Beranda.',
    tip: 'Tekan tombol [Kembalikan] di kartu Beranda saat ada uang lebih untuk melunasi pinjaman!',
  },
  {
    id: 'f5',
    category: 'alarm',
    tag: 'Alarm',
    question: 'Mengapa alarm malam tidak berbunyi setiap hari?',
    answer: 'Alarm bersifat Smart Notification: hanya berbunyi jika kamu belum mencatat satu pun transaksi hari ini. Jika sudah mencatat, alarm otomatis tenang.',
  },
  {
    id: 'f6',
    category: 'data',
    tag: 'Cadangan Data',
    question: 'Apakah data keuangan saya aman?',
    answer: '100% Aman! Seluruh catatan tersimpan secara lokal di memori HP menggunakan SQLite offline tanpa server pihak ketiga.',
  },
  {
    id: 'f7',
    category: 'data',
    tag: 'Cadangan Data',
    question: 'Bagaimana cara memindahkan data saat ganti HP?',
    answer: 'Ekspor file .json di tab Pengaturan HP lama, kirim ke HP baru, lalu pilih "Pilih File Cadangan (.json)" di HP baru untuk memulihkan seluruh data.',
  },
  {
    id: 'f8',
    category: 'excel',
    tag: 'Ekspor Excel',
    question: 'Bagaimana format file laporan Excel (.xlsx)?',
    answer: 'Laporan diekspor dalam 4 sheet resmi: Ringkasan, Pengeluaran, Pemasukan, dan Tabungan dengan garis tabel dan warna tematik yang rapi.',
  },
];

