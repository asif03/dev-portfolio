"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <div className="h-8 w-9 rounded-[32px] bg-[#F4F4F4] dark:bg-[#111315] sm:flex sm:items-center sm:justify-center">
        <button
          onClick={toggleTheme}
          className="flex h-7 w-8 items-center justify-center rounded-full bg-[#FCFCFC] dark:bg-[#272B30]"
        >
          <BsSun
            className="hidden fill-white  dark:block"
            width={20}
            height={20}
          />
          <BsMoon
            className="block fill-[#444444] dark:hidden"
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default ToggleSwitch;
