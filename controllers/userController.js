import { NextResponse } from "next/server";
import { CreateUser, GetUsers } from "../models/userModel";

export async function createUserController(name, email){
    try{
        const [result] = await CreateUser(name, email);
        return NextResponse.json({id: result.insertId , name, email});
    }
    catch(error){
        return NextResponse.json({error:error.message}, {status:500});
    }
}

export async function getUsersController(){
    try{
        const [users] = await GetUsers();
        return NextResponse.json(users);
    }
    catch(error){
        return NextResponse.json({error:error.message}, {status:500});
    }
}