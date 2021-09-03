const response = {
  // jenis jenis response
  success: (res, data, message) => {
    const response = {
      code: 200,
      status: 'success',
      data,
      message
    }
    res.json(response)
  },
  successWithPagination: (res, data, pagination, message) => {
    const response = {
      code: 200,
      status: 'success',
      data,
      pagination,
      message
    }
    res.json(response)
  },
  error: (res, error, message) => {
    const response = {
      code: 501,
      status: 'error',
      error,
      message
    }
    res.json(response)
  },
  internalError: (res) => {
    const response = {
      code: 500,
      message: "Internal server error"
    }
    res.json(response)
  }
}

module.exports = response