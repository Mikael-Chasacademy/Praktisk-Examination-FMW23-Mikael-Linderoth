# MickeMovies

MickeMovies är en webbapplikation som visar populära filmer och låter användaren söka efter filmer samt spara favoriter. Applikationen använder React, Redux, Tailwind CSS, och Vite för frontend och har en integration med The Movie Database (TMDb) API för att hämta filminformation. Applikationen är SEO-optimerad med React Helmet och spårar användarinteraktioner med Google Tag Manager och Google Analytics.

- Innehåll
- Installation
- Användning
- Sök efter filmer
- Favoritlista
- Google Tag Manager och Analytics
- Testning med Cypress
- Bygg och deploy
- Installation
- Klona detta repo till din lokala maskin:

Installation

1. Klona detta repo till din lokala maskin:

   bash
   git clone <repo-url>

2. Gå till projektets rotmapp:

   bash
   cd <project-folder>

3. Installera alla nödvändiga beroenden med npm:

   bash
   npm install

# Användning

1. För att köra applikationen lokalt i utvecklingsläge:

   bash
   npm run dev

2. Öppna webbläsaren och gå till http://localhost:5173.

# Funktioner

- Hemskärmen visar populära filmer som hämtas från TMDb API.

- Sökfunktion: Du kan söka efter specifika filmer genom att använda sökrutan i menyn.

- Favoritlista: Lägga till filmer till favoriter genom att klicka på "Lägg till i favoriter"-knappen, och sedan visa dem genom att gå till favoritsidan.

# Sök efter filmer

För att söka efter en specifik film:

1. Klicka på hamburgermenyn uppe till vänster (mobilvy) eller använd menyn (desktop).

2. Använd sökrutan och skriv in namnet på filmen du letar efter.

3. Tryck på sökknappen och se resultaten visas.

# Favoritlista

Du kan lägga till och ta bort filmer från din favoritlista:

1. På en films detaljeringssida klickar du på knappen "Lägg till i favoriter" för att spara den.

2. Favoritfilmer visas på Favoritlistan, som du når genom att klicka på "Favoriter" i menyn.

3. Du kan ta bort en film från favoritlistan genom att klicka på knappen "Ta bort från favoriter".

# Google Tag Manager och Analytics

Denna applikation har integrerat Google Tag Manager (GTM) och Google Analytics för att spåra användarbeteenden och interaktioner. Följande steg har vidtagits:

1. GTM har lagts till i applikationens index.html, main.jsx och favoriteButton.jsx.

2. Du kan granska data och interaktioner i realtid genom att logga in på ditt Google Analytics/tag manager-konto och följa denna video från 14:40 för att bygga upp Analytics/tag manage för att sedan kunna se via realtid ifrån google analytics när vi lägger till filmer till Favoriter.
   https://us06web.zoom.us/rec/play/uFFVEH5rHDlqx9MprqQeWADtOituOM9m8bEtnh1cERHzdYlb_2O_JtTsbM4e4NpnGMID0RRmH8-0JZyO.UK_ZVmomwXD15ppg?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FYRBJVwIai9k2UzEvc0SPK8Pt4Y7luUu7yxauWvpv59u6Xf7nKDGrawhKmtN6bijY.jKAbEwDEJuUF4_Hz.

# Testning med Cypress

För att köra end-to-end-testerna som har skapats med Cypress:

1. Kör Cypress i ditt projekt:

   bash
   npx cypress open

2. Kör end-to-end-testet som finns i cypress/e2e/home.cy.js. Testet inkluderar scenarion som:

- Söka efter en film

- Lägga till en film i favoriter

# Bygg och deploy

För att bygga applikationen för produktion:

1. Bygg projektet:

   bash
   npm run build

2. Projektet kommer att skapas i en dist-mapp, och du kan använda den för att hosta applikationen.

3. För deployment använder vi Vercel. Följ dessa steg för att deploya:

   1. Installera Vercel CLI om du inte redan har det:

      bash
      npm install -g vercel

   2. Kör följande kommando i projektets rotmapp:

      bash
      vercel

   3. Följ instruktionerna för att deploya applikationen.

# Feedback och bidrag

Om du vill bidra till projektet eller ge feedback, skapa gärna en pull request eller öppna ett ärende på GitHub.
