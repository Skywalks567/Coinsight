import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown, Lightbulb } from 'lucide-react-native';
import { FaqItem } from '../../constants/faqData';

type Props = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

const tagStyles: Record<string, { bg: string; text: string }> = {
  'Batas Harian': { bg: 'bg-amber-100', text: 'text-amber-800' },
  'Tabungan': { bg: 'bg-sky-100', text: 'text-sky-800' },
  'Alarm': { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'Cadangan Data': { bg: 'bg-slate-100', text: 'text-slate-700' },
  'Ekspor Excel': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
};

export default function FaqAccordionItem({ item, isOpen, onToggle }: Props) {
  const tagStyle = tagStyles[item.tag] || { bg: 'bg-slate-100', text: 'text-slate-700' };

  return (
    <View className={`bg-white border rounded-2xl mb-2.5 overflow-hidden shadow-sm ${
      isOpen ? 'border-indigo-200' : 'border-slate-200/90'
    }`}>
      <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.7}
        className="p-4 flex-row items-center justify-between gap-3"
      >
        <View className="flex-row items-center gap-2.5 flex-1">
          <View className={`px-2 py-0.5 rounded-md ${tagStyle.bg}`}>
            <Text className={`text-[9px] font-extrabold ${tagStyle.text}`}>{item.tag}</Text>
          </View>
          <Text className="text-xs font-bold text-slate-800 flex-1 leading-snug">
            {item.question}
          </Text>
        </View>
        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
          <ChevronDown size={16} color={isOpen ? '#4F46E5' : '#94A3B8'} />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View className="px-4 pb-4 pt-1 bg-slate-50/60 border-t border-slate-100">
          <Text className="text-[11.5px] text-slate-600 leading-relaxed">
            {item.answer}
          </Text>
          {item.tip && (
            <View className="mt-2.5 p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-100 flex-row items-start gap-2">
              <Lightbulb size={13} color="#4F46E5" />
              <Text className="text-[10.5px] text-indigo-900 font-semibold flex-1 leading-snug">
                {item.tip}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

