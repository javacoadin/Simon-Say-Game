let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let startBtn = document.getElementById("start-btn");

document.addEventListener("click", function(){
    if(start == false){
        console.log("game is started");
        start = true;

        levelUp();
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){     
    if(userSeq[idx] === gameSeq[idx]){         
        if(userSeq.length == gameSeq.length){             
            setTimeout(levelUp, 1000);         
        }     
    } else {         
        h2.innerHTML = `Game over! Your score was <b>${level}</b>.<br>Press any key to start.`;         
        document.querySelector("body").style.backgroundColor="red";         
        setTimeout(function(){             
            document.querySelector("body").style.backgroundColor="white";         
        }, 150);         
        reset();     
    } 
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}