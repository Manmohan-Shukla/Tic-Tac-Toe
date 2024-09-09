console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;
let turn;
let boxes = document.getElementsByClassName("box");
let player;
//random player selection
function setUp() {
    if (Math.random() < 0.5) {
        turn = "X";
    }
    else {
        turn = "0";
    }

    document.querySelector('.info').innerText = "";

}

setUp();

//Changing turnS
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boss');

    let win = [
        [0, 1, 2, -12.5, 5, 0],
        [3, 4, 5, -12.5, 15, 0],
        [6, 7, 8, -12.5, 25, 0],
        [0, 3, 6, -22.5, 15, 90],
        [1, 4, 7, -12.5, 15, 90],
        [2, 5, 8, -2.5, 15, 90],
        [0, 4, 8, -12.5, 15, 45],
        [2, 4, 6, -12.5, 15, 135],
    ];
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

function randPlayer(){
    let random=Math.floor(Math.random()*2)
  if(random==0){
   human();
    player=1;
  }
  else{
    AI();
    player=2;
    
  }
}
randPlayer();
console.log(player)
//music.play()
 

// bug resolved now Ai works

// check win has to work


    

  
   

// add onclick eventlistner on reset btn

reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    setUp();
    isgameover = false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";

})
//Player

// 1 human player

  function human(){

    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
checkWin();
        element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioTurn.play();
                AI();
                if (!isgameover) {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    }
     } })
    
   })
console.log("I Play")

}

 
// 2 now ai game player included using minimax and alpha beta pruning

function AI(){
    let random = Math.floor(Math.random()*9)
    audioTurn.play();
    console.log("AI works")
     checkWin();
    human();
   let randbox = document.getElementById(`${random}`);
   if(randbox.innerText===''){
   randbox.innerText=turn;
   turn=changeTurn();
  //bug if random get same as human player
  
   if (!isgameover) {
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  }

}
