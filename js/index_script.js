/** TABLE OF CONTENTS
  * 1.0 GLOBALS
  * 2.0 EVENT LISTENERS
  * 3.0 TIMER 
  * 4.0 QUESTION DISPLAY 
  * 5.0 QUESTION SCORING 
  * 6.0 RUN QUIZ
  * 7.0 PSEUDOCODE and TESTING
**/


/*-------------*/
/* 1.0 GLOBALS */
/*-------------*/

// create variables to track current question, choice, answer, and status 
var currentQuestion = 0;
var choice; 
var answer;
var previousQuestionStatus;

// access timer element by id
var timeEl = document.querySelector("#time");
// set timer starting point
var secondsLeft = 30;
// access quiz start button by id
var quizStartBtn = document.querySelector("#quiz-start-btn");

// access quiz start, question, end, and status screens
var quizStartEl = document.querySelector("#quiz-start-screen");
var quizQuestionEl = document.querySelector("#quiz-question-screen");
var quizEndEl = document.querySelector("#quiz-end-screen");
var quizPrevQuesStatusEl = document.querySelector("#prev-question-status-screen");

// access question text and choice elements 
var questionTextEl = document.querySelector("#question-text");
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

/*---------------------*/
/* 2.0 EVENT LISTENERS */
/*---------------------*/

// add event listener for quiz start button
quizStartBtn.addEventListener("click", runQuiz);

// add event listeners for choice buttons
choice0Btn.addEventListener("click", scoreChoice);
choice1Btn.addEventListener("click", scoreChoice); 
choice2Btn.addEventListener("click", scoreChoice);
choice3Btn.addEventListener("click", scoreChoice);


/*-----------*/
/* 3.0 TIMER */
/*-----------*/

// creates timer that decreases by one second and stops at zero
function setTime() {

  // sets interval in variable 
  var timerInterval = setInterval(function() {

    // decrements seconds left by 1
    secondsLeft--;
    // displays seconds left
    timeEl.textContent = "Time: " + secondsLeft;
    console.log("Time left: " + secondsLeft);

    // stops timer at zero seconds
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // logs quiz over when timer reaches zero
      console.log("Timer has hit zero");
    }

  }, 1000);

};


/*----------------------*/
/* 4.0 QUESTION DISPLAY */
/*----------------------*/

// displays current question
function displayCurrentQuestion() {
  questionTextEl.textContent = questions[currentQuestion].text;
  choice0Btn.textContent = questions[currentQuestion].choices[0];
  choice1Btn.textContent = questions[currentQuestion].choices[1];
  choice2Btn.textContent = questions[currentQuestion].choices[2];
  choice3Btn.textContent = questions[currentQuestion].choices[3];
};

// briefly displays previous question status
function displayPreviousQuestionStatus() {
  // unhide previous question status screen
  quizPrevQuesStatusEl.style.display = "block";
  // populate previous question status
  quizPrevQuesStatusEl.textContent = previousQuestionStatus;
  // hide previous question status screen after 1.5 seconds
  setTimeout(function() {
    quizPrevQuesStatusEl.style.display = "none"; 
  }, 1500);
};

/*----------------------*/
/* 5.0 QUESTION SCORING */
/*-----------------------*/

// scores the selected choice
function scoreChoice (event) {

  // prevent default
  event.preventDefault();

  // update choice to text of clicked button
  choice = event.target.innerHTML; 
  console.log("choice is: " + choice);
  // update answer to text of current question answer
  answer = questions[currentQuestion].answer;
  console.log("answer is: " + answer);

  // test whether choice is correct
  if (choice === answer) {
    // update previous question status
    previousQuestionStatus = "Correct!";
    // briefly display previous question status screen
    displayPreviousQuestionStatus();
  } else {
    // update previous question status
    previousQuestionStatus = "Wrong!";
    // decrement timer by ten seconds
    secondsLeft -= 10;
    displayPreviousQuestionStatus();
  }

  // log previous question status
  console.log("previous question status is: " + previousQuestionStatus);
  // increment current question number and log current question
  currentQuestion++;
  console.log("current question is now: " + currentQuestion);

};

/*------------------*/
/* 6.0 RUNNING QUIZ */
/*------------------*/

// run quiz
function runQuiz(event) {

  // prevent default
  event.preventDefault();
  // console.log(event);
  // console.log("in runQuiz function!");

  // start the timer
  setTime();

  // hide the quiz start screen
  quizStartEl.style.display = "none";
  // display the quiz question screen
  quizQuestionEl.style.display = "block";

  // display the current question
  displayCurrentQuestion();

};


/*----------------------------*/
/* 7.0 PSEUDOCODE and TESTING */
/*----------------------------*/

/* 

#---- quiz page -----#

## clicking on the view high scores link should
#- go to the highscores page

## clicking quiz start button should
#- prevent default
#- start the timer
#- hide the quiz start screen
#- display the quiz question screen
#- display the content of the first question

## the timer should
#- decrement by one second
#- decrement by ten seconds when a queston is wrong
- stop when:
  #-- it reaches zero
  -- OR quiz is finished
- end quiz when it stops

## clicking a non-final question choice should:
#- prevent default
#- score the previous question
  -- if the answer is correct:
    #--- set the currentQuestionStatus to correct
    --- briefly display the previous question status 
    #--- (leave timer as-is)
  -- if the answer is incorrect:
    #--- set the currentQuestionStatus to wrong 
    --- briefly display the previous question status
    #--- decrement timer by ten seconds
#- increment the current question by 1
- display the content of the next question

## clicking the final question choice should
- prevent default
- hide the question screen
- display the quiz end screen
- score the previous question
  -- if the answer is correct:
    --- briefly display the previous question status
    --- (leave timer as-is)
    --- stop the timer
    --- store the time remaining
    --- display the time remaining as the score
  -- if the answer is incorrect:
    --- briefly display the previous question status
    --- decrement the timer by ten seconds 
    --- stop the timer
    --- store the time remaining 
    --- display the time remaining as the score

## hitting the initials submit button should
- check that the initials text input is not empty
  -- if the initials text input is empty:
    --- display an alert
    --- (do not save anything)
  -- if the initials text input is non-empty:
    --- save the initials such that they're associatied with the current score
    --- go to the view highscores page

#---- highscores page -----#

## going to the highscores page should
- display highscores page
- dispay each locally stored score as an a list item
- display the scores in descending order
- display the ranking number next to each score

## hitting the go back button should
- leave the scores as-is
- go back to the main quiz page

## hitting the clear highscores button should
- clear the scores from local storage
- (stay on the current page)

*/  