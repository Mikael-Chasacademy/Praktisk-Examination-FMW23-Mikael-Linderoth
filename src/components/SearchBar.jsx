import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../Redux/movieSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(fetchSearchMovies(searchTerm)); // Dispatchar sökanropet
      setSearchTerm(""); // Återställer sökfältet efter sökning
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        className="p-2 rounded-l-lg text-black"
        placeholder="Sök efter filmer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Uppdaterar sökterm
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
      >
        Sök
      </button>
    </form>
  );
};

export default SearchBar;
