console.log("JS file is connected to HTML! Woo!")
var card0ne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo === cardFour);
window.alert('You found a match!');
if (cardTwo !== cardFour);
window.alert('Sorry, try again.');
*/

var gameboard = document.getElementById('game-board');
function createCards(gameboard){
for (var i = 0; i < 4; i++){
var newDiv = document.createElement('div');
newDiv.className = "card";
gameboard.appendChild(newDiv);
}}
createCards(gameboard);