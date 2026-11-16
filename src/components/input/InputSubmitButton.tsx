import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';

type Props = {
  canSave: boolean;
  btnBg: string;
  btnText: string;
  onPress: () => void;
};

export default function InputSubmitButton({ canSave, btnBg, btnText, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!canSave}
      className={`p-4 rounded-2xl flex-row items-center justify-center gap-2 ${canSave ? btnBg : 'bg-slate-200'}`}
      style={canSave ? { elevation: 3 } : undefined}
    >
      <Check size={18} color={canSave ? '#FFFFFF' : '#94A3B8'} strokeWidth={2.5} />
      <Text className={`font-black text-sm ${canSave ? 'text-white' : 'text-slate-400'}`}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
}

