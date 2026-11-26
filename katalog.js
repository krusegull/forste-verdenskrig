/* =====================================================================
   KATALOG OVER FAG OG TEMAER
   ---------------------------------------------------------------------
   Slik legger du til et nytt FAG:
     Kopier en hel fag-blokk { ... } nedenfor, lim den inn etter den siste,
     og endre id, navn, ikon, farge og beskrivelse.
     id brukes i adressen (bare små bokstaver, tall og bindestrek).

   Slik legger du til et nytt TEMA i et fag:
     1. Lag en mappe for temaet, f.eks. krle/islam/, med en index.html.
     2. Legg til en linje i fagets "temaer"-liste:
        { navn: "Islam", ikon: "🕌", beskrivelse: "Kort tekst", lenke: "krle/islam/index.html" },
     Sett  skjult: true  på et tema for å skjule det for elevene.
   ===================================================================== */

const KATALOG = [
  {
    id: "samfunnsfag",
    navn: "Samfunnsfag",
    ikon: "🌍",
    farge: "#1d4ed8",
    beskrivelse: "Historie, geografi og samfunnskunnskap",
    temaer: [
      {
        navn: "Første verdenskrig",
        ikon: "🪖",
        beskrivelse: "Kart, krigsarkivet, årsakskjeden, krigsdagbøkene, togreisen og begrepsjakten",
        lenke: "samfunnsfag/forste-verdenskrig/index.html"
      },
      {
        navn: "Den kalde krigen",
        ikon: "🧊",
        beskrivelse: "Reisen i 13 stasjoner og konkurransen JERNTEPPET – forberedelse til prøven",
        lenke: "samfunnsfag/kalde-krigen/index.html"
      },
      {
        navn: "Nyheter i verden",
        ikon: "📰",
        beskrivelse: "Konkurransen NYHETSKAMPEN – nyheter høsten 2026 + pensum i samfunnsfag, KRLE, matte, norsk og kroppsøving",
        lenke: "samfunnsfag/nyheter/index.html"
      }
    ]
  },
  {
    id: "krle",
    navn: "KRLE",
    ikon: "🕉️",
    farge: "#8c2f39",
    beskrivelse: "Kristendom, religion, livssyn og etikk",
    temaer: [
      {
        navn: "Hinduismen",
        ikon: "🪷",
        beskrivelse: "Utforsk hinduismen i 13 stasjoner og øv på de viktigste begrepene",
        lenke: "krle/hinduismen/index.html"
      }
    ]
  },
  {
    id: "norsk",
    navn: "Norsk",
    ikon: "📚",
    farge: "#2e6a8a",
    beskrivelse: "Lesing, skriving, språk og litteratur",
    temaer: [
      {
        navn: "Virkemidler i bildebok – Sinna Mann",
        ikon: "📖",
        beskrivelse: "Kontrast, besjeling, personifikasjon, sammenligning, metafor, motiv og tema",
        lenke: "norsk/sinna-mann/index.html"
      },
      {
        navn: "Dikttolkning – «Aust-Vågøy»",
        ikon: "✍️",
        beskrivelse: "Øving til tentamen: motiv og tema, oppbygging og virkemidler i diktet av Inger Hagerup",
        lenke: "norsk/aust-vagoy/index.html"
      }
    ]
  }
];
