import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Camera } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594904351111-1b7c44aaea2f?auto=format&fit=crop&w=1600&q=80"
          alt="CCTV Security"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Smart <span className="text-yellow-400">CCTV Solutions</span> <br />
            For Home & Business Security
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Stay safe and secure with our advanced surveillance systems.
            Affordable, reliable, and trusted by 1000+ businesses.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition"
            >
              <Camera className="inline-block mr-2" size={20} />
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/20 border border-gray-400 text-white font-semibold rounded-xl shadow-lg hover:bg-white/30 transition"
            >
              <ShieldCheck className="inline-block mr-2" size={20} />
              Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
