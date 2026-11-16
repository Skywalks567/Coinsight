import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BookOpen, ChevronRight } from 'lucide-react-native';

type Props = {
  onPressGuide: () => void;
};

export default function HelpGuideSection({ onPressGuide }: Props) {
  return (
    <View className="bg-white border border-slate-200/90 rounded-3xl p-5 mb-5 shadow-sm">
      <Text className="text-slate-800 font-extrabold text-xs uppercase tracking-wider mb-1.5">
        Bantuan & Panduan
      </Text>
      <Text className="text-slate-400 text-xs mb-4">
        Pelajari cara kerja batas harian, tabungan, dan panduan pemakaian aplikasi.
      </Text>

      <TouchableOpacity
        onPress={onPressGuide}
        activeOpacity={0.7}
        className="bg-indigo-50/70 border border-indigo-100 py-3.5 px-4 rounded-2xl flex-row items-center justify-between shadow-sm"
      >
        <View className="flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-xl bg-indigo-600 items-center justify-center">
            <BookOpen size={16} color="#FFFFFF" />
          </View>
          <View>
            <Text className="text-slate-800 text-xs font-bold">Panduan Pemakaian & FAQ</Text>
            <Text className="text-indigo-600 text-[10px] font-semibold mt-0.5">Tanya Jawab & Manual Lengkap</Text>
          </View>
        </View>
        <ChevronRight size={16} color="#6366F1" />
      </TouchableOpacity>
    </View>
  );
}

