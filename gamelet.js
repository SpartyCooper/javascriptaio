/*

    Gamelet: a starting point for writing games
    Author: Chris Minnick
    Version: 1.0

    Instructions:
    Include gamelet.js in an HTML document containing
    an element with an id of 'ball'.
    The script will detect when the left or right arrow
    key is pressed and will move the ball element
    accordingly.

*/

const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys
let xPosition = 0;
let yPosition = 0;

/*
handleKeyPress
responds to certain key presses by updation position
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xPosition = xPosition - 10;
  }

  if (e.code === "ArrowRight") {
    xPosition = xPosition + 10;
  }

  if (e.code === "ArrowDown") {
    yPosition = yPosition + 10;
  }

  if (e.code === "ArrowUp") {
    yPosition = yPosition - 10;
  }

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  refresh(); //reposition the ball
}

/*
refresh
changes the position of the ball
*/

function refresh() {
  ball.style.left = xPosition + "px";
  ball.style.top = yPosition + "px";
}
