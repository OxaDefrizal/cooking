import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cooking-canvas-logo-black.svg";

export default function NavigationBar() {
  return (
    // container navigation bar
    <nav className="flex h-40 w-full items-center justify-between bg-gray-50 px-20 py-8 shadow-md">
      {/* Cooking Canvas Logo */}
      <img
        src={logo}
        alt="Cooking Canvas Logo"
        className="h-auto max-h-24 w-auto max-w-24"
      />
      {/* Container Button Navigation Bar */}
      <div className="flex h-auto w-auto items-center justify-center gap-10">
        {/* Button Home */}
        <Link to={"/"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Home
          </button>
        </Link>
        {/* Button Menu Recipe */}
        <Link to={"/recipes"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Recipe
          </button>
        </Link>
        {/* Button About Us */}
        <Link to={"/about"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            About Us
          </button>
        </Link>
        {/* Button Contact Us */}
        <Link to={"/contact"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Contact
          </button>
        </Link>
        {/* Button Sign In */}
        <Link to={"/signin"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Sign In
          </button>
        </Link>
        {/* Button Sign Up */}
        <Link to={"/signup"} className="h-auto w-auto">
          <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
