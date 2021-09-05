const connection = require('../config/db')

const userModel = {
  register: (payload) => {
   return new Promise((resolve, reject) => {
     connection.query(`
      INSERT INTO users (name, email, password)
      VALUES ('${payload.name}','${payload.email}','${payload.password}')
     `, (err, result) => {
       if(err){
         reject(err)
       }else{
         resolve(result)
       }
     })
   }) 
  },
  checkEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = userModel