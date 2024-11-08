import { NextResponse } from "next/server";
import { createUserController, getUsersController } from "../../../../controllers/userController";

export async function GET(){
    return getUsersController();
}

export async function POST(req){
    const {name,email} = await req.json();
    return createUserController(name , email);
}