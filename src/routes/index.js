const { Router} = require('express');




const userRoutes = require('./user.routes');
const sessionsRoutes = require('./sessions.routes');

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/sessions', sessionsRoutes);

module.exports = routes;

