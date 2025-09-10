// src/pages/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // JWT save
        console.log("User:", data.user);
      } else {
        alert(data.error || "Login failed");
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
          Sign In
        </h2>
        <p className="text-gray-500 text-center mt-1 text-sm">
          Welcome back to SafeVision
        </p>

        {/* Login Form */}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
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

          {/* Password */}
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
            <Lock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="/ForgotPassword" className="text-orange-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium text-sm transition disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition text-sm">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {/* Sign Up link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-600 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
