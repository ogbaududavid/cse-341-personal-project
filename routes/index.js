const routes = require('express').Router()
const express = require('express')()

routes.use('/swagger-doc', require('./swagger'))
routes.use('/temples', require('./temples'))
routes.use('/wards', require('./wards'))
routes.use('/auth', require('./auth'))
routes.use('/', (req, res) => {
    res.sendFile("index.html", {root: "./homepage"})
})

module.exports = routes