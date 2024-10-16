//Fetchar popular movies
export async function fetchPopularMovies() {
  // https://developer.themoviedb.org/reference/movie-popular-list
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ffa5812af28cf08566bde8315c29af28&language=en-US&page=1"
    );
    if (!response.ok) {
      throw new Error("Något gick fel vid hämtning av filmer");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed fetching movies():", error);
    throw error; //kan skicka vidare felet till slice?
  }
}

//Fetchar filmer baserat på sökterm
export async function fetchMovieQuery(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ffa5812af28cf08566bde8315c29af28&query=${query}&language=en-US&page=1&include_adult=false`
    );
    if (!response.ok) {
      throw new Error("Något gick fel vid sökning av filmer");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed fetching search results:", error);
    throw error; // Skickar vidare felet så att det hanteras i slice
  }
}
