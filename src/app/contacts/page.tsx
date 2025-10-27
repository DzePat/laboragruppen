import Image from "next/image";

export default function ContactsPage() {
  return (
    <div className="">
        <div className="flex justify-center items-center h-120 w-full">
          <div className="flex items-center justify-center bg-white h-120 w-4xl rounded-xl opacity-100">
            <div className="flex flex-col pt-10 h-120 w-xs">
              <label className="text-[#F6A74E] p-3 font-bold text-xl">Ont om personal?</label>
              <p className="text-black p-3 font-bold text-sm">Vi erbjuder en kompetent bemanningsverksamhet inom el- och byggsektorn. Vi besitter en mångsidig personalpool som inkluderar allt från ambitiösa lärlingar till erfarna yrkesmän och yrkeskvinnor. Vårt mål är att matcha våra kunders projekt med rätt kompetens och erfarenhet för att säkerställa framgångsrika resultat.</p> 
              <label className="text-[#F6A74E] p-3 font-bold">Telefon: 0761234567</label>
              <label className="text-[#F6A74E] p-3 font-bold">E-mail: example@example.se</label>
            </div>
            <Image
              className="bg-transparent h-70 w-100 rounded-full"
              src="/contactImage.jpg"
              alt="Contacts Image"
              width={300}
              height= {300}
              priority
            />
          </div>
        </div>
    </div>
    )
}