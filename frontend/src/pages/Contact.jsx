import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-600">Us</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have questions or need help? Get in touch with us and we’ll respond
          as soon as possible.
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">support@cctvsecurity.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">
                123, Security Plaza, New Delhi, India
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <iframe
              title="map"
              className="w-full h-64 rounded-xl border-none shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.50747101677!2d77.06889779471892!3d28.527280344558636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31c38c7e15d%3A0x5f9b5c7e56c44e8a!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
