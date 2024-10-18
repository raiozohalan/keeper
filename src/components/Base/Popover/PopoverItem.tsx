import classNames from "@/helpers/classNames";
import React, { ButtonHTMLAttributes } from "react";

interface BasePopoverItemsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
}

const BasePopoverItem = (props: BasePopoverItemsProps) => {
  const { children, className = "", ...restProps } = props;
  return (
    <button
      {...restProps}
      className={classNames(
        "w-full flex items-center gap-2",
        "px-4 py-2 rounded-none",
        "hover:bg-light-tertiary dark:hover:bg-dark-primary",
        className
      )}
    >
      {children}
    </button>
  );
};

export default BasePopoverItem;
