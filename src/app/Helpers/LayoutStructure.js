'use client';
import EyeOrNav from "./EyeBunOrNavBar";
import { useContext, React} from "react";
import { DisplayNavContext } from "./DisplayNavContext";

export default function LayoutStructure({children}){
  
    
  const [displayNav, setDisplayNav] = useContext(DisplayNavContext);
    return(
        <div className={(displayNav? " grid grid-cols-5":"")}>
          <EyeOrNav />
          <div className={(displayNav?"col-span-4":"")}>
          {children}
          </div>
        </div>
    );
}