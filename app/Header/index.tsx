"use client";

import Image from "next/image";
import { useAppContext } from "../AppContext";
import FontButton from "./FontButton";
import SearchBox from "./SearchBox";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const { font } = useAppContext();
  const fontClass = `
  ${
    font == "sans" ? "font-sans" : font == "serif" ? "font-serif" : "font-mono"
  }`;

  return (
    <div
      className={`flex flex-col gap-[1.5rem] sm:gap-[3.375rem] ${fontClass}`}
    >
      <div className="flex items-center h-[2rem]">
        <div className="w-[2rem] h-[2.25rem] relative">
          <Image src="/logo.svg" alt="Logo" fill />
        </div>
        <FontButton />
        <div className="bg-c6 h-full mx-[1rem] sm:mx-[1.625rem] w-px" />
        <ThemeButton />
      </div>
      <SearchBox />
    </div>
  );
}
