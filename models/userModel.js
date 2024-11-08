import pool from "../lib/db.js";

export async function CreateUser(name , email){
    await pool.query('CREATE TABLE IF NOT EXISTS  users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE)');
    return await pool.query('INSERT INTO users (name , email) VALUES (? , ?)',[name,email]);
}

export async function GetUsers(){
    return await pool.query('SELECT * FROM users');
}