const mysql2 = require('mysql2')
require('dotenv').config()

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})
// mengecheck koneksi ke database
connection.connect((err) => {
  if(err){
    console.log(err)
  }else{
    console.log("Koneksi ke database berhasil")
  }
})

module.exports = connection // untuk export connection