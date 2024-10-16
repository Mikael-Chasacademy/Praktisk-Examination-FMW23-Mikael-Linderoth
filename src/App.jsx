import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import FavoriteList from "./routes/FavoriteList.jsx";
import MovieDetails from "./routes/MovieDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MDZRP282" });
  }, []);

  return (
    <HelmetProvider>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoriteList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </HelmetProvider>
  );
}

export default App;
