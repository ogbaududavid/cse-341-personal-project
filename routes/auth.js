const express = require('express');
const routes = express.Router()

const authController = require("../controllers/auth")

routes.get('/oauth', authController.SignInWithOauth)
routes.get('/signin', authController.SignIn)

module.exports = routes;