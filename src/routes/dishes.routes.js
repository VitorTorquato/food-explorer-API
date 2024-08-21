const { Router} = require('express');

const  uploadConfig = require('../config/upload');
const multer = require('multer')

const DishController = require('../Controllers/DishController');
const DishImageController = require('../Controllers/dishImageController');


const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const dishesRoutes = Router();

const dishesControlller =   new DishController();
const dishImageController =   new DishImageController();

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/" , dishesControlller.create);
dishesRoutes.put("/:id" , dishesControlller.update);
dishesRoutes.delete("/:id" , dishesControlller.delete);
dishesRoutes.get("/:id" , dishesControlller.show);
dishesRoutes.get("/" , dishesControlller.index);
dishesRoutes.patch("/image/:id" ,  upload.single('image') , dishImageController.update);

module.exports = dishesRoutes;