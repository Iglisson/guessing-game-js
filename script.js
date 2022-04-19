'use strict'

//
let gameMode = 6;
let red = 0;
let green = 0;
let blue = 0;
let rgbDrawn = `(${red}, ${green}, ${blue})`;
let indexDrawn = 0;

// elements html
const areaGame = document.querySelector(".area-game");
const rgbCode = document.querySelector("#rgb-code");

// buttons
const btnNewColor = document.querySelector("#btn-new-color");
const btnEasyMode = document.querySelector("#btn-easy-mode");
const btnHardMode = document.querySelector("#btn-hard-mode");

// event click
btnNewColor.addEventListener("click", () => { start() });
btnEasyMode.addEventListener("click", () => { gameMode = 6; start(); });
btnHardMode.addEventListener("click", () => { gameMode = 9; start(); });

function getColor() {
    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    const color = `(${red}, ${green}, ${blue})`;
    return color;
}

function newColor() {
    return rgbDrawn = getColor();
}

function easyMode() {
    console.log("easy mode");
    btnEasyMode.disabled = true;
    btnHardMode.disabled = false;
}

function hardMode() {
    console.log("hard mode");
    btnEasyMode.disabled = false;
    btnHardMode.disabled = true;
}

const start = () => {
    // clear area game
    areaGame.innerHTML = "";

    rgbDrawn = getColor();
    
    rgbCode.innerHTML = `rgb${rgbDrawn}`;    

    indexDrawn = Math.floor(Math.random() * gameMode);
    console.log(indexDrawn);

    for (let index = 0; index < gameMode; index++) {
        if (indexDrawn == index) {
            areaGame.innerHTML += `<button class="circle" id="circle-${index}" onclick="gameWin()" style="background: rgb${rgbDrawn};"></button>`;
        } else {
            areaGame.innerHTML += `<button class="circle" id="circle-${index}" onclick="gameOver()" style="background: rgb${getColor()};"></button>`;
        }
        
    }

}

function gameWin() {
    rgbCode.innerHTML = "Winner!";
    areaGame.innerHTML = `<img class='result-image' src='./gamewin.svg' alt='Result image'>`;
}

function gameOver() {
    rgbCode.innerHTML = "Loser...";
    areaGame.innerHTML = `<img class='result-image' src='./gameover.svg' alt='Result image'>`;
}

window.onload = start();