import classNames from "@/helpers/classNames";
import {
  BaseButtonAlignment,
  BaseButtonColor,
  BaseButtonRounded,
  BaseButtonSize,
} from "./baseButton";

export const ButtonSize: { [key in BaseButtonSize]: string } = {
  xs: "py-0.5 px-2 text-xs",
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-5 text-base",
  xl: "py-4 px-6 text-lg",
};

// Button Background Color
export const ButtonBackgroundColor: { [key in BaseButtonColor]: string } = {
  default: "def-bg-hover",
  primary:
    "bg-primary hover:bg-primary-600 dark:bg-primary/80 dark:hover:bg-primary text-white",
  secondary: classNames(
    "bg-secondary-300/20 hover:bg-secondary-300/40 def-text-color",
    "dark:bg-secondary-400/70 dark:hover:bg-secondary-400"
  ),
  danger:
    "bg-error hover:bg-error-600 dark:bg-error/90 dark:hover:bg-error text-white",
  success:
    "bg-success hover:bg-success-600 dark:bg-success/80 dark:hover:bg-success text-white",
  warning:
    "bg-warning hover:bg-warning-600 dark:bg-warning/80 dark:hover:bg-warning text-white",
};

// Button Link Color
export const ButtonLinkColor: { [key in BaseButtonColor]: string } = {
  default: "text-inherit dark:text-inherit def-link-hover",
  primary: "text-primary dark:text-primary-400 def-link-hover",
  secondary: "text-secondary dark:text-secondary-400 def-link-hover",
  danger: "text-error dark:text-error-400 def-link-hover",
  success: "text-success dark:text-success-400 def-link-hover",
  warning: "text-warning dark:text-warning def-link-hover",
};

// Button Text Color
export const ButtonTextColor: { [key in BaseButtonColor]: string } = {
  default: "text-inherit dark:text-inherit def-bg-hover",
  primary: "text-primary dark:text-primary-400 def-bg-hover",
  secondary: "text-secondary dark:text-secondary-400 def-bg-hover",
  danger: "text-error dark:text-error-400 def-bg-hover",
  success: "text-success dark:text-success-400 def-bg-hover",
  warning: "text-warning dark:text-warning def-bg-hover",
};

export const ButtonRounded: { [key in BaseButtonRounded]: string } = {
  full: "rounded-full",
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

export const ButtonAlignment: { [key in BaseButtonAlignment]: string } = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};
