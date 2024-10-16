import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import FavoriteList from "./routes/FavoriteList.jsx";
import MovieDetails from "./routes/MovieDetails.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <main>
      <Navbar />
      {/*--Routing--*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </main>
  );
}

export default App;
