import { Expense, Category } from '../../types/expense';
import { formatRupiah } from './pdfSummarySection';

export function buildCategoryTableHtml(expenses: Expense[], categories: Category[]): string {
  const expenseItems = expenses.filter((e) => e.type === 'expense');
  const totalExpense = expenseItems.reduce((sum, e) => sum + e.amount, 0);

  const catMap = new Map<string, { name: string; count: number; total: number }>();
  expenseItems.forEach((e) => {
    const cat = categories.find((c) => c.id === e.categoryId);
    const catName = cat?.name || 'Lainnya';
    const curr = catMap.get(catName) || { name: catName, count: 0, total: 0 };
    curr.count += 1;
    curr.total += e.amount;
    catMap.set(catName, curr);
  });

  const sortedCats = Array.from(catMap.values()).sort((a, b) => b.total - a.total);

  const rows = sortedCats.map((cat, idx) => {
    const pct = totalExpense > 0 ? ((cat.total / totalExpense) * 100).toFixed(1) : '0';
    return `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td>${cat.name}</td>
        <td class="text-center">${cat.count} kali</td>
        <td class="text-right">${formatRupiah(cat.total)}</td>
        <td class="text-right">${pct}%</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="sec-title">Distribusi Pengeluaran per Kategori</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32px;" class="text-center">No</th>
          <th>Kategori</th>
          <th style="width: 80px;" class="text-center">Frekuensi</th>
          <th style="width: 120px;" class="text-right">Total (Rp)</th>
          <th style="width: 70px;" class="text-right">Porsi (%)</th>
        </tr>
      </thead>
      <tbody>
        ${rows || '<tr><td colspan="5" class="text-center">Tidak ada pengeluaran pada periode ini</td></tr>'}
        <tr class="total-row">
          <td colspan="2">TOTAL PENGELUARAN</td>
          <td class="text-center">${expenseItems.length} transaksi</td>
          <td class="text-right">${formatRupiah(totalExpense)}</td>
          <td class="text-right">100%</td>
        </tr>
      </tbody>
    </table>
  `;
}

export function buildTransactionTableHtml(expenses: Expense[], categories: Category[]): string {
  const sorted = [...expenses].sort((a, b) => b.date.localeCompare(a.date));

  const rows = sorted.map((e, idx) => {
    const cat = categories.find((c) => c.id === e.categoryId)?.name || '-';
    const typeBadge = e.type === 'expense'
      ? '<span class="badge badge-expense">Pengeluaran</span>'
      : e.type === 'income'
        ? '<span class="badge badge-income">Pemasukan</span>'
        : '<span class="badge badge-saving">Tabungan</span>';

    const cleanDate = e.date.substring(0, 10);
    const note = e.note ? e.note.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '-';

    return `
      <tr>
        <td class="text-center">${idx + 1}</td>
        <td>${cleanDate}</td>
        <td>${typeBadge}</td>
        <td>${cat}</td>
        <td>${note}</td>
        <td class="text-right font-bold">${formatRupiah(e.amount)}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="sec-title">Daftar Transaksi (${expenses.length})</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 30px;" class="text-center">No</th>
          <th style="width: 75px;">Tanggal</th>
          <th style="width: 85px;">Jenis</th>
          <th style="width: 110px;">Kategori</th>
          <th>Keterangan / Catatan</th>
          <th style="width: 110px;" class="text-right">Jumlah</th>
        </tr>
      </thead>
      <tbody>
        ${rows || '<tr><td colspan="6" class="text-center">Tidak ada catatan transaksi</td></tr>'}
      </tbody>
    </table>
  `;
}

