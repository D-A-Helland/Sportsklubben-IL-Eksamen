# Oppsettveiledning

## Dette dokumentet er en veiledning for hvordan man setter opp nettsiden til Sportsklubben IL

### 1. Last ned prosjektet

Last ned kildefilene fra GitHub, eller last ned ZIP-filen og pakk den ut på ønsket plassering.

### 2. Installer Node.js hvis du ikke har det

Sørg for at Node.js er installert på maskinen. Dette kan verifiseres ved å kjøre:

```bash
node -v
npm -v
```

### 3. Installer prosjektavhengigheter

Åpne en terminal i prosjektmappen og kjør:

```bash
npm install
```

Dette installerer alle nødvendige pakker som prosjektet er avhengig av.

### 4. Sett opp databasen

Opprett en PostgreSQL-database og oppdater `.env`-filen med riktig tilkoblingsstreng:

```env
DATABASE_URL="postgresql://brukernavn:passord@localhost:5432/sportsklubben"
```

### 5. Generer Prisma Client

Kjør følgende kommando:

```bash
npx prisma generate
```

### 6. Opprett databasetabeller

Kjør SQL-skriptet som følger med prosjektet, eller bruk Prisma-migrasjoner dersom disse er inkludert:

```bash
npx prisma migrate deploy
```

eller

```bash
npx prisma migrate dev
```

### 7. Start utviklingsserveren

Start nettsiden med:

```bash
npm run dev
```

Prosjektet vil da være tilgjengelig på:

```text
http://localhost:3000
```

### 8. Opprett administratorbruker

Registrer en bruker gjennom nettsiden og oppdater rollen i databasen til `admin` for å få tilgang til administrasjonspanelet.

### 9. Verifiser installasjonen

Kontroller at:

* Registrering fungerer
* Innlogging fungerer
* Brukerprofiler kan vises
* Tilgangsforespørsler kan opprettes
* Administrator kan godkjenne forespørsler

Dersom alle punktene fungerer, er nettsiden satt opp korrekt.
