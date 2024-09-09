const { Router} = require('express');

const UserController = require('../Controllers/UserController');

const UserValidatedControler = require('../Controllers/UserValidatedControler');

const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const userRoutes = Router();

const userControlller =   new UserController();
const userValidatedControler =   new UserValidatedControler();

userRoutes.post("/" , userControlller.create);
userRoutes.get("/validated" ,ensureAuthenticated, userValidatedControler.index);

module.exports = userRoutes;