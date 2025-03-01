
import CustomDialog from "../../../components/Dialog/Dialog.js";
import Button from "../../../components/Button/Button.js";
export default function DeleteBoard({open , onChange, boardName="Platform Launch"}) {
  const heightx=400;
  const heighty =400;
  return (
    <div>
      <CustomDialog 
      open ={open}
      onChange={onChange}
      title={"Delete this board?"}
      heightx={heightx}
      heighty={heighty}
      ><div>
        <div className="w-80">Are you sure you want to delete &apos;{boardName} &apos; board? This action will remove all columns and tasks and cannot be reversed.</div>
        <div className="flex">
        <Button  textColor={"text-white"} bgColor={"bg-red"} className={"w-full"}>Delete</Button><br/>
        <Button  textColor={"text-main-purple"} bgColor={"bg-lines-light"}  className={"w-full"}>Cancel</Button><br/>
        </div>
          </div>
      </CustomDialog>
    </div>
  );
}
