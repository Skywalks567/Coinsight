import * as XLSX from 'xlsx-js-style';

const BORDER_THIN = { style: 'thin', color: { rgb: 'CBD5E1' } };
const BORDER_DOUBLE = { style: 'double', color: { rgb: '0F172A' } };

const cellBorders = {
  top: BORDER_THIN,
  bottom: BORDER_THIN,
  left: BORDER_THIN,
  right: BORDER_THIN,
};

export const excelColors = {
  INDIGO: '4338CA',
  ROSE: 'E11D48',
  EMERALD: '059669',
  SKY: '0284C7',
  BANNER: '1E293B',
};

export function createBannerStyle(): any {
  return {
    fill: { fgColor: { rgb: excelColors.BANNER } },
    font: { name: 'Calibri', sz: 11, bold: true, color: { rgb: 'FFFFFF' } },
    alignment: { horizontal: 'center', vertical: 'center' },
    border: cellBorders,
  };
}

export function createHeaderStyle(hexBg: string): any {
  return {
    fill: { fgColor: { rgb: hexBg } },
    font: { name: 'Calibri', sz: 10, bold: true, color: { rgb: 'FFFFFF' } },
    alignment: { horizontal: 'center', vertical: 'center' },
    border: cellBorders,
  };
}

export const dataStyle = {
  font: { name: 'Calibri', sz: 10, color: { rgb: '1E293B' } },
  alignment: { vertical: 'center' },
  border: cellBorders,
};

export const dataStyleCenter = {
  ...dataStyle,
  alignment: { horizontal: 'center', vertical: 'center' },
};

export const dataStyleNumber = {
  ...dataStyle,
  alignment: { horizontal: 'right', vertical: 'center' },
  numFmt: '#,##0',
};

export const totalLabelStyle = {
  fill: { fgColor: { rgb: 'F1F5F9' } },
  font: { name: 'Calibri', sz: 10, bold: true, color: { rgb: '0F172A' } },
  alignment: { horizontal: 'center', vertical: 'center' },
  border: { top: BORDER_THIN, bottom: BORDER_DOUBLE, left: BORDER_THIN, right: BORDER_THIN },
};

export const totalNumberStyle = {
  ...totalLabelStyle,
  alignment: { horizontal: 'right', vertical: 'center' },
  numFmt: '#,##0',
};

export function applyCellBorders(ws: any, r: number, c: number, s: any) {
  const ref = XLSX.utils.encode_cell({ r, c });
  if (ws[ref]) {
    ws[ref].s = s;
  }
}

