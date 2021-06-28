/* Table of Contents 

1.0 Globals
2.0 TESTING: Simple Timer

*/

/***************/
/* 1.0 Globals */
/***************/

// select timer element by id
var timeEl = document.querySelector("#time");

// set timer starting point
var secondsLeft = 5;

/*****************************/
/* 2.0 TESTING: Simple Timer */
/*****************************/

// Sets up simple timer
// Sets up timer interval, displays seconds left, stops timer at zero 
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    // stop timer at zero seconds
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      // log quiz over
      console.log("Quiz over");
    }

  }, 1000);
}

// run simple timer
setTime();