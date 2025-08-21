// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-orange-600">
          <Camera className="h-6 w-6" />
          CCTV Store
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/products" className="hover:text-orange-600 transition">Products</Link>
          <Link to="/services" className="hover:text-orange-600 transition">Services</Link>
          <Link to="/about" className="hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to="/shop"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col gap-4 px-6 py-4">
          <Link to="/" className="hover:text-orange-600" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" className="hover:text-orange-600" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/services" className="hover:text-orange-600" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" className="hover:text-orange-600" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-orange-600" onClick={() => setOpen(false)}>Contact</Link>
          <Link
            to="/shop"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition text-center"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}


