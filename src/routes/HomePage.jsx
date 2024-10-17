import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/movieSlice.jsx";
import { MovieCard } from "../components/MovieCard.jsx";

function HomePage() {
  //Delar av state från redux store
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  //Hämtar filmer från API när komponenten laddas
  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    //Start sidan
    <div className="p-5 text-center">
      {/* SEO - allt syns under inspektorn under element */}
      <Helmet>
        <title>MickeMovies – Upptäck populära filmer</title>
        <meta
          name="description"
          content="Upptäck de senaste populära filmerna och spara dina favoriter på MickeMovies."
        />
        <meta
          name="keywords"
          content="filmer, populära filmer, favoriter, sök film, MickeMovies"
        />
      </Helmet>
      {/* SEO - allt syns under inspektorn under element */}

      <h1 className="text-3xl font-bold mb-6">Välkommen till MickeMovies!</h1>

      {movieStatus === "loading" && <p className="text-lg">Laddar filmer...</p>}
      {movieStatus === "failed" && (
        <p className="text-lg text-red-500">
          Fel vid hämtning av filmer: {error}
        </p>
      )}

      {movieStatus === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path} // Skickar filmens poster_path och titel som props
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
