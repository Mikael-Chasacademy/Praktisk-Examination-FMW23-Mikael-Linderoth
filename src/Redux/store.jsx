import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoriteReducer,
  },
});

export default store;
