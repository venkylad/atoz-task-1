import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkActive = "text-lg md:text-xl font-bold text-blue-600";
  const navLinkClass = "text-lg md:text-xl text-white font-bold ";
  return (
    <nav className="flex justify-center mx-auto py-5 bg-gray-400 ">
      <ul className="flex space-x-6 md:space-x-10">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? navLinkActive : navLinkClass
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? navLinkActive : navLinkClass
            }
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
