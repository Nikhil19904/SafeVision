import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Countdown Hook
function useCountdown(endTime) {
  const [timeLeft, setTimeLeft] = useState({
    total: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useState(() => {
    if (!endTime) return;
    const interval = setInterval(() => {
      const total = Math.max(0, Math.floor((new Date(endTime) - new Date()) / 1000));
      const hours = Math.floor(total / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      setTimeLeft({ total, hours, minutes, seconds });
      if (total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return timeLeft;
}

// Sample Products with dealEndTime
const productsData = [
  {
    id: 1,
    name: "HD Dome CCTV Camera",
    category: "Camera",
    type: "Dome",
    brand: "SecureCam",
    rating: 5,
    price: 3500,
    mrp: 4500,
    discount: 22,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1606813903082-3d74e1b15d9f?auto=format&fit=crop&w=500&q=80",
    dealEndTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
  },
  {
    id: 2,
    name: "Outdoor Bullet Camera",
    category: "Camera",
    type: "Bullet",
    brand: "EyeSafe",
    rating: 4,
    price: 4200,
    mrp: 5200,
    discount: 19,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1625241097037-b12221e75d2b?auto=format&fit=crop&w=500&q=80",
    dealEndTime: null,
  },
  {
    id: 3,
    name: "CCTV Wires",
    category: "Wires",
    type: "Cable",
    brand: "WireMax",
    rating: 5,
    price: 500,
    mrp: 650,
    discount: 23,
    inStock: false,
    image:
      "https://images.unsplash.com/photo-1602526216861-4ee64f0e1e48?auto=format&fit=crop&w=500&q=80",
    dealEndTime: null,
  },
  {
    id: 4,
    name: "Door Lock",
    category: "DoorLock",
    type: "Smart",
    brand: "SafeHome",
    rating: 4,
    price: 2500,
    mrp: 3000,
    discount: 17,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1623041440206-055482e0f33c?auto=format&fit=crop&w=500&q=80",
    dealEndTime: new Date(new Date().getTime() + 30 * 60 * 1000), // 30 min deal
  },
];

const categories = ["All", "Camera", "Wires", "DoorLock"];
const brands = ["All", "SecureCam", "EyeSafe", "WireMax", "SafeHome"];
const ratings = [5, 4, 3, 2, 1];

// Product Card Component
function ProductCard({ product, addToCart, navigate }) {
  const timeLeft = useCountdown(product.dealEndTime);
  const dealActive = product.dealEndTime && timeLeft.total > 0;

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col relative"
    >
      {/* Discount Badge */}
      {product.discount > 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </span>
      )}

      {/* Flash Sale Badge */}
      {dealActive && (
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
          🔥 Hot Deal
        </span>
      )}

      {/* Countdown Timer */}
      {dealActive && (
        <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          Deal ends in {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      )}

      {/* Image */}
      <div className="flex justify-center mb-3">
        <img src={product.image} alt={product.name} className="h-40 object-contain" />
      </div>

      {/* Info */}
      <div className="flex-1 text-left">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-1">Brand: {product.brand}</p>
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>
        <div className="mb-2">
          <span
            className={`text-lg font-bold mr-2 ${
              dealActive ? "text-red-600" : "text-indigo-700"
            }`}
          >
            ₹{product.price.toLocaleString()}
          </span>
          {dealActive && (
            <span className="text-sm line-through text-gray-500">
              ₹{product.mrp.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-md text-sm font-semibold transition ${
            dealActive
              ? "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg animate-pulse"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
        <button
          onClick={() => navigate("/payment-selection", { state: { product } })}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-semibold transition"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

// Products Page
export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = productsData.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
    const matchRating = selectedRating === 0 || p.rating >= selectedRating;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchStock = !inStockOnly || p.inStock;

    return matchCategory && matchBrand && matchRating && matchPrice && matchStock;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Our CCTV Products
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 bg-white rounded-lg p-5 shadow-sm space-y-6 text-left">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>
            <div>
              <h3 className="text-sm font-semibold mb-2">Category</h3>
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm mb-1 cursor-pointer">
                  <input type="radio" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} />
                  {cat}
                </label>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Brand</h3>
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-2 text-sm mb-1 cursor-pointer">
                  <input type="radio" checked={selectedBrand === b} onChange={() => setSelectedBrand(b)} />
                  {b}
                </label>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Rating</h3>
              {ratings.map((r) => (
                <label key={r} className="flex items-center gap-2 text-sm mb-1 cursor-pointer">
                  <input type="radio" checked={selectedRating === r} onChange={() => setSelectedRating(r)} />
                  {"★".repeat(r)} & Up
                </label>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-1">Up to ₹{priceRange[1]}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Availability</h3>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
                In Stock Only
              </label>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">No products match your filters.</p>
            )}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
