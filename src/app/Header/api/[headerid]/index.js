import { fetchTasks} from "@/app/lib/data";

export async function GET({params}){
    try{
        const task = fetchTasks(params.haederid);
        return NextResponse.json({task}, {status:200});
    }
    catch(error){
        return NextResponse.json({error:"failed to fetch tashs"}, {status:500});
    }
}