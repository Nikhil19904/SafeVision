// src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes"); // ✅ Import karna zaruri hai
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
     origin: "http://localhost:3000"
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes); // ✅ Ab kaam karega
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
