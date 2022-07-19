// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cryptojs = require('crypto-js');
const connection = require('/lib/db');

export default function handler(req, res) {
  res.send({ pass: pass });
  // connection.query('SELECT * FROM `users`', (err, results) => {
  //   if(err) throw err;
  //   else {
  //     console.log(results);
  //   }
  // })
}