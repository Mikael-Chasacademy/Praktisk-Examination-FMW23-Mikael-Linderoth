import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToFavorites, removeFromFavorites } from "../Redux/favoriteSlice";

export const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  // Kontrollerar om filmen redan är i favoriter
  //favorites.some(): Går igenom alla filmer i favoritlistan.
  //(fav) => fav.id === movie.id: Jämför varje films ID i favoritlistan (fav.id) med den aktuella filmens ID (movie.id).
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(movie)); // Lägg till film i favoriter
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(movie.id)); // Ta bort film från favoriter
  };

  useEffect(() => {
    if (isFavorite) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "add_to_favorites", // Namnet på händelsen
        movie_id: movie.id,
        movie_title: movie.title, // Extra information om filmen
      });

      console.log("window.dataLayer efter push:", window.dataLayer);
    }
  }, [isFavorite]);

  return (
    <>
      {isFavorite ? (
        <button
          onClick={handleRemoveFromFavorites}
          className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Ta bort från favoriter
        </button>
      ) : (
        <button
          onClick={handleAddToFavorites}
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Lägg till i favoriter
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
