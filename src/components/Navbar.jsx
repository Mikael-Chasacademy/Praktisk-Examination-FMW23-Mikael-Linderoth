import SearchBar from "./SearchBar";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MickeMovies</h1>
        <SearchBar /> {/* Lägg till SearchBar */}
      </div>
    </nav>
  );
};

export default Navbar;
