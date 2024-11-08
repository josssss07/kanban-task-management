import CustomDialog from "../../../components/Dialog/Dialog";


export default function SubtasksForm({open, onChange, subtasks, task, status}){
  return(
    <div>
<CustomDialog open={open} onChange={onChange} title={task.task} heightx={400} heighty={400} titleWidth="max-w-sm">
<form className="max-w-sm text-body-m">
    <div className=" text-medium-grey  my-4">{task.description}</div>
    <div className="mb-2">Subtasks {task.taskCompleted.length} out of {task.subtasks.length}</div>

    {subtasks.map((subtask, subtaskIndex)=>{
        return(<div key={subtaskIndex} className="bg-[var(--color-backgroundlighter)] mb-2 accent-main-purple p-2"><input type="checkbox" id={subtask}/>
        <label id={subtask} className="align-top">   {subtask}</label></div>)
    })}
              <label  className="text-body-m  text-medium-grey ">CurrentStatus</label><br/>
          <select className="w-full p-2 border-2 border-[var(--color-lineinput)] bg-[var(--color-dialog)]">
            <option value={status}>{status}</option>
            </select>
        </form>
</CustomDialog>
</div>
    );
}