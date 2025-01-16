import { useState } from "react";
import CustomDialog from "../../../components/Dialog/Dialog.js";
import Button from "../../../components/Button/Button.js";

export default function AddNewBoard({open , onChange}) {
  
// need to add func to add column
// just increment the number of columns 
  const heightx=400;
  const heighty=500;
  const [columnsList, setColumnList] = useState(["ToDo", "Doing"]);

  function removeFromList(itemToRemove){
    setColumnList((prevItems)=>prevItems.filter((item)=>item !== itemToRemove));
  }
  function addToList(itemToAdd){
    setColumnList((prevItems)=>([...prevItems, itemToAdd]));
  }
  return (
    <div>
      <CustomDialog 
      open ={open.state}
      onChange={onChange}
      title={"Add New Board"}
      heightx={heightx} heighty={heighty}
      >
        <form>
          <label className="text-body-m text-medium-grey">Name</label><br/>
          <input type="text" className="w-full text-body-l p-2 border-2 border-[var(--color-lineinput)] bg-[var(--color-dialog)] rounded-md" placeholder="eg: Web Design"></input><br/>
          <label className="text-body-m text-medium-grey">Cloumns</label><br/>
          {/* need to change here */}
          {columnsList.map((col, index)=>(<div key={index}><input type="text" placeholder={col} className="w-5/6  text-body-l p-2 border-2 border-[var(--color-lineinput)] rounded-md bg-[var(--color-dialog)]" ></input><Button textColor={"text-medium-grey"} bgColor={"bg-none"} className={"text-heading-l"} onClickFun={()=>{console.log(col);
          removeFromList(col)}}>X</Button></div>
          ))}
          <Button className="w-full" textColor={"text-main-purple"} bgColor={"bg-lines-light"} >+Add New Cloumn</Button><br/>
          <input type="submit" value="Create New Board" className="text-white bg-main-purple rounded-full m-2 p-1 w-full"/>
        </form>
      </CustomDialog>
    </div>
  );
}
