'use client';
import { twJoin } from "tailwind-merge";
import Button from "../../../components/Button/Button";
import Header from "../Header/Header";
import { MoreVertical } from "feather-icons-react";
import UnitElemDisplay from "../../../components/UnitElemDisplay/page";

function addNewTask(){

}

export default function AppHeader() {

  return (
      <div className="flex w-full">
        <Header>
        <UnitElemDisplay styles={"flex w-full h-full"}>
                <div className="text-heading-xl h-full flex justify-center items-center">
                Platform Launch
                </div>
            <div className="flex ml-auto gap-4">
              <Button onClickFun={()=>{addNewTask()}}>+ Add new Task</Button>
              <button>
              <MoreVertical className="h-full w-8 text-medium-grey mx-2"/>
              </button>
            </div>
          </UnitElemDisplay>
        </Header>
      </div>
  );
}
