import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Next-Gen CCTV Solutions",
    desc: "Protect your home and business with our smart, reliable & affordable surveillance systems.",
    btnText: "Shop Now",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7a7?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "24/7 Urban Surveillance",
    desc: "Stay on top of everything with smart monitoring across the city.",
    btnText: "Explore Services",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Minimal & Modern",
    desc: "Sleek cameras, powerful protection — modernize your security system.",
    btnText: "Get a Quote",
    img: "https://images.unsplash.com/photo-1594909122928-92a69f8d3f95?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    title: "Advanced Indoor Surveillance",
    desc: "Modern dome cameras with sleek design for seamless indoor monitoring.",
    btnText: "Learn More",
    img: "https://images.unsplash.com/photo-1590283602795-5fefcc1c3a36?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center items-start px-10 md:px-20 text-white">
            <motion.h1
              key={slides[current].title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight mb-6"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              key={slides[current].desc}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl max-w-xl mb-8 text-gray-200"
            >
              {slides[current].desc}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition">
                {slides[current].btnText}
              </button>
              <Link
                to="/signup"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Create Account
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition ${
              index === current ? "bg-yellow-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
