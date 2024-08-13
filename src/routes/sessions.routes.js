const { Router} = require('express');

const SessionsController = require('../Controllers/SessionsController');


const sessionsRoutes = Router();

const sessionsControlller =   new SessionsController();

sessionsRoutes.post("/" ,  sessionsControlller.create);

module.exports = sessionsRoutes;