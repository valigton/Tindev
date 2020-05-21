const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://valigton:valigton@cluster0-xwcba.mongodb.net/tindev?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);

console.log('server listening port 3333')