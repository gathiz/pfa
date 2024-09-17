import { create } from "zustand";
import { Budget } from "../types";

export interface BudgetState {
    budgets: Budget[];
    addBudgets: (budgets: Budget[]) => void;
    addBudget: (budget: Budget) => void;
    updateBudget: (category: string, updateBudget: Partial<Budget>) => void;
}

export const useBudgetStore = create<BudgetState>((set) => ({
    budgets: [],
    addBudgets: (budgets: Budget[]) => {
        set({ budgets })
    },
    addBudget: (newBudget: Budget) => set((state) => ({ budgets: [...state.budgets, newBudget] })),
    updateBudget: (category: string, updateBudget: Partial<Budget>) => set((state) => ({
        budgets: state.budgets.map((budget) =>
            budget.category === category ? { ...budget, ...updateBudget } : budget)
    })),
}));