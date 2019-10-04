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
      image: "km01.gif width=300px height=300px"
    },

    {
      question: "Where do the popular friends live?",
      choices: ["California", "Florida", "New York", "Colorada"],
      answer: 2,
      image: "fr02.gif width=300px height=300px"
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
      image: "pw03.gif width=300px height=300px"
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
      image: "sb04.jpg width=300px height=300px"
    },

    {
      question:
        "What movie is this phrase from: 'My mama always said ‘Life is like a box of chocolate. You never know what you’re gonna get.'?",
      choices: ["Titanic", "Forrest Gump", "Toy Story", "The Sixth Sense"],
      answer: 1,
      image: "fg005.gif width=300px height=300px"
    },

    {
      question:
        "What kind of pie it referenced to in the movie 'American Pie'?",
      choices: ["Apple", "Blueberry", "Pecan", "Key lime"],
      answer: 0,
      image: "ap06.jpg width=300px height=300px"
    },

    {
      question: "Who was the blonde girl who became a lawyer?",
      choices: [
        "Charlize Theron",
        "Amber Heard",
        "Blake Lively",
        "Reese Witherspoon"
      ],
      answer: 3,
      image: "lb07.jpg width=300px height=300px"
    }
  ];

  var correctCount = 0;
  var wrongCount = 0;
  var unanswerCount = 0;
  var intervalId;
  var timer = 30;
  var holder = [];
  var newArray = [];
  var holder = [];
  var index;
  var qCount = questions.length;
  var pick;
  var userGuess = "";

  $("#reset").hide();

  $("#start").click(function() {
    $("#start").hide();
    run();
    displayQuestion();
    for (var i = 0; i < questions.length; i++) {
      holder.push(questions[i]);
    }
  });

  function run() {
    $("#time").html("Time: " + timer);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    timer--;
    $("#time").html("Time: " + timer);
    if (timer === 0) {
      unanswerCount++;
      stop();
      $("#choice").html(
        "<p>Time is up! The correct answer: " +
          pick.choices[pick.answer] +
          "</p>"
      );
      hideimage();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  function displayQuestion() {
    //generate random index in array
    index = Math.floor(Math.random() * questions.length);
    pick = questions[index];

    $("#question").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choices.length; i++) {
      var userChoice = $("<div>");
      userChoice.addClass("answerchoice");
      userChoice.html(pick.choices[i]);
      //assign array position to it so can check answer
      userChoice.attr("data-guessvalue", i);
      $("#choice").append(userChoice);
      //		}
    }

    //click function to select answer and outcomes
    $(".answerchoice").on("click", function() {
      //grab array position from userGuess
      userGuess = parseInt($(this).attr("data-guessvalue"));

      //correct guess or wrong guess outcomes
      if (userGuess === pick.answer) {
        stop();
        correctCount++;
        userGuess = "";
        $("#choice").html("<p>Correct!</p>");
        hideimage();
      } else {
        stop();
        wrongCount++;
        userGuess = "";
        $("#choice").html(
          "<p>Wrong! The correct answer is: " +
            pick.choices[pick.answer] +
            "</p>"
        );
        hideimage();
      }
    });
  }

  function hideimage() {
    $("#choice").append("<img src=" + pick.image + ">");
    newArray.push(pick);
    questions.splice(index, 1);

    var hidimg = setTimeout(function() {
      $("#choice").empty();
      timer = 30;

      if (wrongCount + correctCount + unanswerCount === qCount) {
        $("#question").empty();
        $("#question").html("<h3>Game Over!  Here's how you did: </h3>");
        $("#choice").append("<h3> Correct: " + correctCount + "</h3>");
        $("#choice").append("<h3> Incorrect: " + wrongCount + "</h3>");
        $("#choice").append("<h3> Unanswered: " + unanswerCount + "</h3>");
        $("#reset").show();
        correctCount = 0;
        wrongCount = 0;
        unanswerCount = 0;
      } else {
        run();
        displayQuestion();
      }
    }, 4000);
  }
  $("#reset").on("click", function() {
    $("#reset").hide();
    $("#choice").empty();
    $("#question").empty();
    for (var i = 0; i < holder.length; i++) {
      questions.push(holder[i]);
    }
    run();
    displayQuestion();
  });
});
