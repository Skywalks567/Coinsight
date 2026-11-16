import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, ArrowRight } from 'lucide-react-native';

type Props = {
  onPressReadManual: () => void;
};

export default function ManualBannerCard({ onPressReadManual }: Props) {
  return (
    <View
      className="rounded-3xl p-5 mt-4 mb-2 shadow-lg relative overflow-hidden border"
      style={{ backgroundColor: '#1e1b4b', borderColor: '#4338ca', elevation: 4 }}
    >
      <View
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-25 pointer-events-none"
        style={{ backgroundColor: '#6366f1' }}
      />
      <View
        className="absolute -left-6 -top-6 w-24 h-24 rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: '#8b5cf6' }}
      />

      <View
        className="flex-row items-center gap-1.5 self-start px-2.5 py-1 rounded-lg mb-2.5 border"
        style={{ backgroundColor: '#312e81', borderColor: '#4f46e5' }}
      >
        <BookOpen size={12} color="#C7D2FE" />
        <Text className="text-[10px] font-extrabold text-indigo-200 uppercase tracking-wider">
          Panduan Praktis
        </Text>
      </View>

      <Text className="text-white text-sm font-black mb-1.5">
        Butuh Panduan Langkah demi Langkah?
      </Text>
      <Text className="text-indigo-200 text-xs leading-relaxed mb-4">
        Pelajari cara kerja batas harian cerdas, alur pinjam tabungan, ekspor Excel, hingga migrasi data ganti HP secara lengkap.
      </Text>

      <TouchableOpacity
        onPress={onPressReadManual}
        activeOpacity={0.8}
        className="py-3 px-4 rounded-2xl flex-row items-center justify-center gap-2 shadow-sm border"
        style={{ backgroundColor: '#4f46e5', borderColor: '#818cf8' }}
      >
        <Text className="text-white text-xs font-black">
          Buka Panduan Lengkap
        </Text>
        <ArrowRight size={14} color="#FFFFFF" strokeWidth={2.5} />
      </TouchableOpacity>
    </View>
  );
}
