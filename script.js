let box= document.getElementsByClassName("box");
let win=document.getElementById("win");
let lowerbtn=document.getElementById("lowerbtn");
let boxes=Array.from(box);
let winGame=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let player=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player){
            box.innerHTML="X";
            player=false;
            box.disabled=true;
        }else{
            box.innerHTML="O";
            player=true;
            box.disabled=true;
        }
        checkWin();
    })
})
checkWin=()=>{
    winGame.forEach((e)=>{
        if(boxes[e[0]].innerHTML===boxes[e[1]].innerHTML && boxes[e[1]].innerHTML===boxes[e[2]].innerHTML && boxes[e[0]].innerHTML!=""){
            win.style.display="block";
            win.innerHTML=`${boxes[e[0]].innerHTML} wins`;
            boxes.forEach((b)=>{
                b.disabled=true;
            })
        }
    })
}
lowerbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    })
    win.style.display="none";
}
)
//draw condition
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        let draw=boxes.every((box)=>{
            return box.innerHTML!="";
        })
        if(draw){
            win.style.display="block";
            win.innerHTML="It's a draw";
            boxes.forEach((b)=>{
                b.disabled=true;
            })
        }
    })
})


