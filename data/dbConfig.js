const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = process.env.NODE_ENV || 'production';

const db = knex(knexConfig[environment]);

db.migrate
.rollback()
.then(() => db.migrate.latest());

module.exports = db;
