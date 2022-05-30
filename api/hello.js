const mysql = require('mysql2');
const connection = require('./../../db');

export default function handler(req, res) {
  connection.default.query("SELECT * FROM user", (err, results) => {
    res.json(results);
  });

}
