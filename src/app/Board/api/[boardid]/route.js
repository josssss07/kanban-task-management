import { fetchHeaders} from "@/app/lib/data";
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