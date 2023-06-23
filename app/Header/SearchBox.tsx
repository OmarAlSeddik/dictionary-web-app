"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const pathname = usePathname().slice(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250);

    return () => {
      clearTimeout(debounceId);
    };
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm(pathname);
  }, [pathname]);

  useEffect(() => {
    router.replace(debouncedSearchTerm);
  }, [debouncedSearchTerm, router]);

  return (
    <div className="bg-c7 rounded-[1rem]  flex h-[3rem] sm:h-[4rem] dark:bg-c2 transition-all">
      <input
        type="text"
        className="flex-grow px-[1.5rem] font-bold bg-transparent outline-none text-c3 dark:text-white transition-all"
        placeholder="Search a Word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="flex items-center px-[1.5rem] ">
        <div className="h-[1rem] w-[1rem] relative">
          <Image src="/icon-search.svg" alt="Search" fill />
        </div>
      </button>
    </div>
  );
}
