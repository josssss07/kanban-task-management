require('dotenv').config();
import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedUserTable() {
    await client.sql`CREATE TABLE IF NOT EXISTS users (
        userId SERIAL PRIMARY KEY,
        userName VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        emailId TEXT UNIQUE 
        );`;
}

async function seedBoardTable(){
    await client.sql `CREATE TABLE IF NOT EXISTS boards (
    boardId SERIAL PRIMARY KEY,
    boardName  VARCHAR(50) UNIQUE,
    userId SERIAL REFERENCES users(userId)
    ON DELETE CASCADE
    );`;
}

async function seedHeaderTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS headers (
    headerId SERIAL PRIMARY KEY,
    headerName VARCHAR(50),
    boardId SERIAL REFERENCES boards(boardId)
    ON DELETE CASCADE);`;
}

async function seedTaskTable(){
    await client.sql` CREATE TABLE IF NOT EXISTS tasks (
    taskId SERIAL PRIMARY KEY,
    taskName VARCHAR(250),
    headerId SERIAL REFERENCES headers(headerId) ON DELETE CASCADE,
    totalSubtask INTEGER DEFAULT 0);`;
}

async function seedSubtaskTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS subtasks(
    subtaskId SERIAL PRIMARY KEY,
    subtaskName VARCHAR(500),
    taskId SERIAL REFERNECES tasks(taskId)
    ON DELETE CASCADE);`;
}


export async function GET(){

try{
    await seedUserTable();
    await seedBoardTable();
    await seedHeaderTable();
    await seedTaskTable();
    await seedSubtaskTable();
    return Response.json({message: 'Database seeded successfully'});

}
catch(error){
    return Response.json({error},{status:500});
}}