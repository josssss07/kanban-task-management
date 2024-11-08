import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config(); // Load environment variables from .env.local or .env

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  // Create the database if it doesn't exist
  await connection.query('CREATE DATABASE IF NOT EXISTS kanban');
  await connection.end();
}

// Call initializeDatabase to ensure the database exists
await initializeDatabase();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});

export default pool;

// lib/db.js

// async function initializeDatabase() {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   });

//   await connection.query('CREATE DATABASE IF NOT EXISTS kanban');
//   await connection.end();
// }

// await initializeDatabase();


