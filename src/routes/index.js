const { Router} = require('express');




const userRoutes = require('./user.routes');
const sessionsRoutes = require('./sessions.routes');
const dishesRoutes = require('./dishes.routes');

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/dishes', dishesRoutes);

module.exports = routes;

