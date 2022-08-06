const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();


routes.post('/dev', DevController.store);
routes.post('dev/:devId/likes', LikeController.store)
routes.post('dev/:devId/dislikes', DislikeController.store)
module.exports = routes;