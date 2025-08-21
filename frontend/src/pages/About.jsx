import { motion } from "framer-motion";
import { Shield, Zap, ThumbsUp, Headphones } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Us</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are a leading provider of modern CCTV & Security Solutions, 
          dedicated to delivering reliable, cutting-edge surveillance 
          technology to safeguard homes, businesses, and communities.
        </motion.p>
      </section>

      {/* Mission and Vision */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide advanced security systems that empower individuals and 
            organizations to monitor, protect, and secure their environments with confidence.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a global leader in security solutions, building safer 
            communities with technology-driven innovation and customer trust.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why <span className="text-blue-600">Choose Us?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Trusted Security", desc: "Providing top-notch CCTV and surveillance systems trusted by 1000+ clients." },
            { icon: Zap, title: "Latest Technology", desc: "We deliver innovative and smart security solutions with modern features." },
            { icon: ThumbsUp, title: "Reliability", desc: "24/7 support and high-quality products ensuring maximum safety." },
            { icon: Headphones, title: "Customer Support", desc: "Dedicated support team available round-the-clock for your needs." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
