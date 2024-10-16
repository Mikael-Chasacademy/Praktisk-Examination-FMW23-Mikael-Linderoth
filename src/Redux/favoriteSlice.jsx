import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [], //Array håller listan med favoriter
  },
  reducers: {
    addToFavorites: (state, action) => {
      // Lägg till en film till favoritlistan, men endast om den inte redan finns
      const movie = action.payload;
      const exists = state.favorites.find((fav) => fav.id === movie.id);
      if (!exists) {
        state.favorites.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      // Ta bort en film från favoritlistan
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
    },
  },
});

// Exporterar actions
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

// Exporterar reducer
export default favoriteSlice.reducer;
