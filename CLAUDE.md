# CLAUDE.md – Læringsportalen

Dette repoet er **Læringsportalen**: interaktive læringsverktøy for elevene til Eirik (lærer i Osloskolen, ungdomsskole). Elevene velger først **fag**, så **tema**. Alt skal være på **norsk (bokmål)**.

---

## 1. Absolutte regler (bryt aldri disse)

1. **Elevene logger aldri inn.** Alt i portalen må fungere uten konto – ingen claude.ai-lenker, ingen innlogging, ingen API-nøkler.
2. **Lenker som deles med elevene kan ikke inneholde «github».** En github.io-lenke fungerte ikke for klassen. Bruk adressen i punkt 4.
3. **Lærermateriell skal ALDRI ligge i dette repoet.** Repoet er offentlig. Ingen fasit til lærerspill, ingen elevnavn, ingen elevpoeng, ingen PIN-koder, ingen lenker til lærerressurser fra elevsidene.
4. **Fakta må være korrekte.** Sjekk fagstoff og fasit nøye. Hvis noe er usikkert: lat være å påstå det, eller marker det.
5. **Lenker elevene får må virke med en gang.** Test navigasjon (forside → fag → tema → tilbake) før du pusher.
6. Eirik liker å **bygge i små steg og sjekke underveis** før man går videre.
7. Vis aldri elevene noe om **fagsamtalen** i KRLE – den skal de ikke informeres om i portalen.

## 2. Publisering og adresse

- Hver push til `main` publiseres.
- **Elevadresse nå:** https://raw.githack.com/krusegull/forste-verdenskrig/main/index.html (githack serverer repoet uten «github» i adressen; kan bruke noen minutter på å vise ny versjon).
- github.io-adressen finnes også, men skal ikke deles med elever.
- **Planlagt:** koble repoet til Vercel med kort navn, forslag `laeringsportalen.vercel.app` (ingen innstillinger trengs – rene statiske filer). Når det er gjort: oppdater adressen her.
- Mulig senere: gi repoet nytt navn (f.eks. `laeringsportalen`) – oppdater da adressen over.
- Githack bruker rå filer: **lenk alltid eksplisitt til `.../index.html`**, ikke til en mappe (`krle/hinduismen/` virker ikke, `krle/hinduismen/index.html` virker).

## 3. Struktur

```
index.html            Forside: velg fag (genereres fra katalog.js)
fag.html?fag=<id>     Temaene i et fag (genereres fra katalog.js)
katalog.js            ALLE fag og temaer – rediger her
portal.css            Felles stil for forside og fagside
README.md             Kort brukerveiledning
samfunnsfag/forste-verdenskrig/   Første verdenskrig (kart + spill)
krle/hinduismen/                  Hinduismen (Reisen + Begrepsreisen)
norsk/sinna-mann/                 Virkemidler i bildebok – Sinna Mann (kort til Konkurranse)
verktoy/konkurranse.html          Felles konkurransemal for ALLE fag/temaer (se 6)
arsakskjeden.html, begrepsjakten.html, krigsarkivet.html,
krigsdagbokene.html, togreisen.html   (i rot) = videresendinger til ny plassering – IKKE slett, gamle elevlenker bruker dem
```

### Legge til fag/tema
- **Nytt tema:** lag mappe `<fag>/<tema>/` med `index.html`, legg en linje i fagets `temaer` i `katalog.js` (`navn`, `ikon`, `beskrivelse`, `lenke` til `.../index.html`). `skjult: true` skjuler et tema.
- **Nytt fag:** kopier en fag-blokk i `katalog.js` (`id` = små bokstaver/bindestrek, `navn`, `ikon`, `farge`, `beskrivelse`, `temaer`).
- Hver temaside skal ha en **tilbake-knapp** til `../../fag.html?fag=<id>`.
- Hver tema-mappe skal ha sin egen `index.html` som startside.

### Tekniske prinsipper
- Hver side er **én selvstendig HTML-fil** (CSS og JS inne i filen). Eneste eksterne avhengigheter: Google Fonts (og d3 i WWI-kartet). Sidene må fungere selv om fontene ikke lastes.
- Fremdrift lagres i elevens nettleser med `localStorage` (alltid i `try/catch`). Brukte nøkler: `fvk-progress` (WWI, index.html), `fvkbgr_*` (WWI Begrepsreisen), `hindu_*` (Reisen), `bgr_*` (KRLE Begrepsreisen), `konk_sett_<id>` og `konk_spill_<id>` (konkurransemalen). Ikke endre nøklene – da mister elevene fremdriften. Siden alle sider deler samme nettsted-opprinnelse, deler de også localStorage – pass på at nye nøkler ikke kolliderer med disse.
- Må fungere på Chromebook/PC (storskjerm) og mobil.

## 4. Samfunnsfag – Første verdenskrig (`samfunnsfag/forste-verdenskrig/`)

For 9. trinn, elevene jobber helt selvstendig. Filer: `index.html` (interaktivt kart år for år 1914–1919 med oppdrag, Norges nøytralitet, lærerboka/quiz – lærerboka-delen har også en læringssti om den russiske revolusjonen), `krigsarkivet.html` (escape room «Krigsarkivet 1914»), `arsakskjeden.html` («Årsakskjeden»), `begrepsjakten.html` (20 begreper, tidsbasert quiz), `begrepsreisen.html` («Begrepsreisen»: samme 20 begreper i 6 «verdener», tre moduser Utforsk/Øv/Test deg – prezi-mønster hentet fra krle/hinduismen/begrepsreisen.html), `krigsdagbokene.html` («Krigens gang»), `togreisen.html`. Eirik ønsker at nye WWI-spill integreres i denne siden, ikke som løsrevne sider. Lenkene mellom filene er relative (`index.html`) – behold dem.

### 4.1 Læreplan: samfunnsfag (LK20, SAF01-05)

Kilde: udir.no, hentet 20.11.2026. Kompetansemål etter 10. trinn (KM-koder) som er relevante for dette temaet – resten av de 19 målene (personlig økonomi, digitale spor, fornorskning av samene, bærekraft osv.) hører til andre temaer i faget og er ikke forventet dekket her:

- **(KM14699)** «gjøre rede for årsaker til og konsekvenser av sentrale historiske og nåtidige konflikter og reflektere over om endringer av noen forutsetninger kunne ha hindret konfliktene» – kjernemålet for hele temaet. Godt dekket: Hendelser, Årsaker/Årsakskjeden, og særlig «Hva hadde du gjort?» (reflekterer direkte over om andre valg kunne hindret/endret utfallet).
- **(KM14705)** «gjøre rede for årsaker til og konsekvenser av terrorhandlinger og folkemord, som holocaust, og reflektere over hvordan ekstreme holdninger og ekstreme handlinger kan forebygges» – delvis dekket (det armenske folkemordet er med som hendelse), men ingen oppgave får elevene til å reflektere over *forebygging* av ekstreme holdninger.
- **(KM14703)** «utforske og beskrive hvordan menneske- og urfolksrettigheter og andre internasjonale avtaler og samarbeid har betydning for nasjonal politikk, menneskers liv og likestilling og likeverd» – Folkeforbundet er nevnt (index.html, begrepsjakten.html), men ikke utdypet som egen oppgave.
- **(KM14700)** «drøfte hvordan framstillinger av fortiden, hendelser og grupper har påvirket og påvirker folks holdninger og handlinger» – delvis dekket via krigsskyldparagrafen/Versailles («Hevn eller forsoning?»), men ingen egen propaganda-/framstillingsoppgave.
- **(KM14701)** «vurdere på hvilke måter ulike kilder gir informasjon om et samfunnsfaglig tema, og reflektere over hvordan algoritmer, ensrettede kilder eller mangel på kilder kan prege forståelsen vår» – **ikke dekket**. Kildene står listet i footeren på index.html, men ingen oppgave får elevene til å vurdere eller sammenligne dem kildekritisk.
- **(KM14702)** «utforske hvordan teknologi har vært og fremdeles er en endringsfaktor, og drøfte innvirkningen teknologien har hatt og har på enkeltmennesker, samfunn og natur» – godt dekket (giftgass, stridsvogner, ubåter, maskingevær er med i flere spill).
- **(KM14704)** «sammenligne hvordan politiske, geografiske og historiske forhold påvirker levekår, bosettingsmønstre og demografi i forskjellige deler av verden i dag» – delvis dekket via «Et nytt kart over Europa», men kobler ikke eksplisitt til situasjonen i verden *i dag*.

Kjerneelement mest relevant: **Samfunnskritisk tenking og samanhengar** (brot/kontinuitet, historisk empati, makt og maktrelasjoner – appens kjerne) og **Demokratiforståing og deltaking** (hvorfor konflikter oppstår og håndteres – «Hva hadde du gjort?» treffer dette presist).

Tverrfaglig tema **Demokrati og medborgerskap** nevner eksplisitt forebygging av ekstreme holdninger/handlinger og terrorisme. Relevant bakgrunn for fascisme/kommunisme-innholdet (22. juli-pensum selv hører ikke hjemme i en WWI-app og skal ikke tas inn her).

**Avvik å være obs på (varsel til Eirik):**
1. Ingen kildekritikk-oppgave (KM14701), selv om kilder listes i footeren.
2. «Militarisme» (våpenkappløp/opprustning) er ikke nevnt som eget begrep noe sted, selv om det tradisjonelt står sammen med nasjonalisme og imperialisme i årsaksforklaringer til krigen. Alliansesystemet dekkes implisitt gjennom hendelsene, men ordet «militarisme» finnes ikke i appen.
3. Folkeforbundet/internasjonale avtaler (KM14703) er nevnt, men har ingen egen oppgave eller stasjon.

Endrer noe av dette seg (nye kompetansemål-koder, ny versjon av læreplanen), oppdater denne seksjonen – ikke stol på hukommelse, sjekk udir.no på nytt.

## 5. KRLE – Hinduismen (`krle/hinduismen/`)

### Bakgrunn
- 9. trinn, **8 uker, én time (ca. 60 min) i uka**, startet november 2026.
- Trinnet har et felles PowerPoint-opplegg (de andre klassene følger det). Eiriks klasse gjør **sitt eget opplegg** rundt disse sidene, men elevene **må kunne alt som står i trinnets PowerPoint** (se 5.4).
- Læreplan: KRLE (LK20), ny versjon **RLE01-04 gjelder fra 1. august 2026** – kompetansemål etter 10. trinn, hinduismen dekkes av «andre religions- og livssynstradisjoner» (mål 1, 2, 6, 7, 8, 9, 10 m.fl.).

### 5.1 Filer
- `index.html` – startside for temaet (to kort: Reisen, Begrepsreisen) + tilbake-knapp til KRLE.
- `reisen.html` – «Hinduismen – en reise i 13 stasjoner»: Prezi-lignende zoomkart, stasjoner med fagtekst, oppgaver (sant/usant, koble, rekkefølge, snukort, refleksjon), begrepsbank, læringsmål. Direktelenke til stasjon: `reisen.html#<id>`.
- `begrepsreisen.html` – «Begrepsreisen»: 39 begreper i 6 «verdener», tre moduser: Utforsk (zoom), Øv (snukort), Test deg (begrepsmatch på tid).

### 5.2 Stasjoner i Reisen (id → tittel)
`hva-er` Hva er hinduismen? · `historie` Historien · `guder` Gud og gudene (inkl. familietre: Shiva+Parvati → Ganesha, Murugan; Vishnu+Lakshmi → avatarene Rama, Krishna) · `symboler` Gudenes symboler (Vishnu og Shiva) · `samsara` Livets kretsløp (atman, samsara, karma, moksha, dharma, tre veier til frelse, fire livsmål, «verden er evig»/syklisk tid, yugaer) · `skrifter` Hellige skrifter · `praksis` Tro i praksis (puja/pudsja, murti, darshan, prasad, templet: ved vann, firkantet, tårn = fjell, innerste rom = hule, prestene, livsriter) · `hoytider` Høytider (Diwali/divali, Holi, Navaratri, Ganesh Chaturthi, Thai Pongal) · `etikk` Leveregler og kaste (leveregler, fire livsfaser, varna, jati, dalit, ahimsa, Gandhi) · `kjonn` Kjønn og samliv · `mangfold` Mangfold og retninger (vaishnavisme, shaivisme – sterkest i Sør-India/blant tamiler, shaktisme; Hare Krishna, yoga, hindunasjonalisme framstilt nøytralt) · `norge` Norge, medier og kilder · `quiz` Sluttquiz (15 spørsmål).

**Fordypning (ikke i trinnets PowerPoint):** `skrifter` (delvis), `kjonn`, Gandhi-delen av `etikk`, hindunasjonalisme, kildekritikk/populærkultur i `norge`.

Begrepene bruker samme navn som læreboka Horisonter 9 / trinnets PowerPoint: «handlingens vei», «erkjennelsens vei», «kjærlighetens vei»; «pudsja» og «divali» står i parentes.

### 5.3 Begrepene i Begrepsreisen (6 verdener)
- **Sjelen og kretsløpet:** Atman, Brahman, Samsara, Gjenfødelse, Karma, Moksha
- **Plikt og leveregler:** Dharma, Ahimsa, Satya, Livsfasene, Varna, Kaste (jati), Dalit
- **Guder og avatarer:** Trimurti, Brahma, Vishnu, Shiva, Avatar, Shakti, Ganesha
- **Tilbedelse og tempel:** Puja, Murti, Darshan, Prasad, Mandir, Mantra, Om
- **Veier og tid:** Handlingens vei, Erkjennelsens vei, Kjærlighetens vei, Syklisk tid, Yuga, Kali yuga
- **Høytider og ritualer:** Diwali, Holi, Navaratri, Samskara, Kremasjon, Pilegrimsreise

Viktige formuleringer som skal holdes konsistente: karma er en lov om årsak og virkning, **ikke** en straff fra en gud · Brahman (alt) ≠ Brahma (skaperguden) · «polyteisme» passer dårlig fordi mange ser gudene som sider ved Brahman · ca. 1,2 milliarder hinduer, verdens tredje største religion, ca. 8 av 10 i India · kastediskriminering forbudt i Indias grunnlov fra 1950 (Ambedkar).

### 5.4 Dette MÅ elevene kunne (fra trinnets PowerPoint)
Sentrale trekk · viktige historiske hendelser · hinduismen i og utenfor India · viktige guder og guddommer · helligdager · kastesystemet · viktige begreper (dharma, samsara, karma, moksha, atman, Brahman) · puja · tre veier til frelse · overgangsritualer · «verden er evig» (syklisk syn) · leveregler · hindutempelet (hva man ser og hører, arkitektur, prestene) · gudenes symboler og familietre.
Trinnets PowerPoint inneholder elevlister – **legg aldri elevnavn i repoet.**

### 5.5 Åttukersplan (ligger som dokument på claude.ai, ikke i repoet)
1. Hva er hinduismen? (stasjon 1–2, tidslinje) · 2. Livets kretsløp og verden er evig (5) · 3. Gud og gudene (3, ekspertpar Ganesha/Krishna/Rama) · 4. Symboler og tre veier (4, 5) · 5. Puja og hindutempelet (7, tegn et tempel) · 6. Høytider og overgangsritualer (8, 7) · 7. Leveregler, kaste og hinduismen i Norge (9, 11, 12) · 8. Repetisjon og vurdering (13 + lærerspill).
Status 20.11.2026: klassen hadde nesten fullført gallery walk-starteren (trinnets slide ~8); neste time = resten av uke 1.

## 6. Konkurransemalen (`verktoy/konkurranse.html`) og Norsk

### Konkurransemalen
- Én felles, **tom** spillmotor (samme format som lærerspillene YUGA/FRONTLINJEN/SI FRA): skjebnehjul (velg selv, tilfeldig lag, lynrunde, dobbel ✖️2, samarbeid, bonus), opptil 7 kategorier × 5 nivåer (100–500), lynspørsmål på nivå 1–5, fire faser som blir vanskeligere, kraftkort, angrep på 500 i finalen, elevnavn, lærer-PIN og lærervisning.
- **Ingen spørsmål eller fasit ligger i repoet.** Læreren lager kategorier, spørsmål, 2–6 svaralternativer, riktig svar, forklaring og bilder i «✏️ Rediger spørsmål». Alt lagres i lærerens nettleser (`konk_sett_<id>`); spilltilstand og elevnavn i `konk_spill_<id>`. «📤 Lagre som fil» / «📥 Hent inn sett» flytter et sett mellom PC-er (JSON med bildene innebygd).
- Bilder kan vises sammen med spørsmålet, i X sekunder før spørsmålet (huskeoppgave) eller etter svaret.
- **Samarbeid:** laget velger et hjelperlag og et spørsmål; riktig svar = 250 poeng, og 250 til hjelperlaget hvis læreren bekrefter at hjelpen bidro. Feil svar koster ingenting.
- **Finnes automatisk i alle fag:** `fag.html` legger til et 🏆 Konkurranse-kort sist i hvert fag (`?sett=<fag>&fag=<fag>&tilbake=../fag.html?fag=<fag>`). Nye fag i `katalog.js` får kortet uten mer arbeid.
- **Flere sett per fag:** på startskjermen velger læreren spørsmålssett i en meny eller lager et nytt («＋ Nytt sett» → id `<fag>-<navn>`). Menyen viser alle sett i nettleseren som hører til faget (`<fag>` og `<fag>-*`), også sett som åpnes fra en temaside.
- **Lenke fra en temaside (valgfritt):** `../../verktoy/konkurranse.html?sett=<fag>-<tema>&tilbake=../<fag>/<tema>/index.html` – brukes av Sinna Mann.
- Merk: raw.githack.com er et delt nettsted, så det som ligger i localStorage der, kan i prinsippet leses av andre sider på samme adresse. Når portalen flyttes til egen adresse (Vercel), er dette løst.

### Norsk – Virkemidler i bildebok – Sinna Mann (`norsk/sinna-mann/`)
- Bildebok av Gro Dahle (tekst) og Svein Nyhus (bilder), Cappelen 2003. Fokus: kontrast, besjeling, personifikasjon, sammenligning, metafor, motiv og tema.
- `index.html` har ett kort: **Konkurranse** (`sett=norsk-sinna-mann`).
- Det ferdige spørsmålssettet (62 spørsmål, med Eiriks egne bilder fra boka) er levert til Eirik som fil (`sinna-mann-konkurranse.json`) og hentes inn med «📥 Hent inn sett». **Fila skal aldri legges i repoet** – den inneholder fasit og bilder fra en opphavsrettsbeskyttet bok.

## 7. Lærerressurser som IKKE ligger her (bare lenker for Eirik – aldri til elevene)

Disse ligger privat på claude.ai (krever Eiriks innlogging):
- **YUGA – begrepskampen (lærerspill, 2–8 grupper, elevnavn, elevpoeng bak PIN):** https://claude.ai/artifact/PKupCR918BZG6BtdT3pJxP
  – skjebnehjul (velg selv, tilfeldig gruppe, lynrunde, dobbel karma, Lakshmis gave), 6 kategorier × 5 vanskelighetsgrader (100–500) + lynspørsmål, runder = yugaer (Satya→Treta→Dvapara→Kali, vanskeligere for hver), 500 i Kali yuga = stjel 300 poeng, kraftkort (Ganesha 50/50, Hanuman nytt forsøk, Vishnus skjold), angre, lagring, lærervisning med kopi til Excel. Fasit er gjennomgått.
- **Samsara – kappløpet mot moksha (lagspill på storskjerm):** https://claude.ai/artifact/3zn6aPMhuvu1v4K46A2NFQ
- **FRONTLINJEN – kunnskapskampen, første verdenskrig (lærerspill, samme mekanikk som YUGA):** https://claude.ai/artifact/S8tATzQpKh4FrqKU6L7hJZ
  – skjebnehjul (velg selv, tilfeldig lag, lynrunde, storoffensiv ✖️2, forsyninger), 5 kategorier (Årsaker og allianser, Krigføring og teknologi, Norge og hjemmefronten, Den russiske revolusjonen, Fredsoppgjøret) × 5 vanskelighetsgrader (100–500) + lynspørsmål, runder = krigens faser (1914→1915–16→1917→1918, vanskeligere for hver), 500 i 1918-fasen = angrip og stjel 300 poeng, maktkort (Speiderrapport 50/50, Feltlegen nytt forsøk, Skyttergraven stopper angrep), elevnavn/PIN/lærervisning identisk med YUGA. Fasit bygger på samme kilder som samfunnsfag/forste-verdenskrig/ (Arena 9, trinnets PowerPoint).
- **SI FRA – virkemiddelkampen om «Sinna Mann» (lærerspill med bilder fra boka):** https://claude.ai/artifact/4cJ5Jj4NspgDBA68hLxoeV – samme innhold som importfila til konkurransemalen.
- **TROSS – diktkampen om «Aust-Vågøy» (Inger Hagerup):** https://claude.ai/artifact/Wo3qEWX8yEuEnKE2ni1GH1
- **Åttukersplan (dokument):** https://claude.ai/artifact/4sW9FBbQJ1BJwH3dg3fMnQ
- **Første versjon av Reisen (claude.ai):** https://claude.ai/artifact/P4YMx4XFx8KGyRCaRp8UtR og Begrepsreisen: https://claude.ai/artifact/HkXQb5qe4h8pgsATXSDYFW – **repoet er nå hovedversjonen**; gjør endringer her.
- **PowerPoint «Hinduismen på 5 minutter»** (`Hinduismen_begreper.pptx`, 11 lysbilder, egne illustrasjoner, manus i notatene) – levert til Eirik som fil.

Hvis lærerspill skal videreutvikles i Claude Code: legg dem i et **privat** repo (aldri dette).

## 8. Stil
- Varme farger for KRLE/hinduismen (safran `#e8871e`, rødbrun `#8c2f39`, gull), mørk nattehimmel for spill. Samfunnsfag/WWI har sin egen stil – behold den.
- Overskrifter: Fraunces (serif), brødtekst: Nunito. Store, tydelige knapper; tastatursnarveier der det passer.
- Hver oppgave gir forklaring etter svar, så elevene lærer underveis.
