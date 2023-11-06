const express = require('express');
const routes = express.Router()

const authController = require("../controllers/auth")


routes.get('/', authController.Oauth)
routes.get('/oauth-callback', authController.handleCallback )
routes.get('/success', authController.handleSuccess )
module.exports = routes; 