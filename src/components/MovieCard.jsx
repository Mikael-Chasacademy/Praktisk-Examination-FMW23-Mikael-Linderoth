import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export const MovieCard = ({ title, posterPath, movie }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white p-4 transform hover:scale-105 transition-transform duration-200">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="w-60 h-fit object-cover rounded"
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w500${posterPath}`
              : "./No-Image-Placeholder.png"
          }
          alt={`${title} Poster`}
        />
      </Link>
      <FavoriteButton movie={movie} />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    </div>
  );
};
