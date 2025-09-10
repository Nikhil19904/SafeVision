import React from "react";

const categories = [
  {
    title: "All in one Computers",
    image: "/categories/computer.png",
  },
  {
    title: "CCTVs",
    image: "Category-2.jpg",
  },
  {
    title: "Commercial Displays",
    image: "Category-3.jpg",
  },
  {
    title: "TrueClick",
    image: "Category-4.jpg",
  },
  {
    title: "TrueCloud",
    image: "Category-5.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Step into the World of Innovation with SafeVision
      </h2>
      <p className="text-gray-600 mb-12">
        Choose from the wide range of SafeVision’s high-quality Surveillance and Display Solutions.
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center max-w-6xl mx-auto">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Circle Container */}
            <div className="w-28 h-28 flex items-center justify-center rounded-full border border-gray-200 shadow-md p-4 mb-4 bg-gray-50 transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-500 group-hover:bg-orange-50">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
