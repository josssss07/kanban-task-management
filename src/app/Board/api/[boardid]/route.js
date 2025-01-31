import { fetchHeaders, insertBoard} from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    try{
        // console.log(params);
        const headers = await fetchHeaders(params.boardid);
        // console.log(headers);
        return NextResponse.json({headers}, {
            status: 200});
        
    }
    catch(error){
        return NextResponse.json({error:"failed to fetch headers"}, {status:500});
    }
}

export async function POST(req) {
    try{
        const {boardName, userId} = await req.json();
        if(!boardName || !userId){
            return NextResponse.json({error:"No boardName or userId"}, {status:400});
        }

        await insertBoard(boardName , userId);

        return NextResponse.json({message:"Board created successfully"}, {status:200});
    }
    catch(error){
         return NextResponse.json({error:"Failed to create Board"}, {status:500});
    }
}