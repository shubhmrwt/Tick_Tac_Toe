let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO =true;
let contain=document.querySelector("body");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if (turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
            contain.style.backgroundColor="green";

        }else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
            contain.style.backgroundColor="red";

        }
       box.disabled=true;

       checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}
const checkWinner = () => {
    let allFilled = true; 
    for (let pattern of winPatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;
        if (post1val !== "" && post2val !== "" && post3val !== "") {
            if (post1val === post2val && post2val === post3val) {
                console.log("Winner", post1val);
                showWinner(post1val);
                return; 
            }
        }
    }

    for (let box of boxes) {
        if (box.innerText === "") {
            allFilled = false;
            break; 
        }
    }

    if (allFilled) {
        msg.innerText = "It's a Tie!";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

