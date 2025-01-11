"use client"; // Importante para usar hooks y manejar el estado

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMiniOpen, setIsMiniOpen] = useState(false);
  const dropdownRef = useRef(null);
  const miniDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMiniDropdown = () => {
    setIsMiniOpen(!isMiniOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (miniDropdownRef.current && !miniDropdownRef.current.contains(event.target)) {
        setIsMiniOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black shadow-md z-50">
      <div className="container mx-auto flex justify-end items-center p-4">

        {/* Dropdown de Mis Sesiones */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="text-lg text-[#a6a6a6] focus:outline-none"
            aria-expanded={isOpen ? "true" : "false"}
          >
            Sesiones
          </button>

          <div
            className={`z-1 absolute right-0 w-48 bg-white shadow-lg rounded-md mt-2 transition-all duration-300 ease-in-out transform ${
              isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
            }`}
          >
            <Link
              href="/shoots/family"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Familiares
            </Link>
            <Link
              href="/shoots/birthdays"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Cumpleaños
            </Link>
            <Link
              href="/shoots/pro"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profesionales
            </Link>
            <Link
              href="/shoots/entrepreneurs"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Emprendedores
            </Link>
            <Link
              href="/shoots/pregnancy"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Embarazadas
            </Link>
          </div>
        </div>

        {/* Nuevo Dropdown para Mini Sesiones */}
        <div className="relative ml-4" ref={miniDropdownRef}>
          <button
            onClick={toggleMiniDropdown}
            className="text-lg text-[#a6a6a6] focus:outline-none"
            aria-expanded={isMiniOpen ? "true" : "false"}
          >
            Mini Sesiones
          </button>

          <div
            className={`z-1 absolute right-0 w-48 bg-white shadow-lg rounded-md mt-2 transition-all duration-300 ease-in-out transform ${
              isMiniOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
            }`}
          >
            <Link
              href="/miniShoots/christmas"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Navidad
            </Link>
            <Link
              href="/miniShoots/valentinesDay"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              San Valentín
            </Link>
            <Link
              href="/miniShoots/mothersDay"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Día de las Madres
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
