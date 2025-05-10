import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { CircleUserRound } from "lucide-react";
import { FaDumbbell } from "react-icons/fa";
import ProfileMenuModal from "./ProfileMenu";
const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  return (
    <>
      <nav
        className="w-full p-3 shadow-md rounded-b-3xl bg-gradient-to-r from-[#000000] to-[#FF0000]
             fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-semibold">
          {/* Logo & Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-4xl text-[#FF0000]">
                <FaDumbbell />
              </div>
              {/* <img
                src="\src\assets\authentication\photo_2025-04-19_11-59-50-removebg-preview.png"
                alt="Logo"
                className="h-10"
              /> */}
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-5">
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/calories">Calorie Intake</NavLink>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/exercises">Exercises</NavLink>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/aboutus">About</NavLink>
              </li>
              <li className="hover:text-gray-400 duration-500">
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Buttons (Desktop) */}
          {userData ? (
            <div className="relative">
              <button onClick={() => setIsOpenModal(!isOpenModal)}>
                <CircleUserRound
                  color="white"
                  size={30}
                  className="cursor-pointer rounded-sm"
                />
              </button>
              {isOpenModal && (
                <div className="absolute right-0 mt-2 z-50">
                  <ProfileMenuModal
                    isOpen={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link
                to="login"
                className="px-5 py-1 border-2 bg-white text-black border-white rounded-lg text-center w-21 hover:bg-gray-200 duration-500 hover:border-gray-200 transition-colors"
              >
                Login
              </Link>
              <Link
                to="signup"
                className="px-5 py-1 border-2 bg-[#121212] border-black rounded-lg text-center w-21 hover:bg-gray-800 duration-500 hover:border-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation (Dropdown) */}
        <div
          className={`absolute top-16 left-0 w-full bg-neutral-900 text-white md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </NavLink>
            </li>
            <NavLink to="/calories" onClick={() => setIsOpen(false)}>
                Calorie Intake
              </NavLink>
            <li>
              <NavLink to="/tracks" onClick={() => setIsOpen(false)}>
                Exercises
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Buttons (Mobile) */}
          <div className="flex flex-col items-center space-y-3 py-4">
            <Link
              to="login"
              className="px-4 py-2 border-2 border-white rounded-lg text-center w-25"
            >
              Login
            </Link>
            <Link
              to="signup"
              className="px-4 py-2 rounded-lg bg-[#FF0000] text-white w-25 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;