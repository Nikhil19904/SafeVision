const db = require("../db/db");

const User = {
  create: async ({ name, email, phone, password }) => {
    const [result] = await db.query(
      "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, password]
    );
    return result.insertId;
  },

  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
};

module.exports = User;
