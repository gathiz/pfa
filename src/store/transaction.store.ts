import { create } from "zustand";
import { Transaction } from "../types";

export interface TransactionState {
    transactions: Transaction[];
    addTransactions: (transactions: Transaction[]) => void;
    addTransaction: (transaction: Transaction) => void;
    updateTransaction: (name: string, date: string, updatedTransaction: Partial<Transaction>) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
    transactions: [],
    addTransactions: (transactions: Transaction[]) => {
        set({ transactions })
    },
    addTransaction: (newTransaction: Transaction) =>
        set((state) => ({ transactions: [...state.transactions, newTransaction] })),
    updateTransaction: (name: string, date: string, updatedTransaction: Partial<Transaction>) => set((state) => ({
        transactions: state.transactions.map((tr) =>
            (tr.name === name && new Date(tr.date) === new Date(date)) ? { ...tr, ...updatedTransaction } : tr)
    })),
}));
