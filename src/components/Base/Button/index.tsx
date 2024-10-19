import { Button } from "@headlessui/react";
import React, { forwardRef, useMemo } from "react";
import { BaseButtonProps } from "./baseButton";
import {
  ButtonAlignment,
  ButtonBackgroundColor,
  ButtonRounded,
  ButtonSize,
  ButtonLinkColor,
  ButtonTextColor,
} from "./buttonStyles";
import classNames from "@/helpers/classNames";
import Link from "next/link";

const BaseButton = forwardRef(
  (props: BaseButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      className = "",
      variant = "button",
      size = "md",
      color = "default",
      rounded = "md",
      fullWidth = false,
      fullHeight = false,
      alignment = "center",
      ...restButtonProps
    } = props;

    // Button classnames
    const buttonUI = useMemo((): string => {
      // Set the background color based on the variant
      let background = ButtonBackgroundColor[color];
      if (variant === "link") background = ButtonLinkColor[color];
      if (variant === "text") background = ButtonTextColor[color];

      // Return the classnames
      return classNames(
        "flex items-center gap-2",
        variant === "icon" ? "aspect-square" : "aspect-none",
        fullWidth ? "w-full" : "w-fit",
        fullHeight ? "h-full" : "h-fit",
        background,
        ButtonSize[size],
        ButtonRounded[rounded],
        ButtonAlignment[alignment],
        className
      );
    }, [
      variant,
      className,
      size,
      color,
      alignment,
      fullWidth,
      fullHeight,
      rounded,
    ]);

    return (
      <Button
        ref={ref}
        {...(variant === "link" && { as: Link })} // If variant is link, set the as prop to Link
        {...restButtonProps}
        className={buttonUI}
      >
        {children}
      </Button>
    );
  }
);

export default BaseButton;
