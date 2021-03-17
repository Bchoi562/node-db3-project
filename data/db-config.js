// db-config
const knex = require('knex');

const env = process.env.NODE_ENV || 'development';

const configs = require("../knexfile");

const db = knex(config[env]);

module.exports = db;

