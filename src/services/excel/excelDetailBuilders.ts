import * as XLSX from 'xlsx-js-style';
import { Expense, Category } from '../../types/expense';
import { formatDateTime } from './excelFormatUtils';
import {
  excelColors, createHeaderStyle, dataStyle, dataStyleCenter,
  dataStyleNumber, totalLabelStyle, totalNumberStyle, applyCellBorders,
} from './excelStyles';

export function buildExpenseWorksheet(expenses: Expense[], categories: Category[]): XLSX.WorkSheet {
  const items = expenses.filter((e) => e.type === 'expense');
  const total = items.reduce((sum, e) => sum + e.amount, 0);
  const aoa: any[][] = [['No', 'Tanggal & Jam', 'Kategori', 'Nominal (Rp)', 'Sumber Dana', 'Catatan']];

  items.forEach((e, idx) => {
    const catName = categories.find((c) => c.id === e.categoryId)?.name || 'Lainnya';
    const sourceLabel = e.source === 'saving'
      ? (e.isSavingLoan ? 'Pinjam Tabungan' : 'Dari Tabungan')
      : 'Kas Harian';
    aoa.push([idx + 1, formatDateTime(e.date), catName, e.amount, sourceLabel, e.note || '-']);
  });
  aoa.push(['', '', 'TOTAL PENGELUARAN', total, '', '']);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{ wch: 6 }, { wch: 20 }, { wch: 24 }, { wch: 18 }, { wch: 20 }, { wch: 32 }];

  const header = createHeaderStyle(excelColors.ROSE);
  for (let c = 0; c < 6; c++) applyCellBorders(ws, 0, c, header);

  items.forEach((_, idx) => {
    const r = idx + 1;
    applyCellBorders(ws, r, 0, dataStyleCenter);
    applyCellBorders(ws, r, 1, dataStyleCenter);
    applyCellBorders(ws, r, 2, dataStyle);
    applyCellBorders(ws, r, 3, dataStyleNumber);
    applyCellBorders(ws, r, 4, dataStyleCenter);
    applyCellBorders(ws, r, 5, dataStyle);
  });

  const lastR = items.length + 1;
  for (let c = 0; c < 6; c++) {
    applyCellBorders(ws, lastR, c, c === 3 ? totalNumberStyle : totalLabelStyle);
  }
  return ws;
}

export function buildIncomeWorksheet(expenses: Expense[], categories: Category[]): XLSX.WorkSheet {
  const items = expenses.filter((e) => e.type === 'income');
  const total = items.reduce((sum, e) => sum + e.amount, 0);
  const aoa: any[][] = [['No', 'Tanggal & Jam', 'Kategori', 'Nominal (Rp)', 'Catatan']];

  items.forEach((e, idx) => {
    const catName = categories.find((c) => c.id === e.categoryId)?.name || 'Pemasukan';
    aoa.push([idx + 1, formatDateTime(e.date), catName, e.amount, e.note || '-']);
  });
  aoa.push(['', '', 'TOTAL PEMASUKAN', total, '']);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{ wch: 6 }, { wch: 20 }, { wch: 24 }, { wch: 18 }, { wch: 32 }];

  const header = createHeaderStyle(excelColors.EMERALD);
  for (let c = 0; c < 5; c++) applyCellBorders(ws, 0, c, header);

  items.forEach((_, idx) => {
    const r = idx + 1;
    applyCellBorders(ws, r, 0, dataStyleCenter);
    applyCellBorders(ws, r, 1, dataStyleCenter);
    applyCellBorders(ws, r, 2, dataStyle);
    applyCellBorders(ws, r, 3, dataStyleNumber);
    applyCellBorders(ws, r, 4, dataStyle);
  });

  const lastR = items.length + 1;
  for (let c = 0; c < 5; c++) {
    applyCellBorders(ws, lastR, c, c === 3 ? totalNumberStyle : totalLabelStyle);
  }
  return ws;
}

export function buildSavingWorksheet(expenses: Expense[]): XLSX.WorkSheet {
  const items = expenses.filter((e) => e.type === 'saving');
  const total = items.reduce((sum, e) => sum + e.amount, 0);
  const aoa: any[][] = [['No', 'Tanggal & Jam', 'Nominal (Rp)', 'Jenis Transaksi', 'Catatan']];

  items.forEach((e, idx) => {
    const typeLabel = e.isLoanRepayment ? 'Pelunasan Pinjaman' : 'Setor Tabungan';
    aoa.push([idx + 1, formatDateTime(e.date), e.amount, typeLabel, e.note || '-']);
  });
  aoa.push(['', 'TOTAL TABUNGAN', total, '', '']);

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{ wch: 6 }, { wch: 20 }, { wch: 18 }, { wch: 24 }, { wch: 32 }];

  const header = createHeaderStyle(excelColors.SKY);
  for (let c = 0; c < 5; c++) applyCellBorders(ws, 0, c, header);

  items.forEach((_, idx) => {
    const r = idx + 1;
    applyCellBorders(ws, r, 0, dataStyleCenter);
    applyCellBorders(ws, r, 1, dataStyleCenter);
    applyCellBorders(ws, r, 2, dataStyleNumber);
    applyCellBorders(ws, r, 3, dataStyleCenter);
    applyCellBorders(ws, r, 4, dataStyle);
  });

  const lastR = items.length + 1;
  for (let c = 0; c < 5; c++) {
    applyCellBorders(ws, lastR, c, c === 2 ? totalNumberStyle : totalLabelStyle);
  }
  return ws;
}
