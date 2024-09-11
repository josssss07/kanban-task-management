
import CustomDialog from "../../../components/Dialog/Dialog.js";
import Button from "../../../components/Button/Button.js";
export default function AddNewBoard({open , onChange}) {
  return (
    <div>
      <CustomDialog 
      open ={open}
      onChange={onChange}
      title={"Add New Board"}
      >
        <form>
          <label className="text-body-m text-medium-grey">Name</label><br/>
          <input type="text" className="w-full text-body-l p-2 border-2 border-[var(--color-lineinput)] rounded-md" placeholder="eg: Web Design"></input><br/>
          <label className="text-body-m text-medium-grey">Cloumns</label><br/>
          <div><input type="text" placeholder="Todo" readOnly  className="w-5/6  text-body-l p-2 border-2 border-[var(--color-lineinput)] rounded-md" ></input><Button textColor={"text-medium-grey"} bgColor={"bg-none"} className={"text-heading-l"}>X</Button></div>
          <div><input type="text" placeholder="Doing" readOnly  className="w-5/6  text-body-l p-2 border-2 border-[var(--color-lineinput)] rounded-md" ></input><Button  textColor={"text-medium-grey"} bgColor={"bg-none"} className={"text-heading-l"}>X</Button></div>
          <Button className="w-full" textColor={"text-main-purple"} bgColor={"bg-lines-light"}>+Add New Cloumn</Button><br/>
          <input type="submit" value="Create New Board" className="text-white bg-main-purple rounded-full m-2 p-1 w-full"/>
        </form>
      </CustomDialog>
    </div>
  );
}
