export function formatRupiah(amount: number): string {
  if (isNaN(amount)) return 'Rp 0';
  return 'Rp ' + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export type SummaryMetrics = {
  totalIncome: number;
  totalExpense: number;
  totalSaving: number;
  netCash: number;
  monthlyBudget: number;
  budgetMode: 'auto' | 'manual';
  budgetUsedPercent: number;
  dailyAverage: number;
  savingsRate: number;
  totalLoan: number;
  periodLabel: string;
  printDate: string;
};

export function buildHeaderHtml(periodLabel: string, printDate: string): string {
  return `
    <div class="header-wrap">
      <div>
        <div class="brand-title">EXPENSE TRACKER</div>
        <div class="brand-sub">Laporan Arus Kas Finansial</div>
      </div>
      <div class="doc-meta">
        <div class="doc-title">LAPORAN KEUANGAN BULANAN</div>
        <div class="doc-date">Periode: ${periodLabel} • Dicetak: ${printDate}</div>
      </div>
    </div>
  `;
}

export function buildKpiGridHtml(m: SummaryMetrics): string {
  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Total Pemasukan</div>
        <div class="kpi-value kpi-income">${formatRupiah(m.totalIncome)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Total Pengeluaran</div>
        <div class="kpi-value kpi-expense">${formatRupiah(m.totalExpense)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Tabungan Bersih</div>
        <div class="kpi-value kpi-saving">${formatRupiah(m.totalSaving)}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Sisa Saldo Kas</div>
        <div class="kpi-value">${formatRupiah(m.netCash)}</div>
      </div>
    </div>
  `;
}

export function buildMetricsBoxHtml(m: SummaryMetrics): string {
  const loanStatus = m.totalLoan > 0
    ? `<span style="color: #d97706; font-weight: 800;">Belum Lunas: ${formatRupiah(m.totalLoan)}</span>`
    : `<span style="color: #059669; font-weight: 800;">Lunas (Rp 0)</span>`;

  const budgetText = m.budgetMode === 'auto'
    ? 'Otomatis (Dinamis)'
    : m.monthlyBudget > 0
      ? `${formatRupiah(m.monthlyBudget)} (${m.budgetUsedPercent}% terpakai)`
      : 'Tidak diatur';

  return `
    <table class="metrics-table">
      <tr>
        <td>
          <span class="m-lbl">Batas Anggaran</span>
          <span class="m-val">${budgetText}</span>
        </td>
        <td>
          <span class="m-lbl">Rata-rata Harian</span>
          <span class="m-val">${formatRupiah(m.dailyAverage)} / hari</span>
        </td>
        <td>
          <span class="m-lbl">Rasio Tabungan</span>
          <span class="m-val">${m.savingsRate}%</span>
        </td>
        <td>
          <span class="m-lbl">Pinjaman Tabungan</span>
          <span class="m-val">${loanStatus}</span>
        </td>
      </tr>
    </table>
  `;
}
