import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // För att hämta filmens id från URL:en
import { fetchMovieDetails } from "../API/movieAPI";
import { Helmet } from "react-helmet-async";
import FavoriteButton from "../components/FavoriteButton";
import BackButton from "../components/BackButton";

const MovieDetails = () => {
  const { id } = useParams(); // Hämta filmens id från APIns URL
  const [movie, setMovie] = useState(null);

  // Hämta detaljerna för filmen baserat på id
  useEffect(() => {
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
      {/* SEO - läser upp filmnamn under inspektor-element */}
      <Helmet>
        <title>{movie.title} – MickeMovies</title>
        <meta name="description" content={movie.overview} />
      </Helmet>

      <BackButton />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bildsektion */}
        <div>
          <img
            className="w-full h-full object-cover rounded mb-4"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>

        {/* Detaljsektion */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <FavoriteButton movie={movie} />
          {/* Strong markerar text som viktig info. Text blir fet */}
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
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
