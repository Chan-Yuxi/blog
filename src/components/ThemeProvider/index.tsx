"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { getItem, setItem } from "@/utils";
import { STORAGE_THEME_KEY } from "@/constant";

export type Theme = "system" | "light" | "dark";

const ThemeProviderContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "system",
  setTheme: () => undefined,
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(
    getItem(STORAGE_THEME_KEY) || "system"
  );

  useEffect(() => {
    const htmlElement = document.documentElement;
    let className = "";
    htmlElement.classList.remove("light", "dark");
    className = theme;
    if (theme === "system") {
      className = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    htmlElement.classList.add(className);
  }, [theme]);

  function setThemeAndRecord(theme: Theme) {
    setTheme(theme);
    setItem(STORAGE_THEME_KEY, theme);
  }

  return (
    <ThemeProviderContext.Provider
      value={{ theme, setTheme: setThemeAndRecord }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeProviderContext);
}
