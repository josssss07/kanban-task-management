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

        await client.sql`INSERT INTO users (userName,password,emailId) 
        VALUES('Adleena', 'abcd', 'abc@gmail.com')
        ON CONFLICT (emailId) DO NOTHING;`;
}

async function seedBoardTable(){
    await client.sql `CREATE TABLE IF NOT EXISTS boards (
    boardId SERIAL PRIMARY KEY,
    boardName  VARCHAR(50) UNIQUE,
    userId SERIAL REFERENCES users(userId)
    ON DELETE CASCADE
    );`;

    await client.sql`INSERT INTO boards (boardName,userId) 
    VALUES('Platform Launch', 1)
    ON CONFLICT (boardName) DO NOTHING;`;
}

async function seedHeaderTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS headers (
    headerId SERIAL PRIMARY KEY,
    headerName VARCHAR(50),
    boardId SERIAL REFERENCES boards(boardId)
    ON DELETE CASCADE);`;

    
    await client.sql`INSERT INTO headers (headerName,boardId) 
    VALUES('To do', 1)
    ON CONFLICT (headerName) DO NOTHING;`;
}

async function seedTaskTable(){
    await client.sql` CREATE TABLE IF NOT EXISTS tasks (
    taskId SERIAL PRIMARY KEY,
    taskName VARCHAR(250),
    headerId SERIAL REFERENCES headers(headerId) ON DELETE CASCADE,
    totalSubtask INTEGER DEFAULT 0);`;

    
    await client.sql`INSERT INTO tasks (taskName,headerId) 
    VALUES('Complete kanban-task-management system', 1)
    ON CONFLICT (taskName) DO NOTHING;`;
}

async function seedSubtaskTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS subtasks(
    subtaskId SERIAL PRIMARY KEY,
    subtaskName VARCHAR(500),
    taskId SERIAL REFERENCES tasks(taskId)
    ON DELETE CASCADE);`;
    
    await client.sql`INSERT INTO subtasks (subtaskName,taskId) 
    VALUES('Finish up the final version of the api', 1)
    ON CONFLICT (subtaskName) DO NOTHING;`;
}


export async function GET(){

try{
    await seedUserTable();
    await seedBoardTable();
    await seedHeaderTable();
    await seedTaskTable();
    await seedSubtaskTable(); 

    return Response.json({data, data1, },{status:200});

}
catch(error){
    return Response.json({error},{status:500});
}

}