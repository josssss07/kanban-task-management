import { sql } from "@vercel/postgres";

export async function fetchBoards() {
  const data = await sql`SELECT * FROM boards
        WHERE userId = 1;`;
  return data.rows;
}


export async function fetchHeaders(boardId) {
    const data = await sql`SELECT * FROM headers
        WHERE boardId = ${boardId};`;
    return data.rows;
}

export async function fetchTasks(headerId) {
    const data = await sql`SELECT * FROM tasks
        WHERE headerId = ${headerId};`;
        return data.rows;
}

export async function fetchSubasks(taskId) {
    const data = await sql`SELECT * FROM subtasks
        WHERE taskId = ${taskId};`;
        return data.rows;
}

export async function insertUser(userName, password, emailId) {
     await sql`INSERT INTO users (userName, password, email)
        VALUES ('${userName}', '${password}','${emailId}');`;
}

export async function insertBoard(boardName, userId) {
    await sql`INSERT INTO boards (boardName, userId)
        VALUES ('${boardName}', ${userId});`;
}

export async function insertHeader(headerName, boardId) {
    await sql`INSERT INTO headers (headerName, boardId)
        VALUES ('${headerName}', ${boardId});`;
}

export async function insertTask(taskName, headerId) {
    await sql`INSERT INTO tasks (taskName, headerId)
        VALUES ('${taskName}', ${headerId});`;

}

export async function insertSubtask(subtaskName, taskId) {
    await sql`INSERT INTO subtasks (subtaskName, taskId)
        VALUES ('${subtaskName}', ${taskId});`;
}

export async function deleteUser(userId) {
    await sql`DELETE FROM users
        WHERE userId = ${userId};`;
}

export async function deleteBoard(boardId) {
    await sql`DELETE FROM boards
        WHERE boardId = ${boardId};`;

}

export async function deleteHeader(headerId) {
    await sql`DELETE FROM headers
        WHERE headerId = ${headerId};`;

}

export async function deleteTask(taskId) {
    await sql`DELETE FROM tasks
        WHERE taskId = ${taskId};`;
}

export async function deleteSubtask(subtaskId) {
    await sql`DELETE FROM subtasks
        WHERE subtaskId = ${subtaskId};`;
}

export async function editBoard(boardId, boardName) {
    await sql`UPDATE boards
        SET boardName = ${boardName}
        WHERE boardId = ${boardId};`;
}

export async function editTask(taskId, taskName) {
    await sql`UPDATE tasks
        SET taskName = ${taskName}
        WHERE taskId = ${taskId};`;
}
