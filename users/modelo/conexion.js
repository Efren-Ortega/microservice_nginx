const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db4free.net',
  port: '3306',
  user: 'efrenroot',
  password: '12345678',
  database: 'servicioupp',
  ssl: {
    rejectUnauthorized: false,
  },
})

connection.connect((err) => {
  if (err) return err;
  console.log("Connected")
})


module.exports = connection;
