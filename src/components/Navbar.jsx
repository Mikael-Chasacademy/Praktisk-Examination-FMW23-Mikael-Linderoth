import NavMenu from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 lg:p-2 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl flex">MickeMovies</h1>
        <div className="flex items-center"></div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
