//Buisness Logic
function Player(name){
  this.name= name;
  this.currentRoll = 0;
  this.turnScore = [];
  this.turnScoreSum = 0;
  this.totalScore = 0;
}
var rollDie = function() {
  return Math.ceil(Math.random()*(6));
}
Player.prototype.scoreAccumulate = function(){
this.currentRoll = rollDie();
  console.log(this.currentRoll)

  if (this.currentRoll===1){
    this.turnScore = [];
    alert ("Next Person Turn");
  }else {
this.turnScore.push(this.currentRoll);

}
  return this.turnScore;
}

Player.prototype.scoreCalculator = function(){
  for (i=0; i<this.turnScore.length; i++){
    this.turnScoreSum += this.turnScore[i];
    }
    alert("Next Person Turn");
  return this.turnScoreSum;
}

Player.prototype.setTotalScore = function(){
    this.totalScore += this.turnScoreSum;
    this.turnScore = [];
    this.turnScoreSum = 0;

  return this.totalScore;
}



var newPlayerOne = new Player("Kaytlin");
var newPlayerTwo = new Player("Anna");



//User Interface
$(document).ready(function(){
  // $("#Form").submit(function(event) {
  //     event.preventDefault();
  //     var inputtedName = $("input#name").val();
  //
  //     console.log(newPlayerOne.name);
  //   });

  $("#play-button").click(function(event){
    event.preventDefault();
    newPlayerOne.scoreAccumulate();
      console.log(newPlayerOne.turnScore)
    // newPlayerOne.scoreCalculator();
    // console.log(newPlayerOne.turnScoreSum)
  $("#current-rolls h3").text(newPlayerOne.turnScore);

});
$("#play-button-2").click(function(event){
  event.preventDefault();
  newPlayerTwo.scoreAccumulate();
  console.log(newPlayerTwo.turnScore)
  // newPlayerOne.scoreCalculator();
  // console.log(newPlayerOne.turnScoreSum)
$("#current-rolls h3").text(newPlayerTwo.turnScore)
});

  $("#hold-button").click(function(event){
    event.preventDefault();
    newPlayerOne.scoreCalculator();
    newPlayerOne.setTotalScore();

    console.log(newPlayerOne.turnScore);
    console.log(newPlayerOne.turnScoreSum);
    console.log(newPlayerOne.totalScore);
    $("#grand-total-player1 h3").text(newPlayerOne.totalScore);
  })
  $("#hold-button-2").click(function(event){
    event.preventDefault();
    newPlayerTwo.scoreCalculator();
    newPlayerTwo.setTotalScore();

    console.log(newPlayerTwo.turnScore);
    console.log(newPlayerTwo.turnScoreSum);
    console.log(newPlayerTwo.totalScore);
    $("#grand-total-player2 h3").text(newPlayerTwo.totalScore);
  })






});
