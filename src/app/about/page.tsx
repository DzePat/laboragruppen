import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col justify-center items-center p-3">
        <label className="text-xl p-3"> Om oss</label>
        <p>Laboragruppen AB är en ny aktör inom el- och byggbranschen med specialiserad expertis inom elinstallationer och måleri. Vårt företag erbjuder ett omfattande utbud av installationstjänster och måleri för både privata och kommersiella projekt. Vårt mål är att leverera högkvalitativa lösningar som möter våra kunders unika behov. Laboragruppen AB är även erkänd för vår kompetenta bemanningsverksamhet inom el- och byggsektorn. Vi erbjuder en mångsidig personalpool som inkluderar allt från ambitiösa lärlingar till erfarna yrkesmän och yrkeskvinnor. Vårt mål är att matcha våra kunders projekt med rätt kompetens och erfarenhet för att säkerställa framgångsrika resultat. </p>
        </main>
    </div>
    )
}