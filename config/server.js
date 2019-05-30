const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('./routes.js');

const server = express();


server.use(express.json());
server.use(cors());
server.use(helmet());

configureRoutes(server);

module.exports = {
  server
};
