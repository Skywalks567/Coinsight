export function formatDateTime(iso: string): string {
  try {
    const d = new Date(iso);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch {
    return iso;
  }
}

export function getProfessionalFileName(periodLabel: string = 'semua'): string {
  const clean = periodLabel.trim().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\-]/g, '');
  if (clean.toLowerCase() === 'semua' || clean.toLowerCase() === 'semua_transaksi') {
    const today = new Date().toISOString().substring(0, 10);
    return `Laporan_Keuangan_Semua_Transaksi_${today}.xlsx`;
  }
  return `Laporan_Keuangan_${clean}.xlsx`;
}
