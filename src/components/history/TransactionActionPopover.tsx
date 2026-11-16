import React from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, Dimensions } from 'react-native';
import { Pencil, Trash2 } from 'lucide-react-native';

type Props = {
  visible: boolean;
  anchor: { x: number; y: number } | null;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TransactionActionPopover({
  visible,
  anchor,
  onClose,
  onEdit,
  onDelete,
}: Props) {
  if (!visible || !anchor) return null;

  const screenWidth = Dimensions.get('window').width;
  const menuWidth = 130;
  const right = Math.max(16, screenWidth - anchor.x);
  const top = anchor.y + 4;

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <Pressable onPress={onClose} className="flex-1 bg-black/10">
        <View
          style={{ position: 'absolute', top, right, width: menuWidth, elevation: 12 }}
          className="bg-white rounded-2xl p-1 border border-slate-200/90 shadow-2xl"
        >
          <TouchableOpacity
            onPress={() => {
              onClose();
              onEdit();
            }}
            activeOpacity={0.7}
            className="flex-row items-center gap-2.5 px-3 py-2.5 rounded-xl active:bg-slate-50"
          >
            <Pencil size={13} color="#475569" strokeWidth={2.2} />
            <Text className="text-xs font-bold text-slate-700">Ubah</Text>
          </TouchableOpacity>

          <View className="h-[1px] bg-slate-100 my-0.5" />

          <TouchableOpacity
            onPress={() => {
              onClose();
              onDelete();
            }}
            activeOpacity={0.7}
            className="flex-row items-center gap-2.5 px-3 py-2.5 rounded-xl active:bg-rose-50"
          >
            <Trash2 size={13} color="#E11D48" strokeWidth={2.2} />
            <Text className="text-xs font-bold text-rose-600">Hapus</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}

