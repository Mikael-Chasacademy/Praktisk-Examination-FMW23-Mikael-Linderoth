import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // För att hämta filmens id från URL:en
import { fetchMovieDetails } from "../API/movieAPI";
import FavoriteButton from "../components/FavoriteButton";

const MovieDetails = () => {
  const { id } = useParams(); // Hämta filmens id från URL:en
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Hämta detaljerna för filmen baserat på id
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id); // Hämta filmens detaljer
      setMovie(data); // Spara filmens data i state
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Laddar...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>
      <img
        className="w-full h-96 object-cover rounded mb-4"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <FavoriteButton movie={movie} />
      {/* VAD ÄR STRONG? */}
      <p>
        <strong>År:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Genre:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <p>
        <strong>Handling:</strong> {movie.overview}
      </p>
      {/* VAD ÄR STRONG? */}
    </div>
  );
};
export default MovieDetails;
