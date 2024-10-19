import React, { ForwardedRef, forwardRef } from "react";
import BaseButton from "../Button";
import { BaseButtonProps } from "../Button/baseButton";
import { CloseButton } from "@headlessui/react";

type BasePopoverItemsProps = BaseButtonProps & {
  children: string | React.ReactNode;
  isActived?: boolean;
  autoClose?: boolean;
};

const PopoverItem = forwardRef(
  (props: BasePopoverItemsProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      fullWidth = true,
      alignment = "left",
      rounded = "none",
      isActived,
      ...restProps
    } = props;

    return (
      <BaseButton
        ref={ref}
        {...restProps}
        fullWidth={fullWidth}
        alignment={alignment}
        rounded={rounded}
        className={
          isActived ? "bg-light-accent/5 dark:bg-dark-accent/5 font-bold" : ""
        }
      >
        {children}
      </BaseButton>
    );
  }
);

PopoverItem.displayName = "PopoverItem";

const BasePopoverItem = forwardRef(
  (props: BasePopoverItemsProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, autoClose = true, ...restProps } = props;

    if (!autoClose)
      return (
        <PopoverItem ref={ref} {...restProps}>
          {children}
        </PopoverItem>
      );

    return (
      <CloseButton ref={ref} as={PopoverItem} {...restProps}>
        {children}
      </CloseButton>
    );
  }
);
BasePopoverItem.displayName = "BasePopoverItem";

export default BasePopoverItem;
