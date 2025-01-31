import { useEffect, useState } from "react";
import CustomDialog from "../../../components/Dialog/Dialog.js";
import Button from "../../../components/Button/Button.js";
import { NextResponse } from "next/server.js";

export default function AddNewBoard({ open, onChange, newElem }) {
  // need to add func to add column
  // just increment the number of columns
  const heightx = 400;
  const heighty = 500;
  const [columnsList, setColumnList] = useState(["ToDo", "Doing"]);
  const [boardName, setBoardName] = useState(null);

  function removeFromList(itemToRemove) {
    setColumnList((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  }
  function addToList() {
    setColumnList((prevItems) => [...prevItems, ":Example"]);
  }
  function editList(value, index) {
    setColumnList((prevItems) =>
      prevItems.map((item, idx) => (idx === index ? value : item))
    );
  }

  async function saveInBackend(e){
    console.log("clicked");
    e.preventDefault();
    try{
        const response = await fetch("api/1",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            boardName,
            userId: 1,
          }),
        });

        if(!response.ok){
          const errorData = await response.json();
          alert("Faild to create Board: "+ errorData.error );
        }

        const meg = await response.json();
        console.log("success: ", meg.message);
        

        const responseBoardId = await fetch(`apiBoardName/${boardName}`);
        if(!responseBoardId.ok){
          const errorData = await responseBoardId.json();
          alert("Failed to fetch boardid"+ errorData.error)
        }

        const res =await responseBoardId.json();
        console.log(res);

        const id = res.data[0].boardid;
        console.log(id);

        const postHeader = async(columnsList)=>{
          for(const header of columnsList){
            const response3 = await fetch("apiPostHeader",{
              method: "POST",
              headers: {
                "Content-Type": "application/json"},
              body: JSON.stringify({
                headerName: {header},
                boardId: id,
              })
            });

            
        if(!response3.ok){
          const error = await response3.json();
          console.log(error);
        }else{console.log("Header inseterd successfully");}

        
          }
        }

        await postHeader(columnsList);

        }
        catch(error){
            return NextResponse.json({error:"Faild to create | Fetch id | insert header board"}, {status: 500});
        }


        onChange(false);
        newElem(boardName);


  }

  return (
    <div>
      <CustomDialog
        open={open.state}
        onChange={onChange}
        title={"Add New Board"}
        heightx={heightx}
        heighty={heighty}
      >
        <form onSubmit={saveInBackend}>
          <label className="text-body-m text-medium-grey">Name</label>
          <br />
          <input
            type="text"
            className="w-full text-body-l p-2 border-2 border-[var(--color-lineinput)] bg-[var(--color-dialog)] rounded-md"
            placeholder="eg: Web Design"
            onChange={(e)=>{setBoardName(e.target.value)}}
          ></input>
          <br />
          <label className="text-body-m text-medium-grey">Cloumns</label>
          <br />
          {columnsList.map((col, index) => (
            <div key={index}>
              <input
                type="text"
                value={col}
                className="w-5/6  text-body-l p-2 border-2 border-[var(--color-lineinput)] rounded-md bg-[var(--color-dialog)]"
                onChange={(event) => editList(event.target.value, index)}
              ></input>
              <Button
                textColor={"text-medium-grey"}
                bgColor={"bg-none"}
                className={"text-heading-l"}
                onClickFun={(e) => {
                  e.preventDefault();
                  removeFromList(col);
                }}
              >
                X
              </Button>
            </div>
          ))}
          <Button
            className="w-full"
            textColor={"text-main-purple"}
            bgColor={"bg-lines-light"}
            onClickFun={(e)=>{
              e.preventDefault();
              addToList();}}
          >
            +Add New Cloumn
          </Button>
          <br />
          <input
            type="submit"
            value="Create New Board"
            className="text-white bg-main-purple rounded-full m-2 p-1 w-full"
          />
        </form>
      </CustomDialog>
    </div>
  );
}
