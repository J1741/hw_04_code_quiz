/* Table of Contents 

1.0 Globals
2.0 Quiz Timer
3.0 Start Quiz

*/

/***************/
/* 1.0 Globals */
/***************/

// access timer element by id
var timeEl = document.querySelector("#time");
// set timer starting point
var secondsLeft = 5;
// access quiz start button by id
var quizStartBtn = document.querySelector("#quiz-start-btn");

// access quiz start, question, end, and status screens
var quizStartEl = document.querySelector("#quiz-start-screen");
var quizQuestionEl = document.querySelector("#quiz-question-screen");
var quizEndEl = document.querySelector("#quiz-end-screen");
var quizPrevQuesStatusEl = document.querySelector("#prev-question-status-screen");

// add test questions
var questions = [

  {
    title: "question0",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
    choices: ["test1", "test2", "test3", "test4"],
    answer: "test1" 
  },
  {
    title: "question1",
    text: "Aenean vel iaculis ante, eu interdum mauris:",
    choices: ["test5", "test6", "test7", "test8"],
    answer: "test5"
  },
  {
    title: "question2",
    text: "Sed id erat et augue gravida rutrum:",
    choices: ["test9", "test10", "test11", "test12"],
    answer: "test9" 
  }
];

// log questions
console.log(questions);

/******************/
/* 2.0 Quiz Timer */
/******************/

// Start timer when when quiz start button is clicked
function setTime() {

  // Sets interval in variable 
  var timerInterval = setInterval(function() {

    // Decrements seconds left by 1
    secondsLeft--;
    // Displays seconds left
    timeEl.textContent = "Time: " + secondsLeft;
    console.log("Time left: " + secondsLeft);

    // Stops timer at zero seconds
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // Logs quiz over
      console.log("Quiz over");
    }

  }, 1000);

};

/******************/
/* 3.0 Start Quiz */
/******************/

// add event listeners for quiz start button
quizStartBtn.addEventListener("click", startQuiz);

// start quiz
function startQuiz(event) {
  // prevent default
  event.preventDefault();
  console.log(event);
  console.log("in startQuiz!");

  // start the timer
  setTime();

  // hide the quiz start screen
  quizStartEl.style.display = "none";

  // display the quiz question screen
  quizQuestionEl.style.display = "block";

  // display the content of the first question
};