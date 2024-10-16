import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Byt mellan öppet och stängt läge
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburgarikonen för att öppna/stänga menyn */}
      <div className=" flex items-center ">
        <button onClick={toggleMenu} className="focus:outline-none">
          <img
            src="/hamburgermenu.png"
            alt="Hamburgermeny"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </div>

      {/* Menyn som visas när isOpen är true */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-gray-800 rounded-lg p-4 shadow-lg space-y-4">
          <Link
            to="/favorites"
            className="text-white p-2 bg-blue-500 rounded hover:bg-blue-600 block"
            onClick={toggleMenu} // Stäng menyn när du klickar på en länk
          >
            Favoriter
          </Link>
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default NavMenu;
