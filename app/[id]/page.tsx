import Section from "./Section";
import Head from "./Head";

async function getWordData(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  return res.json();
}

export default async function Word({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getWordData(id);

  if (!data[0])
    return (
      <div className="flex flex-col items-center">
        <div className="mb-[1.5rem] font-bold text-lg text-center">
          {data.title}
        </div>
        <div className="text-center text-c5">
          {data.message} {data.resolution}
        </div>
      </div>
    );

  const word = data[0].word;
  const meanings = data[0].meanings;
  let phonetic;
  let audio;

  for (const currentPhonetic of data[0].phonetics) {
    if (currentPhonetic.audio) {
      phonetic = currentPhonetic.text;
      audio = currentPhonetic.audio;
      break;
    }
  }

  return (
    <main className={`flex flex-col gap-[2rem] sm:gap-[2.5rem]`}>
      <Head word={word} phonetic={phonetic} audio={audio} />
      {meanings.map((meaning: any, i: number) => (
        <Section key={i} meaning={meaning} />
      ))}
    </main>
  );
}
