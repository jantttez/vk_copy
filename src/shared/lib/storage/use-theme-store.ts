import { Theme } from "@shared/types";
import { create } from "zustand";

interface ThemeStoreState {
  theme: Theme;
}

interface ThemeStoreAction {
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStoreState & ThemeStoreAction>((set) => ({
  theme: Theme.dark,
  setTheme: (theme: Theme) => set(() => ({ theme: theme })),
}));
