const routes = require('express').Router()

routes.use('/temples', require('./temples'))
routes.use('/wards', require('./wards'))

module.exports = routes