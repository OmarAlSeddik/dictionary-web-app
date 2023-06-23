import Image from "next/image";

export default function SearchBox() {
  return (
    <div className="bg-c7 rounded-[1rem]  flex h-[3rem] sm:h-[4rem] dark:bg-c2 transition-all">
      <input
        type="text"
        className="flex-grow px-[1.5rem] font-bold bg-transparent outline-none text-c3 dark:text-white transition-all"
        placeholder="Search a Word"
      />
      <button className="flex items-center px-[1.5rem] ">
        <div className="h-[1rem] w-[1rem] relative">
          <Image src="/icon-search.svg" alt="Search" fill />
        </div>
      </button>
    </div>
  );
}
