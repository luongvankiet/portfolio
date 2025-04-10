import { create } from 'zustand';

interface TabsStore {
  tab: string;
  setTab: (tab: string) => void;
}

export const useTabs = create<TabsStore>((set) => ({
  tab: 'about',
  setTab: (tab: string) => set(() => ({ tab })),
}));
