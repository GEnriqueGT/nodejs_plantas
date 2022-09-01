const express = require('express');
const plantaController = require('../controllers/planta.controller');
var api = express.Router();

api.get('/plantas/', plantaController.getPlantas)

module.exports = api;