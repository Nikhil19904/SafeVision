// db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",   // ya tumhara MySQL host
  user: "root",        // tumhara MySQL username
  password: "Nikhil", // yaha apna MySQL password daalo
  database: "camsecurity"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
  } else {
    console.log("✅ MySQL connected!");
  }
});

module.exports = db;
