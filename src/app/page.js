'use client';
import { useContext, React} from "react";
import { DisplayNavContext } from "./Helpers/DisplayNavContext";
import Button from "../../components/Button/Button";

export default function Home() {
  
  const [displayNav, setDisplayNav] = useContext(DisplayNavContext);
  const general = "bg-light-grey flex h-[89%] flex-col items-center justify-center text-medium-grey";

  return (
    <main className={(displayNav? general+" ml-[17rem]":general)}>
    <h1 className="font-semibold">This board is empty. Create a new column to get started.
</h1>
<Button onClick={()=>{}} className = "w-fit p-2">+Add New Cloumn</Button>
    </main>
  );
}
