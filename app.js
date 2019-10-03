// user presses a start button to start a game, it disappers once questions come to the screen;
// the timer set for 30 seconds;
// once user presses the start button timer counts down;
// a question appers;
// 4 choices of answer appers;
// user clicks on the answer a picture shows up (of the correct answer);
// a sign of "Yes! It's correct"/"NOPE!" appers;
// with no user input it will move on to the next question;
// timer starts from the beginning (30 seconds) once the next question appers.
$(document).ready(function() {
  var questions = [
    {
      question: "Who is the famous home alone kid?",
      choices: [
        "Buzz MacCallister",
        "Kevin MacCallister",
        "Fuller MacCallister",
        "Jeff MacCallister"
      ],
      answer: 1,
      image: "km01.gif"
    },

    {
      question: "Where do the popular friends live?",
      choices: ["California", "Florida", "New York", "Colorada"],
      answer: 2,
      image: "fr02.gif"
    },

    {
      question: "Who is the luckiest Pretty Woman?",
      choices: [
        "Winona Ryder",
        "Jennifer Aniston",
        "Laura San Giacomo",
        "Julia Roberts"
      ],
      answer: 3,
      image: "pw03.gif"
    },

    {
      question:
        "Who is FBI agent pretened to be miss New Jersey for Miss Congeniality Contest?",
      choices: [
        "Jade Glab",
        "Kaitlyn Schoeffel",
        "Lindsey Giannini",
        "Sandra Bullock"
      ],
      answer: 3,
      image: "sb04.jpg"
    },

    {
      question: "In 'Charlie's Angels' - Charlie voiced by...?",
      choices: [
        "John Travolta",
        "John Forsythe",
        "John Krasinski",
        "John Mayer"
      ],
      answer: 1,
      image: "ca05.jpg"
    },

    {
      question:
        "What kind of pie it referenced to in the movie 'American Pie'?",
      choices: ["Apple", "Blueberry", "Pecan", "Key lime"],
      answer: 0,
      image: "ap06.jpg"
    },

    {
      question: "Who was the blonde who became a lawyer?",
      choices: [
        "Charlize Theron",
        "Amber Heard",
        "Blake Lively",
        "Reese Witherspoon"
      ],
      answer: 3,
      image: "lb07.jpg"
    }
  ];

  var intervalId;
  var timer = 30;

  $("#start").click(function() {
    $("#start").hide();
    run();
    displayQuestion();
  });

  function run() {
    $("#time").html("Time: " + timer);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $("#time").html("Time: " + timer);
  }

  function displayQuestion() {
    console.log(questions[0].question);
  }
});
