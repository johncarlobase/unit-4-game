
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


var currentScore = 0;
var targetScore = 0;


var wins = 0;
var losses = 0;



var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {

    currentScore = 0;

    targetScore = getRandom(19, 120);


    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);


    $("#targetScore").html(targetScore);
    $("#yourScore").html(currentScore);
    //Testing Console
console.log("---------------------")
console.log("Target Score:" + targetScore);
console.log("Blue: " + crystal.blue.value +" | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
console.log("---------------------")

}

var addValues = function (crystal) {
    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);


    setTimeout(checkWin, 1000);

    console.log("Your Score: " + currentScore);
}

var checkWin = function () {
    if (currentScore > targetScore) {
        alert("Sorry. Try again!");
        losses++;
        $("#losses").html(losses);
        startGame();
    } else if (currentScore == targetScore) {
        wins++;
        alert("CONGRATULATIONS!");
        $("#wins").html(wins);

        startGame();
    }
}

startGame();

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#red").click(function () {
    addValues(crystal.red);

});

$("#green").click(function () {
    addValues(crystal.green);

});

$("#yellow").click(function () {
    addValues(crystal.yellow);

});

