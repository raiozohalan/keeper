import classNames from "@/helpers/classNames";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverPanelProps,
  PopoverProps,
} from "@headlessui/react";
import React, { useMemo } from "react";
import BaseButton from "../Button";
import { BaseButtonProps } from "../Button/baseButton";

interface BasePopoverProps extends PopoverProps {
  label: string | React.ReactNode;
  children: React.ReactNode;
  panelProps?: Partial<PopoverPanelProps & { className: string }>;
  buttonProps?: Partial<BaseButtonProps>;
}

const BasePopover = (props: BasePopoverProps) => {
  const { label, children, panelProps, buttonProps, ...resPopoverProps } =
    props;

  // Anchor props
  // If anchor is a string, it will be converted to object and set the default values
  const anchorProps = useMemo((): PopoverPanelProps["anchor"] => {
    let anchorProps: PopoverPanelProps["anchor"] = {};
    const defaultGap = 20;
    if (typeof panelProps?.anchor === "object") {
      const { gap = defaultGap, ...restAnhorProps } = panelProps.anchor;
      anchorProps = {
        ...restAnhorProps,
        gap,
      };
    } else if (typeof panelProps?.anchor === "string") {
      anchorProps = { to: panelProps?.anchor, gap: defaultGap };
    }

    return anchorProps;
  }, [panelProps?.anchor]);

  const pannelUI = useMemo(() => {
    return classNames(
      "block flex flex-col min-w-56",
      "bg-light-primary dark:bg-dark-primary/90",
      "shadow-md rounded-md",
      "transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0",
      panelProps?.className ?? ""
    );
  }, [panelProps?.className]);

  return (
    <Popover {...resPopoverProps}>
      <PopoverButton as={BaseButton} {...buttonProps}>
        {label}
      </PopoverButton>
      <PopoverPanel
        {...panelProps}
        anchor={anchorProps}
        transition
        className={pannelUI}
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
};

export default BasePopover;
