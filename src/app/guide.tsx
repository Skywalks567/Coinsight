import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Search } from 'lucide-react-native';
import { faqCategories, faqList, FaqCategory } from '../constants/faqData';
import FaqAccordionItem from '../components/guide/FaqAccordionItem';
import ManualBannerCard from '../components/guide/ManualBannerCard';

export default function GuideScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  const trimmed = searchQuery.trim().toLowerCase();
  const filtered = faqList.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchQuery = !trimmed ||
      item.question.toLowerCase().includes(trimmed) ||
      item.answer.toLowerCase().includes(trimmed);
    return matchCat && matchQuery;
  });

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar barStyle="dark-content" />

      <View className="px-5 pt-12 pb-4 bg-white border-b border-slate-200/80 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-2xl bg-slate-100 items-center justify-center border border-slate-200/60"
        >
          <ArrowLeft size={18} color="#334155" />
        </TouchableOpacity>
        <Text className="text-base font-extrabold text-slate-900">Panduan & Bantuan</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1 px-5 pt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="bg-white border border-slate-200/90 rounded-2xl p-3 flex-row items-center gap-2.5 mb-3 shadow-sm">
          <Search size={16} color="#94A3B8" />
          <TextInput
            placeholder="Cari pertanyaan cepat..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 text-xs text-slate-800 font-semibold p-0"
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 -mx-1 px-1">
          <View className="flex-row gap-2 py-0.5">
            {faqCategories.map((c) => {
              const isActive = activeCategory === c.key;
              return (
                <TouchableOpacity
                  key={c.key}
                  onPress={() => setActiveCategory(c.key)}
                  className={`px-3.5 py-1.5 rounded-full border ${
                    isActive ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-200'
                  }`}
                >
                  <Text className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-600'}`}>
                    {c.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <Text className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
          Tanya Jawab Populer ({filtered.length})
        </Text>

        {filtered.length === 0 ? (
          <View className="bg-white border border-slate-200/90 p-8 rounded-3xl items-center justify-center my-2">
            <Text className="text-slate-500 font-bold text-xs">Tidak ditemukan pertanyaan</Text>
            <Text className="text-slate-400 text-[11px] mt-1">Coba gunakan kata kunci lain.</Text>
          </View>
        ) : (
          filtered.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openFaqId === item.id}
              onToggle={() => setOpenFaqId((cur) => (cur === item.id ? null : item.id))}
            />
          ))
        )}

        <ManualBannerCard onPressReadManual={() => router.push('/manual')} />

        <View className="items-center mt-6">
          <Text className="text-slate-400 text-[10px] font-bold">
            Expense Tracker v1.0.0 • Offline Local Database
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

