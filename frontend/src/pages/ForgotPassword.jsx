// src/pages/ForgotPassword.js
import React, { useState } from "react";
import { Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Password reset link sent to your email!");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-500 text-center mt-1 text-sm">
          Enter your email address to reset your password
        </p>

        {/* Forgot Form */}
        <form className="mt-6 space-y-4" onSubmit={handleForgot}>
          {/* Email */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Mail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium text-sm transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Remember your password?{" "}
          <a href="/login" className="text-orange-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
