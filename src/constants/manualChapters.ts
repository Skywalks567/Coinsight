import { CategoryId, Chapter, manualChaptersPart1 } from './manualChaptersPart1';
import { manualChaptersPart2 } from './manualChaptersPart2';

export type { CategoryId, Chapter };

export const allManualChapters: Chapter[] = [
  ...manualChaptersPart1,
  ...manualChaptersPart2,
];

export const manualCategories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'Semua' },
  { id: 'budget', label: 'Anggaran' },
  { id: 'transaction', label: 'Transaksi' },
  { id: 'loan', label: 'Pinjaman' },
  { id: 'report', label: 'Laporan & Excel' },
  { id: 'backup', label: 'Cadangan' },
];
