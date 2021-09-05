const express = require('express')
const bodyParser = require('body-parser')

const routerProducts = require('./src/router/products')
const routerUsers = require('./src/router/users')

require('dotenv').config()

// const connection = require('./src/config/db') // hanya untuk mengecheck koneksi ke DB

const app = express() // mesin backend
app.use(bodyParser.json()) // mesin backend menggunakan body parser

app.use(routerProducts) // mesin backend menggunakan router products
app.use(routerUsers) // mesin backend menggunakan router users

app.listen(4000, () => {
  console.log(`Service running on PORT 4000`)
})
