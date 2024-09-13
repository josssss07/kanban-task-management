"use client";

import React, { useState , useEffect } from "react";
import EyeButton from "../../../components/EyeButton/EyeButton";
import NavBar from "../../../components/NavBar/NavBar";
import PageSection from "../../../components/NavBar/PageSection";
import { Sun, Moon, EyeOff } from "feather-icons-react";
import { DisplayNavContext } from "./DisplayNavContext";
import { useContext } from "react";
import AddNewBoard from "../Board/AddNewBorad";
import { Light_colors, Dark_colors } from "../constants";

export default function EyeOrNav() {
  var colorVar = null;
  const [colorTheme , setColorTheme]= useState(null);
  useEffect(()=>{
     colorVar = getComputedStyle(document.documentElement).getPropertyValue('--color-prefer').trim();
     setColorTheme(colorVar);
     
  },[]);

  useEffect(()=>{
    
    console.log(colorTheme);
    toggleTheme();
  }, [colorTheme]);

  function toggleTheme(){
    console.log(colorTheme);
    if(colorTheme == "light"){
      const color = Light_colors;
      document.documentElement.style.setProperty('--color-prefer', '"light"');
      document.documentElement.style.setProperty('--color-text', color.text);
      document.documentElement.style.setProperty('--color-background', color.background);
      document.documentElement.style.setProperty('--color-dialog', color.dialog);
      document.documentElement.style.setProperty('--color-backgroundlighter', color.backgroundlighter);
      document.documentElement.style.setProperty('--color-lineborder', color.lineborder);
      document.documentElement.style.setProperty('--color-lineinput', color.lineinput);

    }else if(colorTheme == "dark"){
      
      const color = Dark_colors;
      document.documentElement.style.setProperty('--color-prefer', '"light"');
      document.documentElement.style.setProperty('--color-text', color.text);
      document.documentElement.style.setProperty('--color-background', color.background);
      document.documentElement.style.setProperty('--color-dialog', color.dialog);
      document.documentElement.style.setProperty('--color-backgroundlighter', color.backgroundlighter);
      document.documentElement.style.setProperty('--color-lineborder', color.lineborder);
      document.documentElement.style.setProperty('--color-lineinput', color.lineinput);

    }else{
      console.log("null");
    }
  }
  const [displayNav, setDisplayNav] = useContext(DisplayNavContext);
  const [newBoard , setNewBoard] = useState(false);

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
          <PageSection styles={"text-main-purple"} state={newBoard} onChange={setNewBoard}>
            +Create New Board
          </PageSection>
          {newBoard? <AddNewBoard open={newBoard} onChange={setNewBoard}/>: undefined}
          <div className="mt-auto mb-4">
            <div className="flex justify-center gap-6 items-center">
              <div  className="flex px-10 gap-6 bg-[var(--color-backgroundlighter)] p-2">
              <Sun fill={"grey"} style={{stroke:"grey"}} size={20}/>
              <div className="m-0 p-1 flex bg-main-purple rounded-full">
              <label className="relative inline-block w-[55px] h-[24px]">
                <input type="checkbox" className=" w-0 h-0 peer" onChange={()=>{
                  colorTheme=="light"?setColorTheme("dark"):setColorTheme("light");
                }}/>
                  <span className="absolute  top-0 left-0 right-0 bottom-0 cursor-pointer bg-white duration-[0.4s] w-[24px] rounded-full h-[24px] peer-checked:translate-x-8"></span>
              </label>
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
