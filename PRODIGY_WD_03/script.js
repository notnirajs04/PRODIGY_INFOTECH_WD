console.log("Welcome to Tic Tac Toe Game");
let audioTurn = new Audio("ting.mp3");
let musicPlay = new Audio("music.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let countTurn = 0;
let isGameOver = false;
function changeTurn() {
    return (turn === "X" ? "0" : "X");
}
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2,25,5,0],
        [3, 4, 5,25,15,0],
        [6, 7, 8,25,25,0],
        [0, 3, 6,15,15,90],
        [1, 4, 7,25,15,90],
        [2, 5, 8,35,15,90],
        [0, 4, 8,25,15,45],
        [2, 4, 6,25,15,135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[0]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.getElementsByClassName("turn")[0].innerText = boxtexts[e[0]].innerText + " Win";
            isGameOver = true;
            document.getElementsByClassName("img")[0].hidden = false;
            document.getElementsByClassName("line")[0].style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.getElementsByClassName("line")[0].style.width = "30vw"
            gameOver.play();
            
        }
    });
}
// const removeEvent = () => {
//     Array.from(boxes).forEach((element) => {
//         element.removeEventListener("click");
//     })
// }
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    element.addEventListener("click", () => {
        let boxtext = element.getElementsByClassName("boxtext")[0];
        if (boxtext.innerText === "" && (!isGameOver)) {
            countTurn++;
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                if (countTurn == 9) {
                    document.getElementsByClassName("turn")[0].innerText = "Match Tie";
                }
                else {
                    document.getElementsByClassName("turn")[0].innerText = " Turn For "+turn;
                }
            }
        }
    })
})
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click",()=>{
    isGameOver = false;
    Array.from(boxes).forEach((element)=>{
        let boxtext = element.getElementsByClassName("boxtext")[0];
        boxtext.innerText = "";
        turn  = "X";
        document.getElementsByClassName("line")[0].style.width = "0vw"
        document.getElementsByClassName("turn")[0].innerText = " Turn For "+turn;
        document.getElementsByClassName("img")[0].hidden = true;
        
    })
})
