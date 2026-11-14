import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';

type Props = {
  title: string;
  onClose: () => void;
};

export default function InputModalHeader({ title, onClose }: Props) {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <TouchableOpacity
        onPress={onClose}
        className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 items-center justify-center"
      >
        <X size={18} color="#0F172A" />
      </TouchableOpacity>
      <Text className="text-base font-extrabold text-slate-900">{title}</Text>
      <View className="w-9" />
    </View>
  );
}

