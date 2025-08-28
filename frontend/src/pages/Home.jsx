import HeroSlider from "../components/HeroSlider";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CCTVInstallation from "../components/CCTVInstallations";
// Inline Testimonials component
const Testimonials = () => {
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

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Users Say
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Hear from our happy customers who trusted us with their services.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-3">
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

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                “{t.feedback}”
              </p>

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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">
                Our platform ensures quick performance with reliable services
                that you can count on every time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-green-600 text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">
                Security is our top priority. All your data is protected with
                advanced encryption.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-pink-600 text-4xl mb-3">✨</div>
              <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
              <p className="text-gray-600">
                A clean and intuitive design that makes navigation effortless
                for every user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      <CCTVInstallation />

      {/* Call To Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join thousands of users who trust us for amazing services. Create
            your free account today!
          </p>
          <a
            href="/signup"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Create Account
          </a>
        </div>
      </section>
    </div>
  );
}
