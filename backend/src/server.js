const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes')

const app = express();
const port = 3399

const server = require('http').Server(app);
const io = require('socket.io')(server);
const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
  
    connectedUsers[user] = socket.id;
  });

mongoose.connect('mongodb+srv://ominstack8:admin@cluster0.17v4sje.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
  
    return next();
  });  

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
    console.log(`Servidor rodando na porta de conexão ${port} Funcionando Corretamente!`)
  })
