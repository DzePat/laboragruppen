import Image from "next/image";

export default function JobsPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen gap-16 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <form className="flex flex-col items-center">
            <label className="text-bold text-[#F6A74E] text-[40px] mb-6">Ansökan</label>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 pu-2">FÖRNAMN*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 pu-2">EFTERNAMN*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 pu-2">E-POSTADRESS*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 pu-2">TELEFONNUMMER*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 pu-2">ADRESS*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 pu-2">STAD*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="pl-2 pu-2">LÄNK TILL DIN LINKEDIN*</label>
              <input placeholder="www.linkedin.com/" type="text" className="bg-white text-black m-2 w-[658px] h-10 p-2"/>
            </div>
            <div className="flex flex-col">
              <label className="pl-2 pu-2">EXAMPLE*</label>
              <textarea className="bg-white w-[658px] h-20"></textarea>
            </div>
          </form>  
        </main>
    </div>
    )
}