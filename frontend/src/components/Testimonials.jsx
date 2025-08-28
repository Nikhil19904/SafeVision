import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Event Organizer",
    feedback:
      "Booking process was super smooth and fast. Loved the clean UI and quick response from the team!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Photographer",
    feedback:
      "This platform helped me connect with amazing clients. The dashboard is very intuitive!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Customer",
    feedback:
      "I loved how easy it was to find and book services. Definitely recommend to everyone!",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Users Say
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from our happy customers who trusted us with their services.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                “{t.feedback}”
              </p>

              {/* Rating */}
              <div className="flex justify-start">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
