import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create(
  persist<BearState>(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bearStore', // 로컬 스토리지에 저장할 키 이름
    },
  ),
);
