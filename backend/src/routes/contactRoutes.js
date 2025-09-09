// src/routes/contactRoutes.js

const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// @route   POST /api/contact
// @desc    Save a new contact message
// @access  Public
router.post("/", contactController.createContact);

// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Admin (Future scope)
router.get("/", contactController.getContacts);

module.exports = router;
