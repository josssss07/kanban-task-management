// pg-migrate.config.js
require('dotenv').config();

console.log(process.env.DATABASE_URL);
module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  migrationsTable: 'pgmigrations',
  dir: 'migrations', // Directory where migration files are stored
};
