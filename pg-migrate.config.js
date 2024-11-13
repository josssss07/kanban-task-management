// pg-migrate.config.js
require('dotenv').config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  dir: 'migrations', // Directory where migration files are stored
};
