var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var pressedKey = true;
var level = 0;

function playSound(nameSound) {
  var audioFile = new Audio("./sounds/" + nameSound + ".mp3");
  audioFile.play();
}

function animatePress(currentColour) {
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

  $("#" + currentColour).addClass("pressed");

  setTimeout(100);
}

function nextSequence() {
  var randomChosenColour;
  var randomNumber = Math.floor(Math.random() * 4);
  level++;

  $("h1").text("level " + level);

  randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);
}

function checkAnswer() {
  var currentIndex = userClickedPattern.length - 1;
  // Compara o valor do indice do array do usuário 
  // ao valor do indice do array do padrão correspondente, ao usar a variável "currentIndex", 
  // que possuí o tamanho do indice do array do usuário - 1.
  if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
    if (userClickedPattern.toString() === gamePattern.toString()) {
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("body").addClass("game-over");
  setTimeout(200);
  playSound("wrong");
  $("h1").text("Game Over, press any key to restart.");
  startOver();
}

function startOver() {
  pressedKey = true;

  $("body").on("keydown", function () {
    if (pressedKey == true) {
      userClickedPattern = [];
      gamePattern = [];
      $("h1").text("Level 0");
      level = 0;
      nextSequence();
      pressedKey = false;
    }
  });
}

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");

  animatePress(userChosenColour);
  playSound(userChosenColour);

  userClickedPattern.push(userChosenColour);

  checkAnswer();
});

startOver();

function checkAnswer(currentLevel) {
  var currentIndex = userClickedPattern.length - 1;

  // Verifica se o último clique está correto
  if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
    // Se a sequência estiver completa
    if (userClickedPattern.length === gamePattern.length) {
      // Avança para o próximo nível após 1 segundo
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    gameOver(currentLevel); // Ativa o game over se houver um erro
  }
}
