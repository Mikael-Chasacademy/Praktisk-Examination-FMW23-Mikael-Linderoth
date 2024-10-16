import NavMenu from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MickeMovies</h1>
        <div className="hidden lg:flex space-x-4"></div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
