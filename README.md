# Læringsportalen

Interaktive læringsverktøy for elevene, sortert etter fag og tema.

- `index.html` – forsiden der eleven velger fag
- `fag.html?fag=<id>` – temaene i et fag
- `katalog.js` – **listen over fag og temaer. Her legger du til nye fag og temaer.**
- `samfunnsfag/forste-verdenskrig/` – Første verdenskrig
- `krle/hinduismen/` – Hinduismen
- `norsk/sinna-mann/` – Virkemidler i bildebok – Sinna Mann
- `verktoy/konkurranse.html` – konkurransemal som kan brukes i alle fag (læreren lager spørsmålene selv; de lagres bare i lærerens nettleser)

## Legge til et nytt tema
1. Lag en mappe under faget, f.eks. `krle/islam/`, med en `index.html`.
2. Legg til temaet i fagets `temaer`-liste i `katalog.js`.

## Legge til et nytt fag
Kopier en fag-blokk i `katalog.js` og endre `id`, `navn`, `ikon`, `farge` og `beskrivelse`.

Lærermateriell (spill med fasit, elevpoeng o.l.) skal ikke ligge her – alt i dette repoet er åpent for alle.
