import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// Hantera __dirname i ESM (då __dirname inte finns direkt)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// lokala utvecklings-URL
const hostname = "http://localhost:5173";

// API-endpoint för att hämta populära filmer
const movieAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=ffa5812af28cf08566bde8315c29af28&language=en-US&page=1";

// Funktion för att hämta dynamiska filmrutter från API:et
async function fetchMovies() {
  try {
    const response = await fetch(movieAPI);
    const data = await response.json();

    // Returnera en array av filmens dynamiska URL:er
    return data.results.map((movie) => ({
      url: `/movies/${movie.id}`,
      changefreq: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

// Generera sitemap
async function generateSitemap() {
  const staticRoutes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/favorites", changefreq: "weekly", priority: 0.8 },
  ];

  const dynamicRoutes = await fetchMovies(); // Hämta dynamiska filmsidor från API:et

  // Skapa en ny SitemapStream
  const sitemap = new SitemapStream({ hostname });

  // Skriv statiska rutter till sitemapen
  staticRoutes.forEach((route) => {
    sitemap.write(route);
  });

  // Skriv dynamiska rutter (filmer) till sitemapen
  dynamicRoutes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  // Skriv sitemap.xml till public-mappen
  streamToPromise(sitemap)
    .then((sm) =>
      createWriteStream(path.join(__dirname, "public", "sitemap.xml")).write(sm)
    )
    .then(() => console.log("sitemap.xml has been successfully created!"))
    .catch((err) => console.error("Error generating sitemap:", err));
}

generateSitemap();
