const response = require('../helpers/response')
const auth = (req, res, next) => {
  const { token } = req.headers
  if(token === "123OKE"){
    next()
  }else{
    response.error(res, null, "Token invalid")
  }
}

module.exports = auth