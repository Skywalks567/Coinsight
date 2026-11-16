import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { CategoryId, allManualChapters, manualCategories } from '../constants/manualChapters';
import ManualChapterCard from '../components/guide/ManualChapterCard';

export default function ManualScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const displayedGuides = activeCategory === 'all'
    ? allManualChapters
    : allManualChapters.filter((c) => c.category === activeCategory);

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      <View className="px-5 pt-12 pb-4 bg-white border-b border-slate-200/80 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="w-10 h-10 rounded-2xl bg-slate-100 items-center justify-center border border-slate-200/60"
        >
          <ArrowLeft size={18} color="#334155" />
        </TouchableOpacity>
        <Text className="text-base font-extrabold text-slate-900">Panduan Penggunaan</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1 px-5 pt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 -mx-1 px-1">
          <View className="flex-row gap-2 py-0.5">
            {manualCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? allManualChapters.length
                : allManualChapters.filter((c) => c.category === cat.id).length;

              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setActiveCategory(cat.id)}
                  activeOpacity={0.8}
                  className={`px-3.5 py-1.5 rounded-full border ${
                    isActive ? 'bg-indigo-600 border-indigo-600' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <Text className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {cat.label} ({count})
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <Text className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
          {activeCategory === 'all'
            ? `Semua Panduan (${displayedGuides.length})`
            : `${manualCategories.find((c) => c.id === activeCategory)?.label} (${displayedGuides.length})`}
        </Text>

        {displayedGuides.map((guide) => (
          <ManualChapterCard key={guide.id} chapter={guide} />
        ))}

        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.8}
          className="bg-white border border-slate-200 py-3.5 px-4 rounded-2xl items-center justify-center mt-2 shadow-sm"
        >
          <Text className="text-indigo-600 text-xs font-bold">
            ← Kembali ke Tanya Jawab (FAQ)
          </Text>
        </TouchableOpacity>

        <View className="items-center mt-6">
          <Text className="text-slate-400 text-[10px] font-bold">
            Dokumentasi Lengkap • USER_MANUAL.md
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
