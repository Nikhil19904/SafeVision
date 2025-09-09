// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch user profile from backend
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data.user);
        } else {
          console.error(data.error || "Failed to fetch profile");
          navigate("/login"); // token invalid or expired
        }
      } catch (err) {
        console.error("Server error:", err);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]); // ✅ navigate added to dependency array

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
      </div>
    </div>
  );
}
