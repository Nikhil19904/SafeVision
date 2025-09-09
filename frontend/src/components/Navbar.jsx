// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Camera, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("user"); // replace with your login logic

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-orange-600">
          <Camera className="h-6 w-6" />
          SafeVision
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/products" className="hover:text-orange-600 transition">Products</Link>
          <Link to="/gallery" className="hover:text-orange-600 transition">Gallery</Link>
          <Link to="/services" className="hover:text-orange-600 transition">Services</Link>
          <Link to="/about" className="hover:text-orange-600 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/918766308674"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            <MessageCircle className="h-5 w-5" />
            Chat
          </a>

          {/* Shop Now Button (Conditional) */}
          {isLoggedIn ? (
            <Link
              to="/products"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
            >
              Shop Now
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
            >
              Login to Shop
            </Link>
          )}
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
          <Link to="/services" className="hover:text-orange-600" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" className="hover:text-orange-600" onClick={() => setOpen(false)}>About</Link>
           <Link to="/products" className="hover:text-orange-600" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/products" className="hover:text-orange-600" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" className="hover:text-orange-600" onClick={() => setOpen(false)}>Contact</Link>

          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/918766308674"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition text-center"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5" />
            Chat
          </a>

          {/* Shop Now Button (Conditional) */}
          {isLoggedIn ? (
            <Link
              to="/products"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition text-center"
              onClick={() => setOpen(false)}
            >
              Shop Now
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition text-center"
              onClick={() => setOpen(false)}
            >
              Login to Shop
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
