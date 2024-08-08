"use client";

import React from "react";
import EyeButton from "../../../components/EyeButton/EyeButton";
import NavBar from "../../../components/NavBar/NavBar";
import PageSection from "../../../components/NavBar/PageSection";
import { Sun, Moon, EyeOff } from "feather-icons-react";
import Button from "../../../components/Button/Button";
import { DisplayNavContext } from "./DisplayNavContext";
import { useContext } from "react";

export default function EyeOrNav() {
  const [displayNav, setDisplayNav] = useContext(DisplayNavContext);

  function setDisplay() {
    setDisplayNav(!displayNav);
  }
  return (
    <>
      {displayNav === true ? (
        <NavBar clickBun={setDisplay}>
          <div className="h-16 flex justify-center items-center text-heading-xl">
            kanban
          </div>
          <div className="text-heading-s text-medium-grey p-4">
            ALL BOARDS(number)
          </div>
          <PageSection styles={"text-medium-grey"}>Platform Launch</PageSection>
          <PageSection styles={"text-medium-grey"}>Marketing Plan</PageSection>
          <PageSection styles={"text-medium-grey"}>Roadmap</PageSection>
          <PageSection styles={"text-main-purple"}>
            +Create New Board
          </PageSection>
          <div className="mt-auto mb-4">
            <div className="flex justify-center gap-6 items-center">
              <div  className="flex px-10 gap-6 bg-light-grey p-2">
              <Sun fill={"grey"} style={{stroke:"grey"}} size={20}/>
              <div className="m-0 p-1 flex bg-main-purple rounded-full">
                <Button className={"min-w-4 h-4 mr-0 my-0 ml-0 px-0 py-0 bg-white"} />
                <Button className={"w-4 h-4 ml-0 my-0 px-0 py-0"} />
                </div>
              <Moon fill={"grey"} style={{stroke:"grey"}} size={20}/>
              </div>
            </div>
            <button className="flex m-3 ml-6" onClick={()=>{setDisplayNav(!displayNav);}}>
            <EyeOff  style={{stroke:"grey"}} size={19}/>
            <div className="text-medium-grey pl-3 ">Hide Sidebar</div>
            </button>
          </div>
        </NavBar>
      ) : (
        <EyeButton clickBun={setDisplay} />
      )}
    </>
  );
}
