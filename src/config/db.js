const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'latihan'
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