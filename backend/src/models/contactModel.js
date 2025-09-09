// src/models/contactModel.js
const db = require("../db/db");

const Contact = {
  create: (data, callback) => {
    const { name, email, phone, message } = data;
    const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phone, message], callback);
  },
  getAll: (callback) => {
    db.query("SELECT * FROM contacts ORDER BY created_at DESC", callback);
  }
};

module.exports = Contact;
