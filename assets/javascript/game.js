
//variables//

var wins = 0;
var losses = 0;
var totalScoreAdded = 0;
var randomNumberPick;
var crystal1 = 1 + Math.floor(Math.random() * 11);
var crystal2 = 1 + Math.floor(Math.random() * 11);
var crystal3 = 1 + Math.floor(Math.random() * 11);
var crystal4 = 1 + Math.floor(Math.random() * 11);

// to set & reset //

var play = function () {

  $(".crystals1, .crystal2, .crystal3 .crystal4").empty();

  randomNumberPick = 19 + Math.floor(Math.random() * 101);
  $("#randomNumber").html(randomNumberPick);

  var crystal1 = 1 + Math.floor(Math.random() * 11);
  var crystal2 = 1 + Math.floor(Math.random() * 11);
  var crystal3 = 1 + Math.floor(Math.random() * 11);
  var crystal4 = 1 + Math.floor(Math.random() * 11);

  $(".crystal1").attr({ "random": crystal1 });
  $(".crystal2").attr({ "random": crystal2 });
  $(".crystal3").attr({ "random": crystal3 });
  $(".crystal4").attr({ "random": crystal4 });

  console.log(crystal1)
  console.log(crystal2)
  console.log(crystal3)
  console.log(crystal4)

  totalScoreAdded = 0;

  $("#totalScore").html(totalScoreAdded);

  $("#losses").html("losses: " + losses);

  $("#wins").html("Wins: " + wins);

}

play();

$(document).on("click", ".crystal1, .crystal2, .crystal3, .crystal4", function () {

  var score = parseInt($(this).attr("random"));

  totalScoreAdded += score;
  
  $("#totalScore").html(totalScoreAdded); 

  if (totalScoreAdded === randomNumberPick) {
    
    wins++

    $("#wins").html("Wins: " + wins);

    $("#totalScore").html(0);

    play();

  } else if (totalScoreAdded > randomNumberPick) {

    losses++

    $("#losses").html("losses: " + losses);

    $("#totalScore").html(0);

    play();

  }

});

play();
