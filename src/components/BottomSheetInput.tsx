import React, { useState, useEffect } from 'react';
import { View, Modal, ScrollView } from 'react-native';
import { useExpenseStore, TransactionType } from '../store/useExpenseStore';
import { ExpenseSource } from '../types/expense';
import { inputTypeConfigs } from '../constants/inputConfig';
import InputModalHeader from './input/InputModalHeader';
import InputTypeTabs from './input/InputTypeTabs';
import InputAmountHero from './input/InputAmountHero';
import ExpenseSourceSelector from './input/ExpenseSourceSelector';
import SavingRepaymentOption from './input/SavingRepaymentOption';
import CategoryPickerScreen from './input/CategoryPickerScreen';
import InputCategoryTileRow from './input/InputCategoryTileRow';
import InputNoteField from './input/InputNoteField';
import EditDateBadge from './input/EditDateBadge';
import InputSubmitButton from './input/InputSubmitButton';

type Props = { visible?: boolean; onClose?: () => void };

export default function BottomSheetInput({ visible, onClose }: Props) {
  const {
    categories, addExpense, updateExpense, isInputModalOpen, closeInputModal,
    inputInitialType, inputInitialCategoryId, inputInitialAmount, inputInitialIsRepayment, editingExpense,
  } = useExpenseStore();

  const isVisible = visible !== undefined ? visible : isInputModalOpen;
  const handleClose = () => { if (onClose) onClose(); closeInputModal(); };

  const [step, setStep] = useState<'form' | 'category'>('form');
  const [activeType, setActiveType] = useState<TransactionType>('expense');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [source, setSource] = useState<ExpenseSource>('cash');
  const [isSavingLoan, setIsSavingLoan] = useState(false);
  const [isLoanRepayment, setIsLoanRepayment] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    setStep('form');
    if (editingExpense) {
      setActiveType(editingExpense.type); setAmount(editingExpense.amount.toString());
      setNote(editingExpense.note || ''); setSelectedCategoryId(editingExpense.categoryId);
      setSource(editingExpense.source || 'cash'); setIsSavingLoan(!!editingExpense.isSavingLoan);
      setIsLoanRepayment(!!editingExpense.isLoanRepayment);
    } else {
      const type = inputInitialType || 'expense';
      setActiveType(type); setSource('cash'); setIsSavingLoan(false);
      const firstCat = categories.find((c) => c.type === type);
      setSelectedCategoryId(inputInitialCategoryId || firstCat?.id || null);
      setAmount(inputInitialAmount ? inputInitialAmount.toString() : '');
      setIsLoanRepayment(!!inputInitialIsRepayment);
      if (inputInitialIsRepayment) setNote('Pelunasan pinjaman tabungan');
    }
  }, [isVisible, inputInitialType, inputInitialCategoryId, inputInitialAmount, inputInitialIsRepayment, editingExpense, categories]);

  const handleTypeChange = (t: TransactionType) => {
    setActiveType(t);
    const firstCat = categories.find((c) => c.type === t);
    setSelectedCategoryId(firstCat?.id || null);
  };

  const handleSave = () => {
    const clean = parseInt(amount, 10);
    if (!clean || !selectedCategoryId) return;
    const [cId, n, t, s, l, r, target] = [selectedCategoryId, note, activeType, source, isSavingLoan, isLoanRepayment, editingExpense];
    setAmount(''); setNote(''); handleClose();
    if (target) {
      updateExpense({
        ...target, amount: clean, categoryId: cId, note: n, type: t,
        source: t === 'expense' ? s : undefined,
        isSavingLoan: t === 'expense' && s === 'saving' ? !!l : undefined,
        isLoanRepayment: t === 'saving' ? !!r : undefined,
      }).catch(console.error);
    } else {
      addExpense(clean, cId, n, t, s, l, r).catch(console.error);
    }
  };

  const selectedCat = categories.find((c) => c.id === selectedCategoryId);
  const typeConfig = inputTypeConfigs[activeType];

  return (
    <Modal visible={isVisible} animationType="slide" presentationStyle="fullScreen" onRequestClose={handleClose}>
      {step === 'category' ? (
        <CategoryPickerScreen
          categories={categories} activeType={activeType} selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId} onBack={() => setStep('form')}
        />
      ) : (
        <View className="flex-1 bg-white pt-12 px-5">
          <InputModalHeader title={editingExpense ? 'Edit Transaksi' : 'Catat Transaksi'} onClose={handleClose} />
          <InputTypeTabs activeType={activeType} onChangeType={handleTypeChange} />

          <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
            <InputAmountHero amount={amount} onChangeAmount={setAmount} activeType={activeType} />
            {activeType === 'expense' && (
              <ExpenseSourceSelector
                source={source} onSourceChange={setSource}
                isSavingLoan={isSavingLoan} onToggleSavingLoan={() => setIsSavingLoan((p) => !p)}
              />
            )}
            {activeType === 'saving' && (
              <SavingRepaymentOption isRepayment={isLoanRepayment} onToggle={() => setIsLoanRepayment((p) => !p)} />
            )}
            <InputCategoryTileRow selectedCategory={selectedCat} onPress={() => setStep('category')} />
            <InputNoteField note={note} onChangeNote={setNote} />
            {editingExpense && <EditDateBadge dateIso={editingExpense.date} />}
            <InputSubmitButton
              canSave={Boolean(amount && selectedCategoryId)}
              btnBg={typeConfig.btnBg}
              btnText={editingExpense ? 'Simpan Perubahan' : typeConfig.btnText}
              onPress={handleSave}
            />
          </ScrollView>
        </View>
      )}
    </Modal>
  );
}
