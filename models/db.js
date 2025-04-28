// connection url = mysql://root:GKCeftQQNHDDYBUyXXbUUjDAoqKVeqEC@ballast.proxy.rlwy.net:20620/railway
//msql command = mysql -h ballast.proxy.rlwy.net -u root -p GKCeftQQNHDDYBUyXXbUUjDAoqKVeqEC --port 20620 --protocol=TCP railway
// cli = railway connect MySQL

// models/db.js
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
