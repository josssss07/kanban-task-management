import { fetchBoardId } from "@/app/lib/data";
import { NextResponse } from "next/server";


export async function GET(req,{params}){
    try{
        const data = await fetchBoardId(params.boardname);
        return NextResponse.json({data}, {status:200});
    }
    catch(error){
        return NextResponse.json({error:"Failed to fetch the board"}, {status:500});
    }
}