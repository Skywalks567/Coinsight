import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MoreVertical } from 'lucide-react-native';
import { Expense, Category } from '../../types/expense';
import TransactionActionPopover from './TransactionActionPopover';

type Props = {
  item: Expense;
  category?: Category;
  onPressDelete: (id: string) => void;
  onPressEdit?: (item: Expense) => void;
};

export default function TransactionHistoryItem({
  item,
  category,
  onPressDelete,
  onPressEdit,
}: Props) {
  const [anchor, setAnchor] = useState<{ x: number; y: number } | null>(null);
  const btnRef = useRef<any>(null);

  const isIncome = item.type === 'income';
  const isSaving = item.type === 'saving';

  let sign = '-';
  let amountColor = 'text-rose-600';
  let typeLabel = 'Pengeluaran';
  let badgeBg = 'bg-rose-50 border-rose-100';

  if (isIncome) {
    sign = '+';
    amountColor = 'text-emerald-600';
    typeLabel = 'Pemasukan';
    badgeBg = 'bg-emerald-50 border-emerald-100';
  } else if (isSaving) {
    sign = '';
    amountColor = item.isLoanRepayment ? 'text-emerald-600' : 'text-sky-600';
    typeLabel = item.isLoanRepayment ? '✓ Pelunasan Tabungan' : 'Tabungan';
    badgeBg = item.isLoanRepayment ? 'bg-emerald-50 border-emerald-200' : 'bg-sky-50 border-sky-100';
  } else if (item.source === 'saving') {
    sign = '-';
    if (item.isSavingLoan) {
      amountColor = 'text-amber-600';
      typeLabel = '📌 Pinjam Tabungan';
      badgeBg = 'bg-amber-50 border-amber-200';
    } else {
      amountColor = 'text-sky-700';
      typeLabel = '🏦 Dari Tabungan';
      badgeBg = 'bg-sky-50 border-sky-200';
    }
  }

  const formatTime = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} WIB`;
    } catch {
      return '';
    }
  };

  const handleOpenMenu = () => {
    btnRef.current?.measureInWindow?.((x: number, y: number, width: number, height: number) => {
      setAnchor({ x: x + width, y: y + height });
    });
  };

  return (
    <View className="bg-white border border-slate-200/80 p-3.5 rounded-2xl flex-row items-center justify-between shadow-sm mb-2.5">
      <View className="flex-row items-center flex-1 pr-3">
        <View className={`w-10 h-10 rounded-xl items-center justify-center mr-3 border ${badgeBg}`}>
          <Text className="text-xl">{category?.icon || '💳'}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-xs font-bold text-slate-800" numberOfLines={1}>
            {item.note || category?.name || 'Transaksi'}
          </Text>
          <Text className="text-[10px] text-slate-400 font-medium mt-0.5">
            {typeLabel} • {formatTime(item.date)}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <Text className={`${amountColor} font-black text-xs`}>
          {sign} Rp {item.amount.toLocaleString('id-ID')}
        </Text>
        <TouchableOpacity
          ref={btnRef as any}
          onPress={handleOpenMenu}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          className="p-1 rounded-lg active:bg-slate-100"
        >
          <MoreVertical size={16} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <TransactionActionPopover
        visible={Boolean(anchor)}
        anchor={anchor}
        onClose={() => setAnchor(null)}
        onEdit={() => onPressEdit?.(item)}
        onDelete={() => onPressDelete(item.id)}
      />
    </View>
  );
}
