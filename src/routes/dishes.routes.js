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

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/" ,verifyUserAuthorization('admin'), dishesControlller.create);
dishesRoutes.put("/:id" , verifyUserAuthorization('admin'),dishesControlller.update);
dishesRoutes.delete("/:id" , verifyUserAuthorization('admin'),dishesControlller.delete);
dishesRoutes.get("/:id" , dishesControlller.show);
dishesRoutes.get("/" , dishesControlller.index);
dishesRoutes.patch("/image/:id" ,verifyUserAuthorization('admin') , upload.single('image') , dishImageController.update);

module.exports = dishesRoutes;