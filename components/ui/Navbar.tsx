import Image from "next/image";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 flex h-24 w-full items-center px-2">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="">
          <Image src="/logo.png" width={120} height={36} alt="Logo" />
        </div>
        <div>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
