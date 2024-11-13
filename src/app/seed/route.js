require('dotenv').config();
import { db } from '@vercel/postgres';

const client = await db.connect();
console.log(process.env.POSTGRES_URL);