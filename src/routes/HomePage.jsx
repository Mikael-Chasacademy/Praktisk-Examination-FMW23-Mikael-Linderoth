import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/movieSlice.jsx";
import { MovieCard } from "../components/MovieCard.jsx";

function HomePage() {
  //Delar av state från redux store
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  //Delar av state från redux store

  //VAD GÖR DET HÄR
  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);
  //VAD GÖR DET HÄR

  return (
    //Start sidan
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold mb-6">Välkommen till MickeMovies!</h1>

      {movieStatus === "loading" && <p className="text-lg">Laddar filmer...</p>}
      {movieStatus === "failed" && (
        <p className="text-lg text-red-500">
          Fel vid hämtning av filmer: {error}
        </p>
      )}

      {movieStatus === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path} // Skickar filmens poster_path och titel som props
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
