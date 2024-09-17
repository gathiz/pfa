import { create } from "zustand";
import { Pot } from "../types";

export interface PotState {
    pots: Pot[];
    addPots: (pots: Pot[]) => void;
    addPot: (pot: Pot) => void;
    updateTotal: (name: string, amount: number) => void;
    updatePot: (name: string, updatedPot: Partial<Pot>) => void;
}

export const usePotStore = create<PotState>((set) => ({
    pots: [],
    addPots: (newPots: Pot[]) => set((state) => ({ pots: [...state.pots, ...newPots] })),
    addPot: (newPot: Pot) => set((state) => ({ pots: [...state.pots, newPot] })),
    updateTotal: (name: string, amount: number) => set((state) => ({
        pots: state.pots.map((pot) =>
            pot.name === name ? { ...pot, total: pot.total + amount } : pot)
    })),
    updatePot: (name: string, updatedPot: Partial<Pot>) => set((state) => ({
        pots: state.pots.map((pot) =>
            pot.name === name ? { ...pot, ...updatedPot } : pot
        )
    })),
}));