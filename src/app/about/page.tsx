import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="font-sans">
      <main className="flex flex-col justify-center items-center">
        <label className="p-3 text-xl font-bold"> Om oss</label>
          <p className="pt-3 pb-3 w-6xl">Laboragruppen AB är en ny aktör inom el- och byggbranschen med specialiserad expertis inom elinstallationer och måleri. 
            Vårt företag erbjuder ett omfattande utbud av installationstjänster och måleri för både privata och kommersiella projekt. 
            Vårt mål är att leverera högkvalitativa lösningar som möter våra kunders unika behov. Laboragruppen AB är även erkänd för vår kompetenta bemanningsverksamhet inom el- och byggsektorn. 
            Vi erbjuder en mångsidig personalpool som inkluderar allt från ambitiösa lärlingar till erfarna yrkesmän och yrkeskvinnor. 
            Vårt mål är att matcha våra kunders projekt med rätt kompetens och erfarenhet för att säkerställa framgångsrika resultat. 
          </p>
          <div className="flex p-3">
            <div className="flex flex-col w-sm">
              <label className="font-bold text-xl">Installationstjänster</label>
              <p className="pt-3">
                Våra installationstjänster omfattar elektriska system, belysning, kraftdistribution, säkerhetssystem och mycket mer. 
                Vårt team av erfarna elektriker och tekniker är skickliga inom utformning och implementering av lösningar som är energieffektiva, pålitliga och i linje med de senaste branschstandarderna.
              </p>
            </div>
            <div className="flex flex-col w-sm">
              <label className="font-bold text-xl">Måleritjänster</label>
              <p className="pt-3">
                Vi erbjuder breda måleritjänster som omfattar invändig och utvändig målning, tapetsering, industri och mycket mer. 
                Våra erfarna målare har bred kompetens där kvalitét och servicekänsla står i fokus. 
                Vi prioriterar punktlighet och god kommunikation med våra kunder, och strävar alltid efter bästa resultat.
              </p>
            </div>
            <div className="flex flex-col w-sm">
              <label className="font-bold text-xl">Bemanningstjänster</label>
              <p className="pt-3">
                Vi erbjuder flexibla bemanningslösningar som passar olika behov, projektstorlekar och krav. 
                Vårt breda utbud av kunnig och ambitiös personal ger våra kunder möjlighet att välja mellan olika prisnivåer beroende på projektets omfattning och budget. 
                Oavsett om det handlar om korttidsuppdrag eller längre projekt, strävar vi alltid efter att erbjuda kompetenta och pålitliga medarbetare.
              </p>
            </div>
          </div>
      </main>
    </div>
    )
}