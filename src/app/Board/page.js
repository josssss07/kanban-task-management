import { fetchBoards } from "../lib/data";

export default async  function BoardHome(){
    const board =  await fetchBoards(1);
    console.log(board[0].boardname);
    return(
        <div>
            Hello World<br></br>
            {board[0].boardname}
        </div>
    );
}