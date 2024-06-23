import { twJoin } from "tailwind-merge";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { MoreVertical } from "feather-icons-react";
import UnitElemDisplay from "../UnitElemDisplay/page";

export default function App() {
  return (
    <>
      <div className=" flex w-full">
        <UnitElemDisplay styles={"text-heading-xl font-extrabold border-r-2 border-r-lines-light align-text-bottom p-4"}>kanban</UnitElemDisplay>
        <Header>
        <UnitElemDisplay styles={"flex w-full h-full"}>
                <div className="text-heading-xl h-full flex justify-center items-center">
                Platform Launch
                </div>
            <div className="flex ml-auto gap-4">
              <Button>+ Add new Task</Button>
              <MoreVertical className="h-full w-10 text-medium-grey mx-2"/>
            </div>
          </UnitElemDisplay>
        </Header>
      </div>
    </>
  );
}
