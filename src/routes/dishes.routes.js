const { Router} = require('express');

const DishController = require('../Controllers/DishController');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const dishesRoutes = Router();

const dishesControlller =   new DishController();

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/" , dishesControlller.create);
dishesRoutes.put("/:id" , dishesControlller.update);

module.exports = dishesRoutes;