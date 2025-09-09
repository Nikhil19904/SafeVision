const pool = require("../db");

const Contact = {
  create: async ({ name, email, phone, message }) => {
    const [result] = await pool.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone, message]
    );
    return result;
  },
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM contacts ORDER BY id DESC");
    return rows;
  },
};

module.exports = Contact;
