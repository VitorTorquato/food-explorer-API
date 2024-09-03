const { Router} = require('express');

const  uploadConfig = require('../config/upload');
const multer = require('multer')

const DishController = require('../Controllers/DishController');
const DishImageController = require('../Controllers/dishImageController');


const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const verifyUserAuthorization = require('../middleware/verifyUser Authorization');
const dishesRoutes = Router();

const dishesControlller =   new DishController();
const dishImageController =   new DishImageController();



dishesRoutes.post("/",ensureAuthenticated ,verifyUserAuthorization('admin'), dishesControlller.create);
dishesRoutes.put("/:id",ensureAuthenticated , verifyUserAuthorization('admin'),dishesControlller.update);
dishesRoutes.delete("/:id",ensureAuthenticated , verifyUserAuthorization('admin'),dishesControlller.delete);
dishesRoutes.get("/:id" ,ensureAuthenticated, dishesControlller.show);
dishesRoutes.get("/" , dishesControlller.index);
dishesRoutes.patch("/image/:id",ensureAuthenticated ,verifyUserAuthorization('admin') , upload.single('image') , dishImageController.update);

module.exports = dishesRoutes;