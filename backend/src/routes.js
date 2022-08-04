const express = require('express');
const Devcontroller = require('./controllers/DevController');

const routes = express.Router();


routes.post('/devs', Devcontroller.store);

module.exports = routes;