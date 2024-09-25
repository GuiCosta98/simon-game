var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var pressedKey = true;
var level = 0;

function playSound(nameSound) {

    var audioFile = new Audio ("./sounds/" + nameSound + ".mp3");
    audioFile.play();
};

function animatePress(currentColour) {

    setTimeout(function() { 

        $("#" + currentColour).removeClass("pressed");

    }, 100);

    $("#" + currentColour).addClass("pressed");

    setTimeout(100);
    
};

function nextSequence() {

    var randomChosenColour; 
    var randomNumber = Math.floor(Math.random() * 4); 
    level++;

    $("h1").text('level ' + level);

    randomChosenColour = buttonColours [randomNumber];

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    gamePattern.push(randomChosenColour);

};

$(".btn").on("click", function(){

    var userChosenColour = $(this).attr("id");
    
    
    animatePress(userChosenColour);
    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
    
    console.log(userClickedPattern);
    console.log(userChosenColour);
  

});

$("body").on("keydown", function() {

    if (pressedKey == true) {

        $("h1").text("Level 0");
        nextSequence();
        
        pressedKey = false;

    }

});