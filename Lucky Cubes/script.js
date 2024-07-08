// Function to change background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Change background color when the page loads
window.onload = function() {
  changeBackgroundColor("lightseagreen"); // You can change the color to any color you like
};

// Player 1 Code
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Player 2 Code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
document.querySelector("h1").innerHTML = "Draw!";
}
