import { ThemeContext } from "@app/providers/theme-provider";
import { useContext } from "react";

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error("no theme");

  const theme = themeContext.theme;
  const setTheme = themeContext.setTheme;
  return { theme, setTheme };
}
