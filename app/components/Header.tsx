import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-green-500 sticky top-0 z-10 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo de texto */}
        <h1 className="text-3xl font-bold text-white">GreenCraft</h1>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="¿Qué quieres crear hoy?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Botón de login / registro */}
        {!session ? (
          <button
            onClick={() => signIn()}
            className="text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            Iniciar sesión
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Avatar de usuario si está logeado */}
            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
