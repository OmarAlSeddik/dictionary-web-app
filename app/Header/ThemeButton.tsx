"use client";

import Image from "next/image";
import { useAppContext } from "../AppContext";

export default function ThemeButton() {
  const { toggleTheme } = useAppContext();

  return (
    <>
      <button
        className="w-[2.5rem] h-[1.25rem] bg-c5 rounded-[0.625rem]
  p-[0.1875rem] mr-[1.25rem] dark:bg-cPrimary transition-all"
        onClick={toggleTheme}
      >
        <div className="rounded-full w-[0.875rem] h-[0.875rem] bg-white dark:ml-[1.25rem] transition-all" />
      </button>
      <button className="w-[1.25rem] h-[1.25rem] relative">
        <Image
          src="/icon-moon.svg"
          alt="Theme"
          fill
          className="transition-all dark:moonDark"
        />
      </button>
    </>
  );
}
