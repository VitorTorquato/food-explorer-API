const { Router} = require('express');

const DishController = require('../Controllers/DishController');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const dishesRoutes = Router();

const dishesControlller =   new DishController();

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/" , dishesControlller.create);
dishesRoutes.put("/:id" , dishesControlller.update);
dishesRoutes.delete("/:id" , dishesControlller.delete);
dishesRoutes.get("/:id" , dishesControlller.show);
dishesRoutes.get("/" , dishesControlller.index);

module.exports = dishesRoutes;