import { Expense, Category } from '../../types/expense';
import { pdfStyles } from './pdfStyles';
import {
  buildHeaderHtml,
  buildKpiGridHtml,
  buildMetricsBoxHtml,
  SummaryMetrics,
} from './pdfSummarySection';
import { buildCategoryTableHtml, buildTransactionTableHtml } from './pdfTableSection';

export function generateReportPdfHtml(
  expenses: Expense[],
  categories: Category[],
  monthlyBudget: number,
  budgetMode: 'auto' | 'manual',
  periodLabel: string,
  customDailyAverage?: number
): string {
  const totalExpense = expenses.filter((e) => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = expenses.filter((e) => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const permSpent = expenses.filter((e) => e.type === 'expense' && e.source === 'saving' && !e.isSavingLoan).reduce((sum, e) => sum + e.amount, 0);
  const rawSaving = expenses.filter((e) => e.type === 'saving' && !e.isLoanRepayment).reduce((sum, e) => sum + e.amount, 0);
  const totalSaving = Math.max(0, rawSaving - permSpent);
  const netCash = totalIncome - totalExpense - totalSaving;

  const savingsRate = totalIncome > 0 ? Math.round((totalSaving / totalIncome) * 100) : 0;
  const budgetUsedPercent = monthlyBudget > 0 ? Math.round((totalExpense / monthlyBudget) * 100) : 0;

  const validDates = expenses
    .map((e) => new Date(e.date).getTime())
    .filter((t) => !isNaN(t))
    .sort((a, b) => a - b);

  let calcDailyAverage = 0;
  if (validDates.length > 0) {
    const minTime = validDates[0];
    const maxTime = Math.min(validDates[validDates.length - 1], Date.now());
    const daysDiff = Math.max(1, Math.round((maxTime - minTime) / 86400000) + 1);
    calcDailyAverage = Math.floor(totalExpense / daysDiff);
  }

  const dailyAverage = customDailyAverage !== undefined && !isNaN(customDailyAverage)
    ? customDailyAverage
    : calcDailyAverage;

  const loanBorrowed = expenses.filter((e) => e.type === 'expense' && e.isSavingLoan).reduce((s, e) => s + e.amount, 0);
  const loanRepaid = expenses.filter((e) => e.type === 'saving' && e.isLoanRepayment).reduce((s, e) => s + e.amount, 0);
  const totalLoan = Math.max(0, loanBorrowed - loanRepaid);


  const printDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const metrics: SummaryMetrics = {
    totalIncome, totalExpense, totalSaving, netCash,
    monthlyBudget, budgetMode, budgetUsedPercent, dailyAverage,
    savingsRate, totalLoan, periodLabel, printDate,
  };

  return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <title>Laporan Keuangan - ${periodLabel}</title>
      <style>${pdfStyles}</style>
    </head>
    <body>
      ${buildHeaderHtml(periodLabel, printDate)}
      ${buildKpiGridHtml(metrics)}
      ${buildMetricsBoxHtml(metrics)}
      ${buildCategoryTableHtml(expenses, categories)}
      ${buildTransactionTableHtml(expenses, categories)}
      <div class="footer-wrap">
        <div>Expense Tracker • Laporan Finansial Bulanan</div>
        <div>Akhir Laporan • Total ${expenses.length} Transaksi</div>
      </div>
    </body>
    </html>
  `;
}
