// src/components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SafeVision</h2>
          <p className="text-gray-400 mb-4">
            Secure your home and business with our advanced CCTV solutions.  
            24/7 monitoring, AI-powered safety, and smart surveillance.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500"><Facebook /></a>
            <a href="#" className="hover:text-orange-500"><Instagram /></a>
            <a href="#" className="hover:text-orange-500"><Twitter /></a>
            <a href="#" className="hover:text-orange-500"><Linkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Services</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Home CCTV Setup</a></li>
            <li><a href="#" className="hover:text-orange-500">Business Security</a></li>
            <li><a href="#" className="hover:text-orange-500">AI-Powered Cameras</a></li>
            <li><a href="#" className="hover:text-orange-500">24/7 Monitoring</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <MapPin className="text-orange-500" size={20} />
              <span>123 Security Street, Delhi, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-orange-500" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-orange-500" size={20} />
              <span>support@safevision.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Make in India Logo */}
      <div className="flex justify-center mt-8">
        <img 
          src="/make-in-india.png"   // 👈 yaha apne `public` folder me image ka naam daal dena
          alt="Make in India"
          className="h-16 object-contain"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} SafeVision. All rights reserved.
      </div>
    </footer>
  );
}
