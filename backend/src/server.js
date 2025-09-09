// src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes"); // ✅ Import karna zaruri hai

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes); // ✅ Ab kaam karega

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
