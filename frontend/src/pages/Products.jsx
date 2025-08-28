import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "HD Dome CCTV Camera",
    category: "Camera",
    type: "Dome",
    brand: "SecureCam",
    rating: 5,
    price: 3500,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1606813903082-3d74e1b15d9f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Outdoor Bullet Camera",
    category: "Camera",
    type: "Bullet",
    brand: "EyeSafe",
    rating: 4,
    price: 4200,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1625241097037-b12221e75d2b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "CCTV Wires",
    category: "Wires",
    type: "Cable",
    brand: "WireMax",
    rating: 5,
    price: 500,
    inStock: false,
    image:
      "https://images.unsplash.com/photo-1602526216861-4ee64f0e1e48?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Door Lock",
    category: "DoorLock",
    type: "Smart",
    brand: "SafeHome",
    rating: 4,
    price: 2500,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1623041440206-055482e0f33c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Doorbell",
    category: "DoorBell",
    type: "Smart",
    brand: "RingIt",
    rating: 4,
    price: 1800,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1615995379925-2a2c0930a1d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "CCTV Stand",
    category: "Stand",
    type: "Adjustable",
    brand: "ProStand",
    rating: 5,
    price: 1200,
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1602526216823-4d8f3077b7e7?auto=format&fit=crop&w=500&q=80",
  },
];

const categories = ["All", "Camera", "Wires", "DoorLock", "DoorBell", "Stand"];
const brands = ["All", "SecureCam", "EyeSafe", "WireMax", "SafeHome", "RingIt", "ProStand"];
const ratings = [5, 4, 3, 2, 1];
const types = ["All", "Dome", "Bullet", "Smart", "Adjustable", "Cable"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedType, setSelectedType] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const filteredProducts = productsData.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
    const matchRating = selectedRating === 0 || p.rating >= selectedRating;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchType = selectedType === "All" || p.type === selectedType;
    const matchStock = !inStockOnly || p.inStock;

    return matchCategory && matchBrand && matchRating && matchPrice && matchType && matchStock;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Our CCTV Products</h1>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explore our high-quality CCTV products for home and office security.
        </p>

        {/* Category Navbar */}
        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-indigo-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 bg-white rounded-2xl p-4 shadow-md space-y-6 text-left">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

            {/* Price */}
            <div>
              <h3 className="text-md font-semibold mb-2">Price</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                  placeholder="Max"
                />
              </div>
              <input
                type="range"
                min="0"
                max="20000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full mt-3"
              />
              <p className="text-sm text-gray-600">Up to ₹{priceRange[1]}</p>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-md font-semibold mb-2">Availability</h3>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                In Stock Only
              </label>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-md font-semibold mb-2">Brand</h3>
              <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                {brands.filter((b) => b !== "All").map((b) => (
                  <label key={b} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrand === b}
                      onChange={() =>
                        setSelectedBrand(selectedBrand === b ? "All" : b)
                      }
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div>
              <h3 className="text-md font-semibold mb-2">Customer Rating</h3>
              <div className="space-y-1">
                {ratings.map((r) => (
                  <label key={r} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRating === r}
                      onChange={() =>
                        setSelectedRating(selectedRating === r ? 0 : r)
                      }
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    {"★".repeat(r)} & Up
                  </label>
                ))}
              </div>
            </div>

            {/* Types */}
            <div>
              <h3 className="text-md font-semibold mb-2">Product Type</h3>
              <div className="space-y-1">
                {types.filter((t) => t !== "All").map((t) => (
                  <label key={t} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedType === t}
                      onChange={() =>
                        setSelectedType(selectedType === t ? "All" : t)
                      }
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">
                No products match your filters.
              </p>
            )}
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition relative group"
              >
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
                >
                  <Heart
                    size={20}
                    className={`${
                      wishlist.includes(product.id) ? "text-red-500 fill-red-500" : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
                  <p className="font-bold text-indigo-600 mb-2">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-yellow-500 mb-2">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </p>
                  <p className="text-sm mb-2">
                    Type: {product.type} | {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition"
                    >
                      <ShoppingCart size={18} /> Add to Cart
                    </button>
                    <button
                      onClick={() => navigate("/payment-selection", { state: { product } })}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
