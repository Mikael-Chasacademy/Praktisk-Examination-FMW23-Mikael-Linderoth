import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [], //Array håller listan med favoriter som just nu är tom
  },

  //Reducer ändrar state
  reducers: {
    //scriptet går igenom alla filmer för att matcha ID och om inget ID matchar så läggs filmen in i favoriter
    addToFavorites: (state, action) => {
      // Lägg till en film till favoritlistan, men endast om den inte redan finns
      const movie = action.payload; // Innehåller data som skickas när man dispatchar en action (i detta fall, en film som ska läggas till eller tas bort från favoriter).
      const exists = state.favorites.find((fav) => fav.id === movie.id);
      if (!exists) {
        state.favorites.push(movie);
      }
    },

    // Gör samma sak som scriptet ovan men motsatt. Om ID matchar med film i favoriter tas det bort
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
    },
  },
});

// Exporterar actions
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

// Exporterar reducer
export default favoriteSlice.reducer;
