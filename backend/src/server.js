const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose');
const server = express();

mongoose.connect('mongodb+srv://ominstack8:admin@cluster0.17v4sje.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


server.use(express.json())

server.use(routes);

server.listen(3395);