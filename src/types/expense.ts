export type TransactionType = 'expense' | 'income' | 'saving';
export type ExpenseSource = 'cash' | 'saving';

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
  group: string;
  type: TransactionType;
};

export type Expense = {
  id: string;
  amount: number;
  categoryId: string;
  date: string;
  note?: string;
  type: TransactionType;
  source?: ExpenseSource;
  isSavingLoan?: boolean;
  isLoanRepayment?: boolean;
};

export type ExpenseState = {
  expenses: Expense[];
  categories: Category[];
  isLoading: boolean;
  userId: string | null;
  monthlyBudget: number;
  budgetMode: 'auto' | 'manual';
  alarmTime: string;
  isBalanceHidden: boolean;
  isInputModalOpen: boolean;
  inputInitialType: TransactionType;
  inputInitialCategoryId: string | null;
  inputInitialAmount?: number | null;
  inputInitialIsRepayment?: boolean;
  editingExpense?: Expense | null;
  initialize: () => void;
  addExpense: (
    amount: number,
    categoryId: string,
    note?: string,
    type?: TransactionType,
    source?: ExpenseSource,
    isSavingLoan?: boolean,
    isLoanRepayment?: boolean
  ) => Promise<void>;
  updateExpense: (expense: Expense) => Promise<void>;
  deleteExpense: (expenseId: string) => Promise<void>;
  setMonthlyBudget: (amount: number) => Promise<void>;
  setBudgetMode: (mode: 'auto' | 'manual') => Promise<void>;
  setAlarmTime: (time: string) => void;
  toggleBalanceHidden: () => void;
  openInputModal: (
    type?: TransactionType,
    categoryId?: string | null,
    initialAmount?: number | null,
    isRepayment?: boolean
  ) => void;
  openEditModal: (expense: Expense) => void;
  closeInputModal: () => void;
  resetAllData: () => Promise<void>;
  importExpenses: (importedExpenses: Expense[]) => Promise<void>;
};
