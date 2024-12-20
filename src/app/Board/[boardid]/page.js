'use client'
import IndividualTask from "@/app/Backdrop/IndividualTask";
import AddColumns from "@/app/Backdrop/AddColum";
import { useState, useEffect } from "react";




export default function Board({params}){
    // console.log(params);
    // const headers = await fetchHeaders(params.boardid);
    // const tasks = await Promise.all(
    // headers.map(header => fetchTasks(header.headerid)));
        
    const [headers, setHeaders] = useState();
    const [tasks, setTasks] = useState();
    useEffect(()=>{
        // console.log("hi");
        const fetchData= async()=>{
            try{
                // console.log("hey");
                const response = await fetch(`/Board/api/${params.boardid}`);
                // console.log(response);
                if(!response.ok){
                    throw new Error("failed to fetch headers");
                }
                const data = await response.json();
                console.log(data);
                setHeaders(data.headers);

                const promise = data.headers.map(async(header)=>{
                    const taskres = await fetch(`/Header/api/${header.headerid}`, {cache: 'no-store'});
                    
                if(!taskres.ok){
                    throw new Error("failed to fetch tasks");
                }
                const data = await taskres.json();
                // console.log(data);
                return {header: header.headerid, data};
                
                });

                const taskdata =await Promise.all(promise);
                console.log(taskdata);
                setTasks(taskdata);
            }
            catch(error){
                console.log("Error fetching headers:", error);
            }
        };
        fetchData();
    },[params.boardid]);
    // console.log(headers);
    console.log(tasks);
    // return(<div></div>);
    return(<div className = "flex">
    {headers== undefined? <div>Loading</div>:headers.map((header, index)=>{return (<div className=" overflow-y-auto max-h-[90vh]" key={header.headerid}>
            <div className="text-medium-grey p-2"><div className="p-1 text-body-l">{header.headername} (0)</div>
           {tasks== undefined?<div>Loading</div>:
           <IndividualTask  tasks = {tasks[index].data.task} key={Math.random()}/> }
           </div>
        </div>)})}
        
        <div className="flex justify-center items-center bg-[rgba(var(--color-dialog), 1)] m-2 min-w-44"><AddColumns></AddColumns>
    
        </div>
        
        </div>
    );
}