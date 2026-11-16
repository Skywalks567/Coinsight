import * as XLSX from 'xlsx-js-style';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import { Expense, Category } from '../types/expense';
import { buildSummaryWorksheet } from './excel/excelSummaryBuilder';
import {
  buildExpenseWorksheet,
  buildIncomeWorksheet,
  buildSavingWorksheet,
} from './excel/excelDetailBuilders';
import { getProfessionalFileName } from './excel/excelFormatUtils';

export async function exportTransactionsToExcel(
  expenses: Expense[],
  categories: Category[],
  periodLabel: string = 'semua'
): Promise<boolean> {
  if (!expenses.length) return false;

  const wb = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, buildSummaryWorksheet(expenses, categories), 'Ringkasan');
  XLSX.utils.book_append_sheet(wb, buildExpenseWorksheet(expenses, categories), 'Pengeluaran');
  XLSX.utils.book_append_sheet(wb, buildIncomeWorksheet(expenses, categories), 'Pemasukan');
  XLSX.utils.book_append_sheet(wb, buildSavingWorksheet(expenses), 'Tabungan');

  const fileName = getProfessionalFileName(periodLabel);

  if (Platform.OS === 'web') {
    XLSX.writeFile(wb, fileName);
    return true;
  }

  try {
    const b64 = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });
    const cacheDir = FileSystem.cacheDirectory || FileSystem.documentDirectory || '';
    const fileUri = `${cacheDir}${fileName}`;

    await FileSystem.writeAsStringAsync(fileUri, b64, {
      encoding: FileSystem.EncodingType.Base64,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri, {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        dialogTitle: 'Buka atau Bagikan Laporan Excel (.xlsx)',
        UTI: 'com.microsoft.excel.xlsx',
      });
      return true;
    }
    return false;
  } catch (err) {
    console.error('Error exporting Excel XLSX:', err);
    return false;
  }
}
