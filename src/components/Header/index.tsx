import Image from "next/image";
import React from "react";
import ThemeSelector from "../Base/ThemeSelector";

const Header = () => {
  return (
    <div className="flex-none w-full h-14 sticky top-0 bg-light- z-50 px-8 py-3 dark:bg-dark-primary">
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
