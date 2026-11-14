import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckSquare, Square } from 'lucide-react-native';

type Props = {
  isRepayment: boolean;
  onToggle: () => void;
};

export default function SavingRepaymentOption({ isRepayment, onToggle }: Props) {
  return (
    <View className="bg-sky-50/80 border border-sky-100 rounded-2xl p-3 mb-3">
      <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.7}
        className="flex-row items-center justify-between"
      >
        <View className="flex-row items-center gap-2.5 flex-1 pr-2">
          {isRepayment ? (
            <CheckSquare size={17} color="#0284C7" />
          ) : (
            <Square size={17} color="#94A3B8" />
          )}
          <View>
            <Text className="text-xs font-bold text-sky-950">
              Pelunasan Pinjaman Tabungan
            </Text>
            <Text className="text-[10px] text-sky-700/80 mt-0.5">
              Mengurangi saldo hutang ke tabungan pribadi
            </Text>
          </View>
        </View>

        <View className="bg-sky-100 border border-sky-200 px-2 py-0.5 rounded">
          <Text className="text-[9px] font-black text-sky-800">Pelunasan</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
