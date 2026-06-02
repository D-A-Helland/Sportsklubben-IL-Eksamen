# Universell utforming

## Innledning

Nettsiden til Sportsklubben IL til minecraft serveren deres skal kunne bli brukt av så mange som mulig. Minecraft er jo også et spill følger flere av retningslinjene til WCAG (Web Content Accessibillity Guidelines). Derfor syns vi det var viktig å følge WCAG retningslinjer så godt som mulig for nettsiden også.

WCAG består av fire prinsipper, disse er at nettsiden må være: 

1. Mulig å oppfatte
2. Mulig å betjene
3. Forståelig
4. Robust

## Hva vi får gratis

Når vi bruker Nuxt sammen med Nuxt UI får vi mye universell utforming "gratis" uten å måtte implementere alt selv. Denne teknologistacken gir blant annet god tastaturnavigasjon, fokusstyring og støtte for ARIA-attributter.

Det er likevel viktig å tenke på universell utforming under utviklingen. Derfor har jeg prøvd å bruke semantiske komponenter og tagger, som for eksempel `<UHeader>` og `<UContainer>`, fremfor generiske `<div>`-elementer der det gir mening. Dette gir nettsiden en tydeligere struktur, gjør den lettere å bruke med hjelpemidler og bidrar samtidig til en mer ryddig og vedlikeholdbar kodebase.
## Kontrast

Med NUXT/UI har mesteparten av innholdet nok kontrast, kun linkene i navigasjonsbaren og dataen i tabeller hadde for liten kontrast og måtte endres manuelt.
