import { useState } from "react";
import { motion } from "framer-motion";

// Sample CCTV products data
const productsData = [
  {
    id: 1,
    name: "HD Dome CCTV Camera",
    category: "CCTV Camera",
    brand: "SecureCam",
    rating: 5,
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1606813903082-3d74e1b15d9f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Outdoor Bullet Camera",
    category: "CCTV Camera",
    brand: "EyeSafe",
    rating: 4,
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1625241097037-b12221e75d2b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "4K PTZ Camera",
    category: "CCTV Camera",
    brand: "SecureCam",
    rating: 5,
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1581091012184-3de93e11f2d5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "CCTV NVR Recorder",
    category: "Recorder",
    brand: "RecordPro",
    rating: 4,
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1611691543426-0d4303f3ee7d?auto=format&fit=crop&w=500&q=80",
  },
];

const categories = ["All", "CCTV Camera", "Recorder"];
const brands = ["All", "SecureCam", "EyeSafe", "RecordPro"];
const ratings = [5, 4, 3, 2, 1];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 20000]);

  // Filter products based on sidebar selections
  const filteredProducts = productsData.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchBrand = selectedBrand === "All" || p.brand === selectedBrand;
    const matchRating = selectedRating === 0 || p.rating >= selectedRating;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchCategory && matchBrand && matchRating && matchPrice;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
          Our CCTV Products
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Explore our high-quality CCTV products for home and office security.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 bg-white rounded-2xl p-6 shadow-md space-y-6">
            {/* Category Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Category</h2>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                        selectedCategory === cat
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Price Range</h2>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-1/2 px-2 py-1 border rounded"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-1/2 px-2 py-1 border rounded"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Minimum Rating</h2>
              <ul className="space-y-2">
                {ratings.map((r) => (
                  <li key={r}>
                    <button
                      onClick={() => setSelectedRating(r)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                        selectedRating === r
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
                      }`}
                    >
                      {r} Stars & Up
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setSelectedRating(0)}
                    className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-indigo-100 font-medium"
                  >
                    All Ratings
                  </button>
                </li>
              </ul>
            </div>

            {/* Brand Filter */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Brands</h2>
              <ul className="space-y-2">
                {brands.map((b) => (
                  <li key={b}>
                    <button
                      onClick={() => setSelectedBrand(b)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                        selectedBrand === b
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-indigo-100"
                      }`}
                    >
                      {b}
                    </button>
                  </li>
                ))}
              </ul>
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
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="font-bold text-indigo-600 mb-2">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">Brand: {product.brand}</p>
                  <p className="text-sm text-yellow-500 mb-2">
                    {"★".repeat(product.rating)}{" "}
                    {"☆".repeat(5 - product.rating)}
                  </p>
                  <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
