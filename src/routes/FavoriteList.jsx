import { useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard";
import BackButton from "../components/BackButton";

//Hämtar lista med favoritfilmer från favoriteslice
const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="p-5">
      <BackButton />
      <h2 className="text-3xl font-bold mb-6">Mina Favoriter</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <p>Inga filmer i favoriter ännu.</p>
      )}
    </div>
  );
};

export default FavoriteList;
