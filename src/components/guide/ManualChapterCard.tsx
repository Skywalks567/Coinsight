import React from 'react';
import { View, Text } from 'react-native';
import { Lightbulb } from 'lucide-react-native';
import { Chapter } from '../../constants/manualChapters';

type Props = {
  chapter: Chapter;
};

export default function ManualChapterCard({ chapter }: Props) {
  return (
    <View className="bg-white border border-slate-200/90 rounded-3xl p-5 mb-4 shadow-sm">
      <View className="self-start px-2.5 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 mb-2">
        <Text className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider">
          {chapter.categoryLabel}
        </Text>
      </View>
      <Text className="text-slate-900 text-sm font-extrabold mb-3">
        {chapter.title}
      </Text>

      <View className="gap-2.5 mb-2">
        {chapter.steps.map((step, idx) => (
          <View key={idx} className="flex-row items-start gap-2.5">
            <View className="w-5 h-5 rounded-full bg-indigo-600 items-center justify-center mt-0.5">
              <Text className="text-[10px] font-extrabold text-white">
                {idx + 1}
              </Text>
            </View>
            <Text className="text-xs text-slate-600 leading-relaxed flex-1">
              {step}
            </Text>
          </View>
        ))}
      </View>

      {chapter.formula && (
        <View className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-3 my-2 items-center">
          <Text className="text-[11px] font-mono font-bold text-slate-800 text-center">
            {chapter.formula}
          </Text>
        </View>
      )}

      {chapter.note && (
        <View className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-1 flex-row items-start gap-2">
          <Lightbulb size={13} color="#D97706" />
          <Text className="text-[11px] text-amber-800 font-semibold flex-1 leading-snug">
            {chapter.note}
          </Text>
        </View>
      )}
    </View>
  );
}
