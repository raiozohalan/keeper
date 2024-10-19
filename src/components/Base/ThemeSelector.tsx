import { useTheme } from "next-themes";
import React, { useMemo } from "react";
import BasePopover from "./Popover";
import BasePopoverItem from "./Popover/PopoverItem";
import { Monitor, Moon, Sun } from "react-feather";

const themes = [
  { name: "Light", value: "light", icon: <Sun className="w-full h-full" /> },
  { name: "Dark", value: "dark", icon: <Moon className="w-full h-full" /> },
  {
    name: "System",
    value: "system",
    icon: <Monitor className="w-full h-full" />,
  },
];
const ThemeSelector = () => {
  const { theme: currenTheme, setTheme } = useTheme();

  const getCurrentTheme = useMemo(() => {
    return themes.find((theme) => theme.value === currenTheme);
  }, [currenTheme]);

  return (
    <BasePopover
      label={<span className="w-[18px] h-[18px]">{getCurrentTheme?.icon}</span>}
      buttonProps={{ variant: "icon", size: "xs" }}
      panelProps={{ anchor: { to: "bottom end", gap: 10 }, className: "w-fit" }}
    >
      {themes.map((theme) => {
        const isCurrentTheme = theme.value === currenTheme;
        return (
          <BasePopoverItem
            key={theme.value}
            onClick={() => setTheme(theme.value)}
            isActived={isCurrentTheme}
          >
            <span className="w-3.5 h-3.5">{theme.icon}</span> {theme.name}
          </BasePopoverItem>
        );
      })}
    </BasePopover>
  );
};

export default ThemeSelector;
