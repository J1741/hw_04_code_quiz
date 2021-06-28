/* Table of Contents 

1.0 Globals
2.0 Quiz Timer

*/

/***************/
/* 1.0 Globals */
/***************/

// access timer element by id
var timeEl = document.querySelector("#time");

// set timer starting point
var secondsLeft = 5;

// access start button by id
var quizStartBtn = document.querySelector("#quiz-start-btn");

/******************/
/* 2.0 Quiz Timer */
/******************/

// Listen for click on quiz start button
quizStartBtn.addEventListener("click", 
function setTime() {
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
  
});
