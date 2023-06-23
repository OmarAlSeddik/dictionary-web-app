"use client";

import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "../AppContext";

export default function FontButton() {
  const { font, changeFont } = useAppContext();
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative ml-auto">
      <button
        className="flex items-center gap-[1rem] sm:gap-[1.125rem]"
        onClick={toggle}
      >
        <span className="font-bold">
          {font == "sans" && "Sans Serif"}
          {font == "serif" && "Serif"}
          {font == "mono" && "Mono"}
        </span>
        <div className="w-[0.75rem] h-[0.375rem] relative">
          <Image src="/icon-arrow-down.svg" alt="Arrow Down" fill />
        </div>
      </button>
      {isActive && (
        <div
          className="shadow-light dark:shadow-dark h-[9.5rem] flex flex-col gap-[1rem] items-start
        w-[11.4375rem] rounded-[1rem] bg-white absolute bottom-[-1rem]
        p-[1.5rem] right-0 z-50 translate-x-[25%] translate-y-[100%] dark:bg-c2"
        >
          <button
            className="font-sans text-base font-bold mouseHover:hover:text-cPrimary"
            onClick={() => {
              changeFont("sans");
              toggle();
            }}
          >
            Sans Serif
          </button>
          <button
            className="font-serif text-base font-bold mouseHover:hover:text-cPrimary"
            onClick={() => {
              changeFont("serif");
              toggle();
            }}
          >
            Serif
          </button>
          <button
            className="font-mono text-base font-bold mouseHover:hover:text-cPrimary"
            onClick={() => {
              changeFont("mono");
              toggle();
            }}
          >
            Mono
          </button>
        </div>
      )}
    </div>
  );
}
