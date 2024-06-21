import { Theme, ThemeContext as IThemeContext } from "@shared/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
