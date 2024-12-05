import AddColumns from "./AddColum";
import IndividualTask from "./IndividualTask";


export default function Backdrop({taskObject}){
    return(<div className = "flex">
    {taskObject.map((cols, colsIndex)=>{return (<div className=" overflow-y-auto max-h-[90vh]" key={colsIndex}>
        <div className="text-medium-grey p-2"><div className="p-1 text-body-l">{cols.Currentstatus} (0)</div>
       <IndividualTask subtasks={cols.taskNSubtask} status={cols.Currentstatus} key={Math.random()}/>
       </div>
    </div>)})}
    
    <div className="flex justify-center items-center bg-[rgba(var(--color-dialog), 1)] m-2 min-w-44"><AddColumns></AddColumns>

    </div>
    </div>)
}