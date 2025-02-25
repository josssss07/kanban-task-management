'use server';
import { redirect } from "next/navigation";
import Landing from "./Pages/Landing";
import { Prata } from "next/font/google";

export default  async function Home() {
    //Page redirects to the landing page. 
   return  (
    <Landing></Landing>
   );


//   const taskObject = [
//     {
//         Currentstatus: "ToDo",
//         taskNSubtask: [
//             {
//                 task: "Build UI for onboarding flow",
//                 description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
//                 subtasks: ["task1", "task2", "task3"],
//                 taskCompleted: [],
//             },
//             {
//                 task: "Build UI for search",
//                 description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
//                 subtasks: ["task1", "task2", "task3"],
//                 taskCompleted: [],
//             },
//             {
//                 task: "Build settings UI",
//                 description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
//                 subtasks: ["task1", "task2", "task3"],
//                 taskCompleted: [],
//             },
//             {
//                 task: "QA and test all major user journeys",
//                 description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
//                 subtasks: ["task1", "task2", "task3"],
//                 taskCompleted: [],
//             }
//         ]
//     }];

  
}
