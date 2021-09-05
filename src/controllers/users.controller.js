const userModel = require('../models/users.model')
const response = require('../helpers/response')
const bcrypt = require('bcrypt')

const userController = {
  register: (req, res) => {
    try {
      const { name, email, password } = req.body
      bcrypt.hash(password, 10, (err, hash) => {
        if(err){
          response.error(res, err, "Failed hash password")
        }else{
          const payload = {
            name,
            email,
            password: hash
          }
          userModel.register(payload).then((result) => {
            response.success(res, result, "Register success")
          }).catch((error) => {
            response.error(res, error, 'Register failed')
          }) 
        }
      })
    } catch (error) {
      response.internalError(res)
    }
  },
  login: (req, res) => {
    try {
      const {email, password} = req.body
      userModel.checkEmail(email).then((result) => {
        const user = result[0] // untuk mendapatkan data user
        if(user) {
          bcrypt.compare(password, user.password, (err, compare) => {
            if(err){
              response.error(res, err, "Compare password failed")
            }
            if(compare){
              const data = {
                token: "123OKE"
              }
              response.success(res, data, "Login success")
            }else{
              response.error(res, null, "Password wrong")
            }
          })
        }else{
          response.error(res, null, 'Email not found')
        }
      }).catch((err) => {
        response.error(res, error, 'Login failed')
      })
    } catch (error) {
      response.internalError(res)
    }
  }
}

module.exports = userController