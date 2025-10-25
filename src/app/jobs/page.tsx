'use client';

import MyDropzone from "@/components/dropzone"
import { useState } from "react";

export default function JobsPage() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen gap-16 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <form className="flex flex-col items-center">
            <label className="text-bold text-[#F6A74E] text-[40px] mb-6">Ansökan</label>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 py-2">FÖRNAMN*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 py-2">EFTERNAMN*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 py-2">E-POSTADRESS*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 py-2">TELEFONNUMMER*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="pl-2 py-2">ADRESS*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
              <div className="flex flex-col">
                <label className="pl-2 py-2">STAD*</label>
                <input placeholder="Förnamn" type="text" className="bg-white text-black m-2 w-xs h-10 p-2"/>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="pl-2 py-2">LÄNK TILL DIN LINKEDIN*</label>
              <input placeholder="www.linkedin.com/" type="text" className="bg-white text-black m-2 w-[658px] h-10"/>
            </div>
            <div className="flex flex-col">
              <label className="pl-2 py-2">EXAMPLE*</label>
              <textarea className="bg-white w-[658px] h-20"></textarea>
            </div>
            <div className="flex flex-col w-full py-2 pl-2">
              <label className="pl-2 py-2">EXAMPLE CHOICE*</label>
              <div className="pl-2 py-2">
                <input className="m-1" name="test" type="radio"></input>
                <label>Example 1</label>
              </div>
              <div className="pl-2 py-2">
                <input className="m-1" name="test" type="radio"></input>
                <label>Example 2</label>
              </div>
              <div className="pl-2 py-2">
                <input className="m-1" name="test" type="radio"></input>
                <label>Example 3</label>
              </div>
            </div>
            <MyDropzone files={files} setFiles={setFiles}></MyDropzone>
            <button className="border-2 border-solid border-white rounded-xl bg-[#F6A74E] font-bold text-lg text-[#000000] w-2xs h-10 cursor-pointer hover:bg-[#F8bc78] m-2">
              Skicka
            </button>
          </form>  
        </main>
    </div>
    )
}