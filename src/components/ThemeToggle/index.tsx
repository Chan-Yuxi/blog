"use client";

import type { Theme } from "../ThemeProvider";
import { useTheme } from "../ThemeProvider";

import { combineClassNames } from "@/utils";

export default function ThemeToggle() {
  const themeOptions: Theme[] = ["system", "light", "dark"];

  const { theme, setTheme } = useTheme();

  return (
    <div>
      <ul>
        {themeOptions.map((option, i) => (
          <li
            key={i}
            className={combineClassNames(
              theme === option ? "text-blue-500" : "",
              "font-bold cursor-pointer"
            )}
            onClick={() => setTheme(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
