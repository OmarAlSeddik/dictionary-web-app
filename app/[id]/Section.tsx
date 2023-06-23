import Link from "next/link";

export default function Section({ meaning }: { meaning: any }) {
  return (
    <div>
      <div className="flex items-center gap-[1.625rem]">
        <h3 className="text-xl font-bold">{meaning.partOfSpeech}</h3>
        <hr className="w-[90%] ml-auto" />
      </div>
      <div className="flex flex-col gap-[1rem] sm:gap-[1.625rem]">
        <h4 className="sm:text-lg text-c5">Meaning</h4>
        <ol className="flex flex-col gap-[0.8125rem]">
          {meaning.definitions.map((definition: any, i: number) => (
            <>
              <li
                key={i}
                className="list-disc ml-[2rem] sm:ml-[3rem] marker:text-cPrimary"
              >
                {definition.definition}
              </li>
              <p className="text-c5 ml-[2rem] sm:ml-[3rem]">
                {definition.example}
              </p>
            </>
          ))}
        </ol>
        <div className="flex flex-col gap-[1.5rem] max-w-[100%]">
          {meaning.synonyms[0] && (
            <h4 className="sm:text-lg text-c5">Synonyms</h4>
          )}
          <div className="flex gap-[1rem] flex-wrap  ml-[2rem] sm:ml-[3rem]">
            {meaning.synonyms.map((synonym: string, i: number) => (
              <Link
                key={i}
                href={`/${synonym}`}
                className="font-bold text-cPrimary mouseHover:hover:!underline"
              >
                {synonym}
              </Link>
            ))}
          </div>
          {meaning.antonyms[0] && (
            <h4 className="sm:text-lg text-c5">Antonyms</h4>
          )}
          <div className="flex gap-[1rem] flex-wrap  ml-[2rem] sm:ml-[3rem]">
            {meaning.antonyms.map((antonym: string, i: number) => (
              <Link
                key={i}
                href={`/${antonym}`}
                className="font-bold text-cPrimary mouseHover:hover:!underline"
              >
                {antonym}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
