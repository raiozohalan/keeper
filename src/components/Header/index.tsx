"use client";

import Image from "next/image";
import React from "react";
import ThemeSelector from "../Base/ThemeSelector";
import classNames from "@/helpers/classNames";

const Header = () => {
  return (
    <div
      className={classNames(
        "flex-none flex justify-between w-full h-14",
        "sticky top-0 z-50 px-8 py-3",
        "bg-light-primary dark:bg-dark-primary"
      )}
    >
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-md overflow-hidden">
          <Image
            src="/assets/keeper-logo-white-192.jpg"
            alt="Keeper"
            width={32}
            height={32}
            className=""
          />
        </div>
        <h2 className="font-extrabold">KEEPER</h2>
      </div>
      <div className="flex gap-2 items-center">
        <ThemeSelector />
      </div>
    </div>
  );
};

export default Header;
