import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system/legacy';
import { Platform } from 'react-native';
import { Expense, Category } from '../types/expense';
import { generateReportPdfHtml } from './pdf/pdfHtmlBuilder';

export async function exportTransactionsToPdf(
  expenses: Expense[],
  categories: Category[],
  monthlyBudget: number,
  budgetMode: 'auto' | 'manual' = 'manual',
  periodLabel: string = 'semua',
  dailyAverage?: number
): Promise<boolean> {
  if (!expenses.length) return false;

  const html = generateReportPdfHtml(
    expenses,
    categories,
    monthlyBudget,
    budgetMode,
    periodLabel,
    dailyAverage
  );

  if (Platform.OS === 'web') {
    await Print.printAsync({ html });
    return true;
  }

  try {
    const { base64 } = await Print.printToFileAsync({ html, base64: true });
    if (!base64) return false;

    const cleanPeriod = periodLabel.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30);
    const fileName = `laporan_keuangan_${cleanPeriod}.pdf`;
    const cacheDir = FileSystem.cacheDirectory || FileSystem.documentDirectory || '';
    const targetUri = `${cacheDir}${fileName}`;

    await FileSystem.writeAsStringAsync(targetUri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(targetUri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Buka atau Bagikan Laporan PDF (.pdf)',
        UTI: 'com.adobe.pdf',
      });
      return true;
    }
    return false;
  } catch (err) {
    console.error('Error generating PDF report:', err);
    return false;
  }
}
