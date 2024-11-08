import React from "react";
import SubtasksForm from "./SubTask";

export default function IndividualTask({ subtasks, status}) {


  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div >{subtasks.map((task , taskIndex)=>{
        return <button key={taskIndex} className="flex flex-col text-[var(--color-text)] p-3 bg-[var(--color-dialog)] m-2 w-64 rounded-md" onClick={()=>{setOpenDialog(!openDialog)}}>
          <div className="p-2 text-start">
          <div>{task.task}</div>
            <div className="text-medium-grey text-body-m">0 out of {task.subtasks.length} subtasks</div>
            </div>
        {openDialog?<SubtasksForm open={openDialog} onChange={setOpenDialog} subtasks={task.subtasks}  task={task} status={status}></SubtasksForm>:undefined}
        </button>
    })}</div>
  );
}


