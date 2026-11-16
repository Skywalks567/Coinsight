import * as XLSX from 'xlsx-js-style';
import { Expense, Category } from '../../types/expense';
import {
  excelColors, createBannerStyle, createHeaderStyle,
  dataStyle, dataStyleCenter, dataStyleNumber,
  totalLabelStyle, totalNumberStyle, applyCellBorders,
} from './excelStyles';

export function buildSummaryWorksheet(expenses: Expense[], categories: Category[]): XLSX.WorkSheet {
  const expenseItems = expenses.filter((e) => e.type === 'expense');
  const totalExpense = expenseItems.reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = expenses.filter((e) => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const totalSaving = expenses.filter((e) => e.type === 'saving').reduce((sum, e) => sum + e.amount, 0);
  const netCash = totalIncome - totalExpense - totalSaving;

  const catMap: Record<string, number> = {};
  for (const item of expenseItems) {
    catMap[item.categoryId] = (catMap[item.categoryId] || 0) + item.amount;
  }

  const catRanked = Object.entries(catMap)
    .map(([catId, amount]) => {
      const cat = categories.find((c) => c.id === catId);
      const pct = totalExpense > 0 ? Math.round((amount / totalExpense) * 100) : 0;
      return { name: cat ? cat.name : 'Lainnya', amount, pct };
    })
    .sort((a, b) => b.amount - a.amount);

  const aoa: any[][] = [
    ['RINGKASAN KEUANGAN UTAMA', '', '', ''],
    ['Total Pemasukan', totalIncome, '', ''],
    ['Total Pengeluaran', totalExpense, '', ''],
    ['Total Tabungan', totalSaving, '', ''],
    ['Sisa Saldo Kas Bersih', netCash, '', ''],
    [],
    ['DISTRIBUSI PENGELUARAN PER KATEGORI (CHART READY)', '', '', ''],
    ['No', 'Kategori Pengeluaran', 'Total Nominal (Rp)', 'Porsi (%)'],
  ];

  catRanked.forEach((it, idx) => {
    aoa.push([idx + 1, it.name, it.amount, `${it.pct}%`]);
  });
  if (catRanked.length > 0) {
    aoa.push(['', 'TOTAL PENGELUARAN', totalExpense, '100%']);
  }

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{ wch: 6 }, { wch: 28 }, { wch: 22 }, { wch: 14 }];
  ws['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },
    { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } },
  ];

  const banner = createBannerStyle();
  const header = createHeaderStyle(excelColors.INDIGO);

  [0, 1, 2, 3].forEach((c) => applyCellBorders(ws, 0, c, banner));
  [1, 2, 3, 4].forEach((r) => {
    applyCellBorders(ws, r, 0, dataStyle);
    applyCellBorders(ws, r, 1, dataStyleNumber);
  });
  [0, 1, 2, 3].forEach((c) => applyCellBorders(ws, 6, c, banner));
  [0, 1, 2, 3].forEach((c) => applyCellBorders(ws, 7, c, header));

  catRanked.forEach((_, idx) => {
    const r = 8 + idx;
    applyCellBorders(ws, r, 0, dataStyleCenter);
    applyCellBorders(ws, r, 1, dataStyle);
    applyCellBorders(ws, r, 2, dataStyleNumber);
    applyCellBorders(ws, r, 3, dataStyleCenter);
  });

  if (catRanked.length > 0) {
    const lastR = 8 + catRanked.length;
    applyCellBorders(ws, lastR, 0, totalLabelStyle);
    applyCellBorders(ws, lastR, 1, totalLabelStyle);
    applyCellBorders(ws, lastR, 2, totalNumberStyle);
    applyCellBorders(ws, lastR, 3, totalLabelStyle);
  }

  return ws;
}
