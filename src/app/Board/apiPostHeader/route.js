import { insertHeader } from "@/app/lib/data";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        const {headerName , boardId} = await req.json();
        if(!headerName || !boardId){
            return NextResponse.json({error:"No headerName no boardId"}, {status: 400});
        }

        await insertHeader(headerName, boardId);
        return NextResponse.json({message:" Inserted headers successfully"}, {status: 200});
    }
    catch(error){
        return NextResponse.json({error:"Failed to insert headers"}, {status: 500});
    }
}