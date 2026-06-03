# Visjon

## Historikk over godkjent tilgang

Originalt hadde vi planlagt å lagre historikk over godkjente forepørsler om tilgang, men vi valgte å ikke lage dette for å fokusere på dokumentasjon.

Dette ville vi gjort ved å ha en 'godkjent' kolonne i tickets tabellen, denne ville vi brukt til å vise tickets som ikke enda var godkjent på en admin side og så ha en annen admin side der man kunne se godkjente tickets med timestamp på når den var oprettet og godkjent.

Istedenfor valgte vi å slette godkjente tickets.

## Starte og stoppe serveren

Vi ønsker at alle som har godkjent tilgang skal få muligheten til å starte serveren fra den store knappen på info siden. Og at admin skal ha en egen knapp for å stoppe, en for å blokkere, og en for å blokkere vanlige brukere med adgang fra å starte serveren.

## Administrering av brukerroller

Det går for øyeblikket bare ann for administratorer å slette brukere og se på brukerprofiler, men hadde vi fortsatt med utviklingen av prosjektet hadde vi lagt til muligheten for administratorer å endre på rollen til andre brukere.

## Reaktivitet når ber om tilgang

Vi har bare lagt til en redirect som sender brukeren fra tilgangsforespørselssiden til hjemmesiden når de har bedt om tilgang, men hadde vi hatt mer tid hadde vi heller vist en melding på skjermen som fortalte brukeren om de hadde en pågående fårespørsel.

## Personvernsrisiko

Når vi testet nettsiden senere i prosjketet fant vi ut av at hvem som helst kan lage en bruker, og så skrive inn /profile etterfulgt av ID'en til hviklen som helst bruker som er registrert.

Dette fikk vi desverre ikke tid til å fikse men jeg kan forklare nøyaktig hvordan vi ville gjort det.

Inne i /app/middleware ville vi ha laget en fil som heter profile.global.ts

I denne filen ville vi ha fått tak i den innloggede brukeren med /server/api/auth/me. Der ville vi funnet ID-en og om brukeren var administrator

Brukeren ville bare ha fått lov til å gå inn i profilen hvis ID-en til profilen var lik den ID-en til brukeren som var innlogget, administratorer ville ha hatt tilgang til alle profiler og uinloggede brukere ville ikke hatt tilgang til profiler.

## Inputvalidering

Når man fyller ut skjemaet for å registrere en bruker er det ingen validering for at man skriver inn en gyldig e-post ellet telefonnummer.
