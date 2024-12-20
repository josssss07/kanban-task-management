'use server';
import { redirect } from "next/navigation";

export default  async function Home() {
  const taskObject = [
    {
        Currentstatus: "ToDo",
        taskNSubtask: [
            {
                task: "Build UI for onboarding flow",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Build UI for search",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Build settings UI",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "QA and test all major user journeys",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            }
        ]
    },
    {
        Currentstatus: "Doing",
        taskNSubtask: [
            {
                task: "Doing settings and search pages",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Add account management endpoints",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Doing onboarding flow",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Add search endpoints",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Add authentic endpoints",
                description:"We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Reasearch pricing points of various competitors and trail different business model",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            }
        ]
    },        {
        Currentstatus: "Done",
        taskNSubtask: [
            {
                task: "Create wireframe prototype",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Review results of useability test and iterate",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Create proper prototypes and conduct 10 usability test with potential customers",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Market discovery",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task: "Competitor analysis",
                description:"We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            },
            {
                task:"Resaerch the market",
                description: "We know what we are planning for version one. Now we need to finalize the first pricing model we will use. Keep iterating the subtasks until we have a coherent position.",
                subtasks: ["task1", "task2", "task3"],
                taskCompleted: [],
            }
        ]
    }
];
 redirect('/Board/1');
  
}
