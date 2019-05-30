const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.NODE_ENV || 'production';

const db = knex(knexConfig[environment]);

 module.exports = db;
