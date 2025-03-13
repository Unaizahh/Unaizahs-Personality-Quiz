/*Add your JavaScript here*/
var moonScore = 0;
var sunScore= 0;
var numQuestion = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

/* Event Listeners*/

function updateResult() {
  if (sunScore >= 2) {
    console.log("You are a sun person");
    result.innerHTML = "You are a sun person!"
  } else if (moonScore >= 2) {
    console.log("you are a moon person");
    result.innerHTML = "You are a moon person!"
  }
}
function sun() {
  sunScore += 1;
  numQuestion += 1;

  console.log("question count = " + numQuestion + " sun score = " + sunScore);

  if (numQuestion == 3) {
    console.log("Quiz is done!");
    updateResult();
  }
}

function moon() {
  moonScore += 1;
  numQuestion += 1;

  console.log("question count = " + numQuestion + " moon score = " + moonScore)

  if (numQuestion == 3) {
    console.log("Quiz is done!");
    updateResult();
  }
}

function Restart() {
  sunScore = 0;
  moonScore = 0;
  numQuestion = 0;
  result.innerHTML = "Your result is..."
}

var restart = document.getElementById("restart");

q1a1.addEventListener("click", sun)
q1a2.addEventListener("click", moon)

q2a1.addEventListener("click", moon)
q2a2.addEventListener("click", sun)

q3a1.addEventListener("click", sun)
q3a2.addEventListener("click", moon)

restart.addEventListener("click", Restart)
