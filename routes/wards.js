const express = require('express');
const routes = express.Router()

const wardsController = require('../controllers/wards')

routes.get('/', wardsController.getAll);

routes.get('/:id', wardsController.getSingle);

routes.post('/', wardsController.createWard);

routes.put('/:id', wardsController.updateWard);

routes.delete('/:id', wardsController.deleteWard)

module.exports = routes;