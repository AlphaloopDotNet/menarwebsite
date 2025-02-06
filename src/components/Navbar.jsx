import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { NavbarLinks } from "../utils/constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-poppins
      ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md py-2"
          : "bg-white/60 py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="text-orange-600">M</span>enar
              <span className="text-orange-600">B</span>ird
              <span className="text-orange-600">V</span>illage
            </h3>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {NavbarLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative px-2 py-1 transition-colors duration-200 hover:text-orange-500
                      ${
                        isActive
                          ? "text-orange-500 font-semibold"
                          : "text-gray-700"
                      }
                      after:content-[""] after:absolute after:bottom-0 after:left-0 
                      after:w-full after:h-0.5 after:bg-orange-500 
                      after:scale-x-0 hover:after:scale-x-100 
                      after:transition-transform after:duration-300
                      ${isActive ? "after:scale-x-100" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            {/* <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                <IoLogoWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-full bg-gray-600 transform transition-all duration-300 
                ${isOpen ? "rotate-45 top-3" : "top-1"}`}
              />
              <span
                className={`absolute h-0.5 w-full bg-gray-600 top-3 transition-all duration-200
                ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute h-0.5 w-full bg-gray-600 transform transition-all duration-300
                ${isOpen ? "-rotate-45 top-3" : "top-5"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 space-y-4">
            <ul className="space-y-2">
              {NavbarLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition-colors duration-200
                      ${
                        isActive
                          ? "bg-orange-50 text-orange-500 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
