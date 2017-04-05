//Buisness Logic
function PlayerOne(name){
  this.name= name;
  this.currentRoll = 0;
  this.turnScore = [];
  this.turnScoreSum = 0;
  this.totalScore = 0;
}
var rollDie = function() {
  return Math.ceil(Math.random()*(6));
}
PlayerOne.prototype.scoreAccumulate = function(){
this.currentRoll = rollDie();
  console.log(this.currentRoll)

  if (this.currentRoll===1){
    this.turnScore = [];
  }else {
this.turnScore.push(this.currentRoll);

}
  return this.turnScore;
}

PlayerOne.prototype.scoreCalculator = function(){
  for (i=0; i<this.turnScore.length; i++){
    this.turnScoreSum += this.turnScore[i];
    }

  return this.turnScoreSum;
}



var newPlayerOne = new PlayerOne("Kaytlin");
var newPlayerTwo = new PlayerOne("Anna");



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

});

  $("#hold-button").click(function(event){
    event.preventDefault();
    newPlayerOne.scoreCalculator();
    console.log(newPlayerOne.turnScoreSum);
  })




});
