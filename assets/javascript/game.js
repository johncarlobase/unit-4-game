// GLOBAL VARIABLES
//==================================================

//CRYSTAL VARIABLES

var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};

// Scores

var currentScore = 0;
var targetScore = 0;

// Wins and Losses

var winCount = 0;
var lossCount = 0;


//FUNCTIONS
//==================================================

var getRandom = function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function(){
// Reset Current Score
currentScore = 0;

// set a new target score (between 19 and 120)
targetScore = getRandom(19, 120);
// set the different values for each of the crystals (between 1 and 12)
crystal.blue.value      = getRandom(1,12);
crystal.red.value       = getRandom(1,12);
crystal.green.value     = getRandom(1,12);
crystal.yellow.value    = getRandom(1,12);


// Change the HTML to reflect all of these changes
$("#targetScore").html(targetScore);
$("#yourScore").html(currentScore);


//Testing Console
console.log("---------------------")
console.log("Target Score:" + targetScore);
console.log("Blue: " + crystal.blue.value +" | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
console.log("---------------------")
}

// Responds to clicks on the crystals

var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
//Change the html to reflect changes in current score

$("#yourScore").html(currentScore);


//Call Checkwin function

checkWin();

//Testing Console
console.log("Your Score: " + currentScore);
}

// Check is user won or loss
var checkWin = function(){
    if (currentScore > targetScore){
        alert("Sorry. You Lost!");
        console.log("You Lost!");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    } else if (currentScore == targetScore){
        alert("Congrats");
        console.log("You Win!");
        winCount++;
        $("#winCount").html(winCount);

        startGame();
}
}


//MAIN PROCESS
//==================================================

startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});

$("#red").click(function(){
    addValues(crystal.red);

});

$("#green").click(function(){
    addValues(crystal.green);

});

$("#yellow").click(function(){
    addValues(crystal.yellow);

});

