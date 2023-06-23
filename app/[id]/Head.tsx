"use client";

import Image from "next/image";
import { useState } from "react";

export default function Head({
  word,
  phonetic,
  audio,
}: {
  word: string;
  phonetic: string;
  audio: string;
}) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const wordAudio = new Audio(audio);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-[2rem] font-bold sm:text-2xl">{word}</h1>
        <h2 className="text-cPrimary sm:text-xl">{phonetic}</h2>
      </div>
      <button
        className="w-[3rem] h-[3rem] sm:w-[4.6875rem] sm:h-[4.6875rem] relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => wordAudio.play()}
      >
        {isHovering ? (
          <Image src="/icon-play-hover.svg" alt="Listen" fill />
        ) : (
          <Image src="/icon-play.svg" alt="Listen" fill />
        )}
      </button>
    </div>
  );
}
