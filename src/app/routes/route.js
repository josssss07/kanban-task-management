import { NextResponse } from "next/server";
import { fetchBoards } from "../lib/data";

export async function GET() {
 // Fetch boards for userId = 1
try{
    const boards = await fetchBoards(1);
    return NextResponse.json({boards}, {status:200});
}
catch(error){
    return NextResponse.json({error:"failed to fetch board"}, {status:500});
}
}
