'use client';
import { useContext, React} from "react";
import { DisplayNavContext } from "./Helpers/DisplayNavContext";

export default function Home() {
  
  const [displayNav, setDisplayNav] = useContext(DisplayNavContext);

  console.log(displayNav);
  return (
    <main className={(displayNav?"ml-[17.05rem]":"")}>
    <h1>Landing page 
</h1>
    </main>
  );
}
