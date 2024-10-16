import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies, fetchMovieQuery } from "../API/movieAPI.jsx";

//AsyncThunk för att söka efter filmer
export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  async (searchTerm) => {
    const response = await fetchMovieQuery(searchTerm);
    return response;
  }
);
//AsyncThunk för att söka efter filmer

// AsyncThunk för att hämta filmer från API
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetchPopularMovies();
  return response;
});
// AsyncThunk för att hämta filmer från API

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;
