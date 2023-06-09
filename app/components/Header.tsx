"use client";

import Image from "next/image";
import { useAppContext } from "../AppContext";

export default function Header() {
  const { toggleTheme } = useAppContext();

  return (
    <div className="flex flex-col gap-[1.5rem] sm:gap-[3.375rem]">
      <div className="flex items-center h-[2rem]">
        <div className="w-[2rem] h-[2.25rem] relative">
          <Image src="/logo.svg" alt="Logo" fill />
        </div>
        <button className="flex items-center gap-[1rem] sm:gap-[1.125rem] ml-auto">
          <span className="font-bold">Sans Serif</span>
          <div className="w-[0.75rem] h-[0.375rem] relative">
            <Image src="/icon-arrow-down.svg" alt="Arrow Down" fill />
          </div>
        </button>
        <div className="bg-c6 h-full mx-[1rem] sm:mx-[1.625rem] w-px" />
        <button
          className="w-[2.5rem] h-[1.25rem] bg-c5 rounded-[0.625rem]
          p-[0.1875rem] mr-[1.25rem] dark:bg-cPrimary transition-all"
          onClick={toggleTheme}
        >
          <div className="rounded-full w-[0.875rem] h-[0.875rem] bg-white dark:ml-[1.25rem] transition-all" />
        </button>
        <button className="w-[1.25rem] h-[1.25rem] relative">
          <Image src="/icon-moon.svg" alt="Theme" fill />
        </button>
      </div>
      <div className="bg-c7 rounded-[1rem]  flex h-[3rem] sm:h-[4rem] dark:bg-c2">
        <input
          type="text"
          className="flex-grow px-[1.5rem] font-bold bg-transparent outline-none text-c3 dark:text-white"
          placeholder="Search a Word"
        />
        <button className="flex items-center px-[1.5rem] ">
          <div className="h-[1rem] w-[1rem] relative">
            <Image src="/icon-search.svg" alt="Search" fill />
          </div>
        </button>
      </div>
    </div>
  );
}
