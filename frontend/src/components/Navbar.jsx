// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Camera,
  MessageCircle,
  ShoppingCart,
  Search,
  User,
} from "lucide-react";
import { useCart } from "../context/CartContext";

// Dummy products for autocomplete (replace with API later)
const productsList = [
  "CCTV Camera HD",
  "Wireless Camera",
  "Smart Door Lock",
  "Video Door Phone",
  "HDMI Cable",
  "Cat6 Wire",
  "Power Adapter",
  "IR Dome Camera",
  "NVR Recorder",
  "Bullet Camera",
];

const categories = ["All", "Cameras", "Wires", "Door Locks", "Accessories"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const isLoggedIn = localStorage.getItem("user");

  // Handle search input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = productsList.filter((p) =>
        p.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // max 5 suggestions
    }
  };

  // Handle search button
  const handleSearch = (query = searchQuery) => {
    alert(`Searching "${query}" in category "${selectedCategory}"`);
    setSuggestions([]); // hide suggestions
  };

  return (
    <nav className="bg-orange-600 text-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition"
        >
          <Camera className="h-7 w-7" />
          SafeVision
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          <div className="flex w-full max-w-3xl bg-white rounded-md overflow-hidden">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-gray-700 bg-gray-100 border-r focus:outline-none text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              value={searchQuery}
              onChange={handleInputChange}
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none text-sm"
            />

            {/* Search Button */}
            <button
              onClick={() => handleSearch()}
              className="bg-yellow-400 hover:bg-yellow-500 px-4 flex items-center justify-center text-black font-semibold"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 w-full max-w-3xl bg-white border border-gray-200 rounded-md shadow-md text-gray-800 z-50">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSearch(item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Chat */}
          <a
            href="https://wa.me/918766308674"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 bg-green-500 px-3 py-1.5 rounded-md hover:bg-green-600 transition"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Chat</span>
          </a>

          {/* Account/Login */}
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <User className="h-5 w-5" />
              <span className="hidden md:inline text-sm font-medium">
                Account
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <User className="h-5 w-5" />
              <span className="hidden md:inline text-sm font-medium">
                Login
              </span>
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative hover:opacity-80 transition">
            <ShoppingCart className="h-7 w-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Links (Desktop) */}
      <div className="hidden md:flex bg-orange-700 text-sm font-medium px-6 py-2 gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Mobile Dropdown (simplified, no autocomplete for now) */}
      {open && (
        <div className="md:hidden bg-orange-700 flex flex-col gap-4 px-6 py-4 text-sm font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="hover:underline">
            Home
          </Link>
          <Link to="/products" onClick={() => setOpen(false)} className="hover:underline">
            Products
          </Link>
          <Link to="/gallery" onClick={() => setOpen(false)} className="hover:underline">
            Gallery
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:underline">
            Services
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:underline">
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="hover:underline">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
