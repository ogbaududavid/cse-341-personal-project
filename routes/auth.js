const express = require('express');
const routes = express.Router()

const authController = require("../controllers/auth")


routes.get('/', authController.Oauth)
routes.get('/oauth-callback', authController.handleCallback )
module.exports = routes; 