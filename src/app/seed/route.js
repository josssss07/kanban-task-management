require('dotenv').config();
import { db } from '@vercel/postgres';
import { deleteAllExceptUsers } from '../lib/data';

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
    boardName  VARCHAR(50),
    userId SERIAL REFERENCES users(userId)
    ON DELETE CASCADE
    );`;

    // await client.sql`INSERT INTO boards (boardName,userId) 
    // VALUES('Platform Launch', 1)
    // ON CONFLICT (boardName) DO NOTHING;`;

    
    // await client.sql`INSERT INTO boards (boardName,userId) 
    // VALUES('Market Plan', 1)
    // ON CONFLICT (boardName) DO NOTHING;`;
    
    // await client.sql`INSERT INTO boards (boardName,userId) 
    // VALUES('RoadMap', 1)
    // ON CONFLICT (boardName) DO NOTHING;`;
    
    
}

async function seedInsertBoard(){
    
    await client.sql`INSERT INTO boards (boardName,userId) 
    VALUES('Platform Launch', 1),
    ('Marketing' , 1),
    ('RoadMap', 1);`;
}


async function seedHeaderTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS headers (
    headerId SERIAL PRIMARY KEY,
    headerName VARCHAR(50),
    boardId SERIAL REFERENCES boards(boardId)
    ON DELETE CASCADE);`;

    
    // await client.sql`INSERT INTO headers (headerName,boardId) 
    // VALUES('To do', 1);`;
}

async function seedInsertHeader(){
    
    await client.sql`INSERT INTO headers (headerName,boardId) 
    VALUES('To do', 1),
    ('Doing' , 1),
    ('Done', 1);`;
}

async function seedTaskTable(){
    await client.sql` CREATE TABLE IF NOT EXISTS tasks (
    taskId SERIAL PRIMARY KEY,
    taskName VARCHAR(250) ,
    taskDescription VARCHAR(500),
    headerId SERIAL REFERENCES headers(headerId) ON DELETE CASCADE,
    totalSubtask INTEGER DEFAULT 0);`;

    
    // await client.sql`INSERT INTO tasks (taskName,headerId) 
    // VALUES('Complete kanban-task-management system', 1);`;
}



async function seedInsertTask(){
    
    await client.sql`INSERT INTO tasks (taskName, taskDescription,headerId) 
    VALUES('Build UI for onboarding flow', 'We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.', 1),
    ('Build UI for search','We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.' , 1),
    ('Build settings UI','We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.', 1),
    ('QA and test all major user journeys','We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.',1),
    ('Doing settings and search pages', 'idk description', 2),
    ('Add account management endpoints','idk description',2),
    ('Doing onboarding flow','idk description',2),
    ('Add search endpoints','idk description',2),
    ('Add authentic endpoints','idk description',2),
    ('Reasearch pricing points of various competitors and trail different business model','idk description',2),
    ('complete kanban task management', 'idk description', 2),
    ('complete kanban task management', 'idk description', 2),
    ('complete kanban task management', 'idk description', 2),
    ('Create wireframe prototype','idk description',3),
    ('Review results of useability test and iterate','idk description',3),
    ('Create proper prototypes and conduct 10 usability test with potential customers','idk description',3),
    ('Market discovery','idk description',3),
    ('Competitor analysis','idk description',3),
    ('Resaerch the market','idk description',3);`;
}

async function seedSubtaskTable(){
    await client.sql`CREATE TABLE IF NOT EXISTS subtasks(
    subtaskId SERIAL PRIMARY KEY,
    subtaskName VARCHAR(500) ,
    taskId SERIAL REFERENCES tasks(taskId)
    ON DELETE CASCADE);`;
    
    // await client.sql`INSERT INTO subtasks (subtaskName,taskId) 
    // VALUES('Finish up the final version of the api', 1)`;
}
export async function dropAll(){
    await client.sql`TRUNCATE TABLE subtasks, tasks, headers, boards, users RESTART IDENTITY CASCADE;`;
}


export async function GET(){

try{
    // await dropAll();    
    // await seedUserTable();
    // await seedBoardTable();
    // await seedInsertBoard(); // Create boards first
    // await seedHeaderTable();
    // await seedInsertHeader(); // Then insert headers
    // await seedTaskTable();
    // await seedInsertTask();
    // await seedSubtaskTable();
        // Return a success message
        return new Response(JSON.stringify({ message: "Seeding completed successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },});

}
catch (error) {
    // Return the error message
    return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
}
}