// src/pages/Signup.js
import { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        console.log(data);
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Server not responding");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        {/* Amazon-like Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mt-1 text-sm">
          Secure your property with SafeVision
        </p>

        {/* Signup Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <User className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Mail className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Phone className="text-gray-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Lock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Lock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium text-sm transition"
          >
            Continue
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By creating an account, you agree to SafeVision’s{" "}
          <a href="/terms" className="text-orange-600 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-orange-600 hover:underline">
            Privacy Policy
          </a>.
        </p>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
