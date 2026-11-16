export const pdfStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #0f172a;
    background: #ffffff;
    padding: 24px 28px;
    font-size: 11px;
    line-height: 1.4;
  }
  @page { size: A4 portrait; margin: 12mm 12mm 15mm 12mm; }
  .header-wrap {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding-bottom: 14px; border-bottom: 2px solid #0f172a; margin-bottom: 16px;
  }
  .brand-title { font-size: 18px; font-weight: 900; letter-spacing: -0.5px; color: #0f172a; }
  .brand-sub { font-size: 10px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
  .doc-meta { text-align: right; }
  .doc-title { font-size: 13px; font-weight: 800; color: #0f172a; margin-bottom: 2px; }
  .doc-date { font-size: 10px; color: #64748b; }

  .kpi-grid { display: flex; gap: 10px; margin-bottom: 14px; }
  .kpi-card {
    flex: 1; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px; background: #f8fafc;
  }
  .kpi-label { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 3px; }
  .kpi-value { font-size: 13px; font-weight: 800; color: #0f172a; }
  .kpi-income { color: #059669; }
  .kpi-expense { color: #e11d48; }
  .kpi-saving { color: #2563eb; }

  .metrics-table {
    width: 100%; border-collapse: collapse; margin-bottom: 16px;
    border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;
  }
  .metrics-table td {
    padding: 8px 12px; border-right: 1px solid #e2e8f0; vertical-align: top;
    width: 25%; font-size: 10px; color: #334155;
  }
  .metrics-table td:last-child { border-right: none; }
  .m-lbl { font-size: 8.5px; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px; }
  .m-val { font-size: 10.5px; font-weight: 800; color: #0f172a; }

  .sec-title { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #0f172a; margin-bottom: 8px; letter-spacing: 0.3px; }
  .data-table { width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 10px; }
  .data-table thead { display: table-header-group; }
  .data-table tr { page-break-inside: avoid; }
  .data-table th {
    background: #f1f5f9; color: #334155; font-weight: 800; text-align: left;
    padding: 6px 8px; border-top: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1;
  }
  .data-table td { padding: 6px 8px; border-bottom: 1px solid #f1f5f9; color: #334155; }
  .data-table tr:last-child td { border-bottom: 1px solid #cbd5e1; }
  .data-table .total-row td { font-weight: 800; background: #f8fafc; border-top: 1px solid #cbd5e1; }
  .text-right { text-align: right; }
  .text-center { text-align: center; }

  .badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 8.5px; font-weight: 700; }
  .badge-expense { background: #ffe4e6; color: #e11d48; }
  .badge-income { background: #dcfce7; color: #15803d; }
  .badge-saving { background: #dbeafe; color: #1d4ed8; }

  .footer-wrap {
    margin-top: 20px; padding-top: 8px; border-top: 1px solid #e2e8f0;
    display: flex; justify-content: space-between; font-size: 9px; color: #94a3b8;
  }
`;
