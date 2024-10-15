import { useTheme } from "next-themes";
import React from "react";

const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "System", value: "system" },
];
const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  return themes.map((theme) => (
    <button
      key={theme.value}
      className="px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md dark:bg-dark-accent2 dark:text-gray-300"
      onClick={() => setTheme(theme.value)}
    >
      {theme.name}
    </button>
  ));
};

export default ThemeSelector;
