const { Router} = require('express');

const UserController = require('../Controllers/UserController');


const userRoutes = Router();

const userControlller =   new UserController();

userRoutes.post("/" , userControlller.create);

module.exports = userRoutes;