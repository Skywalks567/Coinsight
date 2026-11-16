import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FileSpreadsheet, FileText } from 'lucide-react-native';

type Props = {
  onExportExcel: () => void;
  onExportPdf: () => void;
  totalRecords: number;
};

export default function ReportExportSection({
  onExportExcel,
  onExportPdf,
  totalRecords,
}: Props) {
  return (
    <View className="bg-white border border-slate-200/90 rounded-3xl p-5 mb-5 shadow-sm">
      <Text className="text-slate-800 font-extrabold text-xs uppercase tracking-wider mb-1.5">
        Laporan & Ekspor Dokumen
      </Text>
      <Text className="text-slate-400 text-xs mb-4">
        Unduh seluruh catatan transaksi dalam format spreadsheet atau dokumen cetak resmi.
      </Text>

      <TouchableOpacity
        onPress={onExportExcel}
        activeOpacity={0.7}
        className="bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-2xl flex-row items-center justify-between mb-3 shadow-sm"
      >
        <View className="flex-row items-center gap-2.5">
          <FileSpreadsheet size={16} color="#059669" />
          <Text className="text-slate-700 text-xs font-bold">Ekspor Laporan Excel (.xlsx)</Text>
        </View>
        <Text className="text-emerald-600 text-[11px] font-bold">Multi-Sheet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onExportPdf}
        activeOpacity={0.7}
        className="bg-slate-50 border border-slate-200 py-3.5 px-4 rounded-2xl flex-row items-center justify-between shadow-sm"
      >
        <View className="flex-row items-center gap-2.5">
          <FileText size={16} color="#E11D48" />
          <Text className="text-slate-700 text-xs font-bold">Cetak Laporan Bulan Ini (.pdf)</Text>
        </View>
        <Text className="text-rose-600 text-[11px] font-bold">Format A4</Text>
      </TouchableOpacity>
    </View>
  );
}
