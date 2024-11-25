import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import './Estilo.css';
import { useUsuarios } from "./UsuarioContext";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
const Encabezado = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cerrarSesion } = useUsuarios();  
  //  cierre de sesión
  const handleCerrarSesion = () => {
    // Restablezco puntos a 0 en localStorage
    localStorage.setItem("puntosUsuario", JSON.stringify(0));
    
    cerrarSesion(); 
    navigate("/login");
  };

  return (
    <header className="w-screen bg-[#eeeeee] shadow z-50 transition-all duration-300 dark:bg-gray-900">
      <div className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse text-xl font-bold text-gray-800 dark:text-white"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Cosméticos Bellísima Logo"
            />
          </NavLink>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-sm rounded-lg focus:outline-none"
            aria-controls="navbar-search"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-between mt-4 md:mt-0`}
          id="navbar-search"
        >
          {/* Links */}
          <nav className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <NavLink to="/" className="text-gray-800 dark:text-white">
              Inicio
            </NavLink>
            <NavLink to="/shop" className="text-gray-800 dark:text-white">
              Shop
            </NavLink>
            <NavLink to="/ofertas" className="text-gray-800 dark:text-white">
              Ofertas
            </NavLink>
            <NavLink to="/contacto" className="text-gray-800 dark:text-white">
              Contacto
            </NavLink>
            <NavLink to="/perfil" className="text-gray-800 dark:text-white">
              Perfil
            </NavLink>
            <NavLink to="/login" className="text-gray-800 dark:text-white">
              Login
            </NavLink>
          </nav>

          {/* Para Buscar */}
          <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ml-auto">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              className="w-40 sm:w-60 p-2 text-sm text-gray-900 bg-transparent border-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
              placeholder="Buscar productos..."
            />
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-2"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span className="sr-only">Buscar</span>
            </button>
          </div>

          {/* Botón de Cerrar Sesión */}
          <button
            onClick={handleCerrarSesion}
            className="text-black-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg text-sm p-2.5 ml-2"
          >
  <FontAwesomeIcon icon={faArrowRightFromBracket} />
  
</button>

        </div>
      </div>
    </header>
  );
};

export default Encabezado;
