//Buisness Logic
function PlayerOne(name){
  this.name= name;
  this.currentRoll = 0;
  this.turnScore = [];
  this.totalScore = 0;
}
var rollDie = function() {
  return Math.ceil(Math.random()*(6));
}
PlayerOne.prototype.scoreCalculator = function(){
this.currentRoll = rollDie();
  console.log(this.currentRoll)

  if (this.currentRoll===1){
    this.turnScore.push(0);
  }else {
this.turnScore.push(this.currentRoll);
  }
  return this.turnScore;
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

  $("#btn").click(function(event){
    event.preventDefault();
    newPlayerOne.scoreCalculator();
    console.log(PlayerOne.turnScore)

});


});
