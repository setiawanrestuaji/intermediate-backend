const connection = require('../config/db')
const productsModel = {
  getAll: (sortType, sortField, limit, offset) => {
    return new Promise((resolve, reject) => {
      connection.query(`
        SELECT * FROM products 
        ORDER BY ${sortField} ${sortType}
        LIMIT ${limit} OFFSET ${offset}
        `, (error, result) => {
        if(error){ // salah satu error handling
          reject(error)
        }else{
          resolve(result)
        }
      })
    })
  },
  insert: (payload) => {
    return new Promise((resolve, reject) => {
      connection.query(`
        INSERT INTO products 
        (name, price, description) 
        VALUES
        ('${payload.name}','${payload.price}','${payload.description}')
        `, (error, result) => {
        if(error){ // salah satu error handling
          reject(error)
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = productsModel