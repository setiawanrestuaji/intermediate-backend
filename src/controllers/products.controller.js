const productsModel = require('../models/products.model')
const response = require('../helpers/response')

const productsController = {
  getAll: (req, res) => {
    try {
      // sort, search, pagination, limit = query parameter
      const query = req.query
       // ascending (asc) & descending (desc)
      const sortType = query.sortType ? query.sortType : 'asc' // kondisi jika query sortType tidak ada, default asc
       // field yang akan di sorting
      const sortField = query.sortField ? query.sortField : 'id' // kondisi jika query sortType tidak ada, default id
  
      const limit = query.limit ? query.limit : 2
      const page = query.page ? query.page : 1
      const offset = page === 1 ? 0 : (page-1)*limit
  
      productsModel.getAll(sortType, sortField, limit, offset).then((result) => {
        // res.json(result)
        const pagination = {
          page,
          limit,
          total: result.length
        }
        response.successWithPagination(res, result, pagination, "Get all data products success")
      }).catch((error) => {
        // res.json(error)
        response.error(res, error, 'Get all data products failed')
      })
    } catch (error) {
      // res.json({
      //   message: 'Internal server error',
      //   code: 500,
      //   error
      // })
      response.internalError(res)
    }
  }, 
  insert: (req, res) => {
    try {
      const { name, price, description } = req.body
      const payload = {
        name, // name: name
        price, // price: price
        description // description: description
      }
      productsModel.insert(payload).then((result) => {
        // res.json(result)
        response.success(res, result, "Insert product success")
      }).catch((error) => {
        // res.json(error)
        response.error(res, error, 'Insert product failed')
      }) 
    } catch (error) {
      // res.json({
      //   message: 'Internal server error',
      //   code: 500,
      //   error
      // })
      response.internalError(res)
    }
  }
}

module.exports = productsController