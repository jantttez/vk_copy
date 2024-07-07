export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
