$(document).ready(function() {

var quiz = [
{
  "question": "Hvilken skala (trykk på Skala 1)",
  "choices": ["Moll", "Dur"],
  "correct": "Dur",
  "play": document.getElementById("play1").innerHTML="<input type='button' value='Skala 1' onclick='skala1()'/>"
}, 

{
  "question": "Hvilken skala (trykk på Skala 2)",
  "choices": ["Moll", "Dur"],
  "correct": "Moll",
  "play": document.getElementById("play2").innerHTML="<input type='button' value='Skala 2' onclick='skala2()'/>"
  
},

{
  "question": "Hvilket intervall (trykk på Intervall 1)",
  "choices": ["Kvint", "Stor ters", "Stor sekund"],
  "correct": "Stor ters",
  "play": document.getElementById("play3").innerHTML="<input type='button' value='Intervall 1' onclick='intervall1()'/>"
  
}

];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  playContainer = $("play"),
  scoreContainer = $("score"),
  submitBtn = $("submit");


var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";
    


  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Skala " + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + " possible.";
    submitBtn.textContent = "Submit Answer";
	
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Next Question";
    askingQuestion = false;

    // determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }

      // get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }

    scoreContainer.textContent = "Score: " + score + " right answers out of " +
      quiz.length + " possible.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit Answer";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
  content.innerHTML = "<h3>Godt jobbet!</h3>" +
    "<h3>Du har fått </h3>" +
    "<h3>" + score + " av  " + quiz.length + " riktige, " +
    Math.round(score / quiz.length * 100) + "%<h2>" +
	"<a href='gehor1.html'> <img src='pilFrem.png' id='pilFrem'/> </a>";
	leggTil(score);
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
});

