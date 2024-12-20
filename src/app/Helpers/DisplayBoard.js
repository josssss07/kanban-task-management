'use client';
//add suspense
import PageSection from "../../../components/NavBar/PageSection";
import { useEffect, useState} from "react";

export default function DisplayBoards(){
    const [board, setBoard] = useState();
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await fetch("/routes");
                if(!response.ok){
                    throw new Error('failed to fetch board');
                }
                const data = await response.json();
                setBoard(data.boards);
            } catch (error) {
                console.error("Error fetching boards:", error);
            }
        };
        fetchData();
    }, []);

    const [newBoard , setNewBoard] = useState(false);
    return(
        <div>
            <div className="text-heading-s text-medium-grey p-4">
            ALL BOARDS({board?.length})
          </div>
          {board?.map((board)=>(<PageSection  styles={"text-medium-grey"} key ={board.id}>{board.boardname}</PageSection>)
          )}
          <PageSection styles={"text-main-purple"} state={newBoard} onChange={setNewBoard}>
            +Create New Board
          </PageSection>
        </div>
    );
}