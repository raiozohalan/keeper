import { ButtonProps } from "@headlessui/react";
import { LinkProps } from "next/link";

export type BaseButtonVariant = "button" | "text" | "icon";
export type BaseButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type BaseButtonRounded = "full" | "none" | "sm" | "md" | "lg" | "xl";
export type BaseButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";
export type BaseButtonAlignment =
  | "left"
  | "center"
  | "right"
  | "between"
  | "around"
  | "evenly";

export interface BaseButtonCommonProps {
  children: React.ReactNode;
  className?: string;
  size?: BaseButtonSize;
  color?: BaseButtonColor;
  rounded?: BaseButtonRounded;
  fullWidth?: boolean;
  fullHeight?: boolean;
  alignment?: BaseButtonAlignment;
}

export type BaseButtonDefaultProps = {
  variant?: BaseButtonVariant;
} & BaseButtonCommonProps &
  ButtonProps;

export type BaseLinkProps = {
  variant?: "link";
} & BaseButtonCommonProps &
  ButtonProps &
  LinkProps;

export type BaseButtonProps = BaseButtonDefaultProps | BaseLinkProps;
