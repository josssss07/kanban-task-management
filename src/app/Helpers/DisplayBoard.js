'use client';
//add suspense
import PageSection from "../../../components/NavBar/PageSection";
import { useEffect, useState} from "react";

export default function DisplayBoards({state, stateChange, newElem}){
  const [board, setBoard] = useState();
    useEffect(()=>{
        console.log("render again to fetch boards");
        const fetchData=async()=>{
            try{
                const response = await fetch("/routes");
                if(!response.ok){
                    throw new Error('failed to fetch board');
                }
                const data = await response.json();
                console.log(data.boards);
                setBoard(data.boards);
            } catch (error) {
                console.error("Error fetching boards:", error);
            }

        };
        fetchData();
    }, [newElem]);

    // useEffect(()=>{
    //     if(board!= undefined){
    //         console.log(newElem);
    //     const newArray = [...board , {boardid:board.length+1 , boardname: newElem , userid:1}];
    //     console.log(newArray);
    //     setBoard(newArray);}
    // },[newElem]);
    //one doubt

    return(
        <div>
            <div className="text-heading-s text-medium-grey p-4">
            ALL BOARDS({board?.length})
          </div>
          {board?.map((board)=>(<PageSection  styles={"text-medium-grey"} key={board.id}>{board.boardname}</PageSection>)
          )}
          <PageSection styles={"text-main-purple"} state={state.state} onChange={stateChange}>
            +Create New Board
          </PageSection>
        </div>
    );
}