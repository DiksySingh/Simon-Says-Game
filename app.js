let gameSeq = [];
let userSeq = [];

let btns = ["yellow","green","red","blue"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btns[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function btnPressed(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}