var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function animatePress(currentColour){

    $("#" + gamePattern).addClass(".pressed");


}

function playSound(name) {

    var audioFile = new Audio ("./sounds/" + gamePattern + ".mp3");
    audioFile.play();

}

function nextSequence() {

    var randomChosenColour; 
    var randomNumber = Math.floor(Math.random() * 4); 

    randomChosenColour = buttonColours [randomNumber];

    gamePattern.push(randomChosenColour);


}

nextSequence();

$("#" + gamePattern).on("click", function(){

    var userChosenColour = $("#" + gamePattern);
    $("#" + gamePattern).fadeOut(100).fadeIn(100);
    animatePress($("#".gamePattern));
    playSound($("#".gamePattern));
    userClickedPattern.push(userChosenColour);


});

