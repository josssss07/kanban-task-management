'use client';
import React from "react";
import SubtasksForm from "./SubTask";


export default function IndividualTask({tasks}) {

  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div >{tasks.map((task)=>{
        return <button key={task.taskid} className="flex flex-col text-[var(--color-text)] p-3 bg-[var(--color-dialog)] m-2 w-64 rounded-md" onClick={()=>{setOpenDialog(!openDialog)}}>
          <div className="p-2 text-start">
          <div>{task.taskname}</div>
            <div className="text-medium-grey text-body-m">0 out of {task.totalsubtask} subtasks</div>
            </div>
        {/*{openDialog?<SubtasksForm open={openDialog} onChange={setOpenDialog} subtasks={task.subtasks}  task={task} status={status}></SubtasksForm>:undefined}*/}
        </button>
    })}</div>
  );
}


