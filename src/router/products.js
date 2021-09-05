const express = require('express')
const productController = require('../controllers/products.controller')

const auth = require('../middleware/auth')

const router = express.Router()

router
.get('/products', auth, productController.getAll)
.post('/products', productController.insert)

module.exports = router