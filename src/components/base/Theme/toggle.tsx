"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Sun, Moon, SunMoon } from "lucide-react";
import { useTheme } from "./provider";

const keys = [
  {
    key: "system",
    label: "Follow system",
  },
  {
    key: "light",
    label: "Light",
  },
  {
    key: "dark",
    label: "Dark",
  },
];

const icons = {
  system: <SunMoon />,
  light: <Sun />,
  dark: <Moon />,
};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function handleSelectionChange(keys: any) {
    const theme = keys.keys().next().value;
    setTheme(theme);
  }

  return (
    <Dropdown>
      <DropdownTrigger>{icons[theme]}</DropdownTrigger>
      <DropdownMenu
        aria-label="Change theme"
        variant="flat"
        selectionMode="single"
        selectedKeys={theme}
        onSelectionChange={handleSelectionChange}
      >
        {keys.map(({ key, label }) => (
          <DropdownItem key={key}>
            <span className={key === theme ? "text-blue-500" : ""}>
              {label}
            </span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
