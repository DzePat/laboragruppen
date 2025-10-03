import Image from "next/image";
import Link from "next/link";

export default function landingPage() {
  return (
    <div className="flex flex-col font-sans">
      <main className="flex flex-col justify-center items-center">
        <Image
          className="bg-transparent"
          src="/logo.png"
          alt="Next.js logo"
          width={360}
          height= {48}
          priority
        />
        <p className="w-7xl font-bold text-2xl p-10">
          Vi är passionerade,Kreativa och vi gillar det vi gör.
         Labora Gruppens Kompenetsområden är många med erfaren och auktoriserad personal inom el, måleri och bygg. 
         Vi genomför stora som små servicearbeten till att erbjuda helentrepenad.
         Oavsett vad du behöver hjälp med eller vem du är som kund så ligger vårt focus på att utföra våra tjänster med hög kvalitet med nöjda och återkommande kunder.
        Nedan kan du se vår bredd ionm olika verksamhetsområden. </p>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
