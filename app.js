let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let turnO=true;
let winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            if(turnO){
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }
        box.disabled=true;
        checkWinner()
    });
});
let reset=()=>{
    turnO=true;
    enable();
    msgContainer.classList.add("hide");
}
let disable=()=>{
      for(box of boxes){
            box.disabled=true;
      }
}
let enable=()=>{
      for(box of boxes){
            box.disabled=false;
            box.innerText="";
      }
}
let showWinner=(winner)=>{
      msg.innerText=`Congratulations winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disable();
};
let checkWinner=()=>{
    for(pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!=""&& pos3!="")
        if(pos1==pos2 && pos2==pos3){
            console.log("winner",pos1);
           showWinner(pos1);
        }

    }
}
newbtn.addEventListener("click",reset);
reset_btn.addEventListener("click",reset);