"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import MenuDropdown from "./MenuDropdown";
import Link from "next/link";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  return (
    <header className="bg-green-500 sticky top-0 z-10 py-3 shadow-lg w-full flex items-center justify-between px-6">
      {/* Menú desplegable (alineado a la izquierda) */}
      <div className="flex-shrink-0">
        <MenuDropdown />
      </div>

      {/* Barra de búsqueda (centrada en relación al Hero) */}
      <div className="flex-grow flex justify-center">
        <div
          className="relative flex items-center transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
        >
          <Search
            className={`absolute left-3 text-gray-400 transition-opacity duration-300 ease-in-out ${isSearchHovered ? "opacity-0" : "opacity-100"}`}
            size={20}
          />
          <input
            type="text"
            placeholder={isSearchHovered ? "Maceta con botellas" : "Buscar..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out ${isSearchHovered ? "w-64 sm:w-72 md:w-80 lg:w-96 pl-4" : "w-24 sm:w-32 md:w-40 lg:w-48 pl-10"}`}
          />
        </div>
      </div>

      {/* Logo (alineado a la derecha) */}
      <div className="flex-shrink-0">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:scale-105 transition-transform duration-200">
            GreenCraft
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;