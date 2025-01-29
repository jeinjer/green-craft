"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MenuItem from "./MenuItem";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón del menú con hover */}
      <button
        onClick={toggleMenu}
        className="text-white hover:text-green-200 transition-colors duration-200 focus:outline-none"
      >
        <Menu size={28} /> {/* Ícono del menú */}
      </button>

      {/* Menú desplegable con transiciones */}
      <div
        className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0" // Estado abierto
            : "opacity-0 translate-y-2 pointer-events-none" // Estado cerrado
        }`}
      >
        <ul className="py-2">
          {/* Items del menú con redirección SPA */}
          <MenuItem href="/creaciones/carton" onClick={closeMenu}>
            Cartón
          </MenuItem>
          <MenuItem href="/creaciones/botellas" onClick={closeMenu}>
            Botellas
          </MenuItem>
          <MenuItem href="/creaciones/hojas-de-papel" onClick={closeMenu}>
            Hojas de papel
          </MenuItem>
        </ul>
      </div>
    </div>
  );
};

export default MenuDropdown;