/* Table of Contents 

1.0 Globals
2.0 Quiz Timer
3.0 Run Quiz

*/

/***************/
/* 1.0 Globals */
/***************/

// create variable to track current question 
var currentQuestion = 0;

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

// access question components
var questionTextEl = document.querySelector("#question-text");
console.log(questionTextEl);
var choice0Btn = document.querySelector("#choice-0eth-btn");
var choice1Btn = document.querySelector("#choice-1eth-btn");
var choice2Btn = document.querySelector("#choice-2eth-btn");
var choice3Btn = document.querySelector("#choice-3eth-btn");

// add quiz questions about JavaScript
var questions = [

  {
    title: "question1",
    text: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts" 
  },
  {
    title: "question2",
    text: "The condition in an if / else statement is enclosed within:",
    choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: "3. parentheses"
  },
  {
    title: "question3",
    text: "Arrays in JavaScript can be used to store:",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above" 
  },
  {
    title: "question4",
    text: "String values must enclosed within ____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes"
  },
  {
    title: "question5",
    text: "A very useful tool used during development and debugging for printing content to the debuggers is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    answer: "4. console log" 
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

/*************************/
/* 3.0 Display Questions */
/*************************/

// write function to display question
function displayQuestion() {
  questionTextEl.textContent = questions[currentQuestion].text;
  choice0Btn.textContent = questions[currentQuestion].choices[0];
  choice1Btn.textContent = questions[currentQuestion].choices[1];
  choice2Btn.textContent = questions[currentQuestion].choices[2];
  choice3Btn.textContent = questions[currentQuestion].choices[3];
};

/******************/
/* 4.0 Run Quiz */
/******************/

// add event listeners for quiz start button
quizStartBtn.addEventListener("click", runQuiz);

// run quiz
function runQuiz(event) {
  // prevent default
  event.preventDefault();
  console.log(event);
  console.log("in runQuiz function!");

  // start the timer
  setTime();

  // hide the quiz start screen
  quizStartEl.style.display = "none";

  // display the quiz question screen
  quizQuestionEl.style.display = "block";

  displayQuestion();

};