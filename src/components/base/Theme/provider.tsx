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
  defaultTheme,
  children,
}: {
  defaultTheme: Theme;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Why is it not useState<Theme>(getItem(STORAGE_THEME_KEY) || defaultTheme)?
  // In Nextjs, even client components perform pre rendering on the server,
  // so getItem will access the window object, which does not exist in the node environment,
  // triggering an insignificant error.
  // Encapsulate the operations that require the use of window into useEffect to avoid running during server-side pre rendering.
  useEffect(() => {
    const cacheTheme = getItem(STORAGE_THEME_KEY);
    if (cacheTheme) {
      setTheme(cacheTheme);
    }
  }, []);

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
