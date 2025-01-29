"use client";

import Link from "next/link";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void; // Para cerrar el menú desplegable
}

const MenuItem = ({ children, href, onClick }: MenuItemProps) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick} // Cierra el menú desplegable al hacer clic
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100 transition-colors duration-200 block"
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;