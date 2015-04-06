$(document).ready(function() {

var quiz = [
{
  "question": "Hva kaller man kryss og b-er?",
  "choices": ["Ettertegn", "Halvtegn", "Fortegn"],
  "correct": "Fortegn",
  "image": "tom.png"
},

{
  "question": "Om en tone har fortegnet b, hvordan endres tonen?",
  "choices": ["Den blir høyere", "Den blir lavere", "Den endres ikke"],
  "correct": "Den blir lavere",
  "image": "notequizAss.png"
}, 

{
  "question": "Om en tone har et kryss, hvordan endres tonen?",
  "choices": ["Den blir høyere", "Den blir lavere", "Den endres ikke"],
  "correct": "Den blir høyere",
  "image": "notequizDiss.png"
}, 


{
  "question": "Låter tonen D# likt som tonen Eb?",
  "choices": ["Ja", "Nei"],
  "correct": "Ja",
  "image": "tom.png"
}, 


{
  "question": "Hva er et intervall?",
  "choices": ["Antallet slag i en takt", "Det samme som et fortegn", "Mellomrommet mellom to toner"],
  "correct": "Mellomrommet mellom to toner",
  "image": "tom.png"
}


];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  //imageContainer = $("image"),
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
    
  $("Artimage").src = quiz[currentQuestion].image;

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Spm" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "0 rette av " +
      quiz.length + " mulige.";
    submitBtn.textContent = "Sjekk svar";
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Neste spørsmål";
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

    scoreContainer.textContent = score + " rette av " +
      quiz.length + " mulige.";
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Sjekk svar";
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
  content.innerHTML = "<h3>Du har fullført quizen!</h3>" +
    "<h3>Her er dine resultater:</h3>" +
    "<h3>" + score + " av " + quiz.length + " spørsmål, " +
    Math.round(score / quiz.length * 100) + "%<h3><br/><br/>"
    + "<a href='gehorstart.html'><img src='pilFrem.png' id='pilFrem'/></a>";
    document.cookie=Math.round(score / quiz.length * 100);
    console.log(document.cookie);
	leggTil(score);
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
});

