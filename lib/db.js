const bcrypt = require('bcrypt');
const cryptojs = require('crypto-js');

const mysql = require('mysql2');

let pw = cryptojs.AES.encrypt(process.env.MYSQL_PASSWORD);
pw = cryptojs.AES.decrypt(pw);

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: pw,
    database: process.env.MYSQL_DB
})

export default connection;