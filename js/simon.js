// Waiting for Keydown to Start Game
$(document).keydown(function () {
    if(gameSequence.length === 0){
        startRound();
    }
})

const buttonColors = ["green", "red", "yellow", "blue"];
const playerSequence = [];
const gameSequence = [];
const loser = new Audio("sounds/wrong.wav");

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber;
}

async function startRound() {
    await sleep(1000);
    $("h1").text("Round "+(gameSequence.length+1));
    gameSequence.push(nextSequence());
    doStuff(gameSequence);
}

function playCheck() {
    if(playerSequence.length !== gameSequence.length) {  
        if(playerSequence[playerSequence.length-1] !== gameSequence[playerSequence.length-1]){
            $("h1").text("Loser!");
            lossAnimation(); 
            resetGame();
        } else {
            //do nothing
        } 
    } else if(playerSequence.length === gameSequence.length){
        if(arraysEqual(playerSequence, gameSequence) === true){
            playerSequence.length = 0;
            startRound();
        } else if (arraysEqual(playerSequence, gameSequence) === false){
            $("h1").text("Loser!");
            lossAnimation();   
            resetGame();
        }
    }
}

async function resetGame() {
    await sleep(1200);
    $("h1").text("Press Any Key on Keyboard to Start, then Click Colors to Follow the Presented Pattern");
    gameSequence.length = 0;
    playerSequence.length = 0;
}

function arraysEqual(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function lossAnimation() {
    $("img").fadeIn();
    loser.play();
    setTimeout(function(){$("img").fadeOut();},1000);
}

// Call animation, sound, and log click when card is clicked
$(".card").on("click", function (event) {
    clickAnimation(event.target.id);
    playSound(event.target.id);
    playerPick(event.target.id);
    playCheck();
})

// Function to change styles on click
var clickAnimation = function (buttonColor) {
    $("#" + buttonColor).addClass("clicked");

    setTimeout(function () {
        $("#" + buttonColor).removeClass("clicked");
    }, 100);
}

// Function to playback sound for different cards
function playSound(buttonColor) {
    switch (buttonColor) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;

        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        default:
            console.log(buttonColor);
    }
}

function playerPick(buttonColor) {
    switch (buttonColor) {
        case "green":
            playerSequence.push(0);
            break;

        case "red":
            playerSequence.push(1);
            break;

        case "yellow":
            playerSequence.push(2);
            break;

        case "blue":
            playerSequence.push(3);
            break;
        default:
            console.log(buttonColor);
    }
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function doStuff(inputArray) {
    // We now have the ability to use the 'await' keyword
    // const done = await sleep(1000);
    // done now has the value of 'done' (after 1000 ms)

    for (let i = 0; i < inputArray.length; i++) {
        // Do some work
        const color = buttonColors[inputArray[i]];
        playSound(color);
        clickAnimation(color);
        await sleep(700);
    }
}
