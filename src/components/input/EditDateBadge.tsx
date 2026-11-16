import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'lucide-react-native';

type Props = {
  dateIso: string;
};

export default function EditDateBadge({ dateIso }: Props) {
  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      const dateStr = d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} WIB`;
      return `${dateStr}, ${timeStr}`;
    } catch {
      return '';
    }
  };

  return (
    <View className="flex-row items-center gap-2 bg-indigo-50/70 border border-indigo-100 rounded-xl px-3 py-2 mb-3">
      <Calendar size={14} color="#6366F1" />
      <Text className="text-[11px] text-indigo-700 font-semibold flex-1">
        Waktu: {formatDate(dateIso)} (dipertahankan)
      </Text>
    </View>
  );
}

