const express = require('express');
const routes = express.Router()

const templesController = require('../controllers/temples')

routes.get('/', templesController.getAll);

routes.get('/:id', templesController.getSingle);

routes.post('/', templesController.createTemple);

routes.put('/:id', templesController.updateTemple);

routes.delete('/:id', templesController.deleteTemple)

module.exports = routes;