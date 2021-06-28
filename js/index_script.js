/* Table of Contents 

1.0 Globals
2.0 Quiz Timer

*/

/***************/
/* 1.0 Globals */
/***************/

// access timer element by id
var timeEl = document.querySelector("#time");
console.log(timeEl);

// set timer starting point
var secondsLeft = 5;
console.log(secondsLeft);

// access start button by id
var quizStartBtn = document.querySelector("#quiz-start-btn");

console.log(quizStartBtn);

// TESTING: add test questions
var questions = [

  {
    title: "question1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
    choices: ["test1", "test2", "test3", "test4"],
    answer: "test1" 
  },
  {
    title: "question2",
    text: "Aenean vel iaculis ante, eu interdum mauris:",
    choices: ["test5", "test6", "test7", "test8"],
    answer: "test5"
  },
  {
    title: "question3",
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


// Listen for click on quiz start button
function setTime(event) {
  // prevent default
  event.preventDefault();
  console.log(event);
  // Sets interval in variable 
  var timerInterval = setInterval(function() {

    // Decrements seconds left
    secondsLeft--;
    // Displays seconds left
    timeEl.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    // Stops timer at zero seconds
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // Logs quiz over
      console.log("Quiz over");
    }

  }, 1000);

};

quizStartBtn.addEventListener("click", setTime);