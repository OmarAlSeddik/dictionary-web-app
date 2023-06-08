import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-[2rem] sm:gap-[2.5rem]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-[2rem] font-bold sm:text-2xl">keyboard</h1>
          <h2 className="text-cPrimary sm:text-xl">/ˈkiːbɔːd/</h2>
        </div>
        <button className="w-[3rem] h-[3rem] sm:w-[4.6875rem] sm:h-[4.6875rem] relative">
          <Image src="/icon-play.svg" alt="Listen" fill />
        </button>
      </div>
      <div className="flex items-center gap-[1.625rem]">
        <h3 className="text-xl font-bold">noun</h3>
        <hr className="w-[90%] ml-auto" />
      </div>
      <div className="flex flex-col gap-[1rem] sm:gap-[1.625rem]">
        <h4 className="sm:text-lg text-c5">Meaning</h4>
        <ol className="flex flex-col gap-[0.8125rem]">
          <li className="list-disc ml-[2rem] sm:ml-[3rem] marker:text-cPrimary">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li className="list-disc ml-[2rem] sm:ml-[3rem] marker:text-cPrimary">
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li className="list-disc ml-[2rem] sm:ml-[3rem] marker:text-cPrimary">
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ol>
        <div className="flex gap-[1.5rem]">
          <h4 className="sm:text-lg text-c5">Synonyms</h4>
          <p className="font-bold cursor-pointer text-cPrimary">
            electronic keyboard
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[1.625rem]">
        <h3 className="text-xl font-bold">verb</h3>
        <hr className="w-[90%] ml-auto" />
      </div>
      <div className="flex flex-col gap-[1rem] sm:gap-[1.625rem]">
        <h4 className="sm:text-lg text-c5">Meaning</h4>
        <ol className="flex flex-col gap-[0.8125rem]">
          <li className="list-disc ml-[2rem] sm:ml-[3rem] marker:text-cPrimary">
            To type on a computer keyboard.
          </li>
          <p className="text-c5 ml-[2rem] sm:ml-[3rem]">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </ol>
      </div>
      <hr />
      <div className="flex gap-[1.25rem] items-center">
        <h4 className="text-sm text-c5">Source</h4>
        <div className="flex gap-[0.5rem]">
          <Link
            className="text-sm"
            href="https://en.wiktionary.org/wiki/keyboard"
            target="_blank"
          >
            https://en.wiktionary.org/wiki/keyboard
          </Link>
          <div className="w-[0.75rem] h-[0.75rem] relative">
            <Image src="/icon-new-window.svg" alt="New Window" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
