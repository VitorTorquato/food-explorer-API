const { Router} = require('express');

const IngredientsController = require('../Controllers/IngredientsController');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const ingredientsRoutes = Router();

const ingredientsController =   new IngredientsController();


ingredientsRoutes.post("/" ,ensureAuthenticated, ingredientsController.index);

module.exports = ingredientsRoutes;