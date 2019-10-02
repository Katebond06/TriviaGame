// user presses a start button to start a game, it disappers once questions come to the screen;
// the timer set for 30 seconds;
// once user presses the start button timer counts down;
// a question appers;
// 4 choices of answer appers;
// user clicks on the answer a picture shows up (of the correct answer);
// a sign of "Yes! It's correct"/"NOPE!" appers;
// with no user input it will move on to the next question;
// timer starts from the beginning (30 seconds) once the next question appers.

var number = 30;
var intervalId;
$("#start").on("click", start);

function start() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("time").html("<h2>" + number + "</h2>");
}
