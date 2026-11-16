export type CategoryId = 'all' | 'budget' | 'transaction' | 'loan' | 'report' | 'backup';

export type Chapter = {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  steps: string[];
  formula?: string;
  note?: string;
};

export const manualChaptersPart1: Chapter[] = [
  {
    id: 'guide-daily-budget',
    category: 'budget',
    categoryLabel: 'Anggaran Harian',
    title: 'Menjaga Batas Anggaran Harian Tetap Hijau',
    steps: [
      'Periksa kartu "Jatah Hari Ini" di Beranda setiap pagi sebelum berbelanja.',
      'Saat mencatat belanja rutin atau makan, selalu pilih Sumber: "Kas Harian".',
      'Jika jatah bersisa, biarkan saja—sisa dana otomatis mengalir menambah jatah belanjamu esok hari.',
    ],
    formula: 'Jatah Hari Ini = (Sisa Anggaran Kas) ÷ (Sisa Hari Bulan Ini)',
    note: 'Indikator: Hijau (Aman), Kuning (Waspada mendekati batas), Merah (Melebihi batas jatah).',
  },
  {
    id: 'guide-cash-vs-savings',
    category: 'budget',
    categoryLabel: 'Alur Kas',
    title: 'Memisahkan Kas Operasional vs Simpanan Tabungan',
    steps: [
      'Buka form (+) di tengah bilah navigasi bawah.',
      'Pilih Sumber "Kas Harian" untuk belanja makan, bensin, dan tagihan rutin sehari-hari.',
      'Pilih Sumber "Tabungan" saat menyisihkan uang dingin atau dana darurat jangka panjang.',
    ],
    note: 'Kas Harian otomatis berjalan lintas bulan (rollover), sedangkan Tabungan bersifat simpanan kumulatif.',
  },
  {
    id: 'guide-add-transaction',
    category: 'transaction',
    categoryLabel: 'Pencatatan',
    title: 'Mencatat Pengeluaran & Pemasukan dengan Rinci',
    steps: [
      'Tekan tombol (+) di tengah bilah navigasi bawah.',
      'Pilih jenis transaksi (Pengeluaran, Pemasukan, atau Simpanan Tabungan).',
      'Gunakan tombol nominal cepat (+10k, +20k, +50k) atau ketik nominal belanja di kolom input.',
      'Tulis rincian di kotak catatan multi-baris (misal: "Nasi Padang + Es Teh"), lalu tekan "Simpan Transaksi".',
    ],
  },
  {
    id: 'guide-edit-delete',
    category: 'transaction',
    categoryLabel: 'Manajemen Transaksi',
    title: 'Mengoreksi atau Menghapus Transaksi yang Salah',
    steps: [
      'Buka tab "Riwayat" atau halaman "Laporan".',
      'Ketuk tombol titik tiga [•••] pada baris transaksi yang ingin dikoreksi.',
      'Pilih menu "Ubah" untuk mengedit nominal/catatan tanpa merusak jam dan tanggal asli transaksi.',
      'Pilih menu "Hapus" jika transaksi ingin dibatalkan secara permanen dari pembukuan.',
    ],
  },
  {
    id: 'guide-borrow-savings',
    category: 'loan',
    categoryLabel: 'Pinjam Tabungan',
    title: 'Meminjam & Melunasi Pinjaman Tabungan',
    steps: [
      'Saat ada pengeluaran mendadak besar, buka form (+), pilih Sumber: "Tabungan", lalu centang "Pinjam Tabungan".',
      'Pantau saldo pinjaman di kartu Beranda berlabel: "📌 Pinjam Tabungan: Rp X".',
      'Saat ada dana pengganti, tekan tombol [Kembalikan] di kartu Beranda.',
      'Form pelunasan akan terisi otomatis sejumlah sisa pinjaman, lalu tekan "Simpan Transaksi".',
    ],
  },
];
