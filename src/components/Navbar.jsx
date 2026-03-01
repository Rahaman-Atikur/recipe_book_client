import React from "react";
import { NavLink } from "react-router";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-5 py-2 rounded-xl font-medium transition-all duration-300";

  const activeClass =
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105";

  const normalClass =
    "text-gray-700 hover:bg-purple-100 hover:text-purple-600";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          🍽️ RecipeHub
        </h1>

        {/* Links */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/addrecipe"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : normalClass}`
            }
          >
            Add Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;