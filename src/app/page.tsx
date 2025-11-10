import Image from "next/image";
import LottieAnimation from '../components/LottieAnimation';
import Bubble from "@/components/bubble";
import MainButton from "@/components/buttons";

export default function landingPage() {
  return (
    <div className="flex flex-col font-sans">
      <main className="flex flex-col justify-center items-center">
        <Image
          className="bg-transparent"
          src="/LogoTransparent.png"
          alt="Logo for Labora Gruppen AB"
          width={360}
          height= {48}
          priority
        />
        <div>
          <MainButton link="/jobs" label="Söka Jobb"></MainButton>
          <MainButton link="/contacts" label="Hitta Personal"></MainButton>
        </div>
        <div className="flex items-center">
          <p className="text-[#215C5B] w-2xl font-bold text-1xl p-1">
            Vi är passionerade,Kreativa och vi gillar det vi gör.
            Labora Gruppens Kompenetsområden är många med erfaren och auktoriserad personal inom el, måleri och bygg. 
            Vi genomför stora som små servicearbeten till att erbjuda helentrepenad.
            Oavsett vad du behöver hjälp med eller vem du är som kund så ligger vårt focus på att utföra våra tjänster med hög kvalitet med nöjda och återkommande kunder.
            Nedan kan du se vår bredd ionm olika verksamhetsområden. 
          </p>
          <LottieAnimation
            animationPath="/buildAnimation.json"
            style={{ width: 400, height: 400, backgroundcolor: "black"}}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-center align-center bg-white p-3 my-5">
            <div style={{display: "flex", margin: "10px" , justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundImage: 'url("/Electrician.jpg")', backgroundSize: 'cover', width: "auto", height: "auto" ,minHeight: "700px", minWidth: "700px"}}>
              <Bubble title="EL" color="orange" animation="/EL.json"></Bubble>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundImage: 'url("/construction.jpg")', backgroundSize: 'cover', width: "auto", height: "auto", minHeight: "700px", minWidth: "700px"}}>
              <Bubble title="Bygg" color="orange" animation="Bygg.json"></Bubble>
            </div>
          </div>
          <div className="flex flex-row justify-center align-center p-3 m-y-5">
            <div style={{display: "flex", margin: "10px", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundImage: 'url("/malning.jpg")', backgroundSize: 'cover', width: "auto", height: "auto" ,minHeight: "700px", minWidth: "700px"}}>
              <Bubble title="Målning" color="orange" animation="/paint.json"></Bubble>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundImage: 'url("/service.jpg")', backgroundSize: 'cover', width: "auto", height: "auto" ,minHeight: "700px", minWidth: "700px"}}>
              <Bubble title="Service" color="orange" animation="wrench.json"></Bubble>
            </div>
          </div>
        </div>
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
