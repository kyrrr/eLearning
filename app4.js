//oppsummering rytmetakt

$(document).ready(function() {

var quiz = [
{
  "question": "Hvilken verdi har denne noten?",
  "choices": ["Helnote", "Halvnote", "Fjerdedel"],
  "correct": "Halvnote",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/note3.png"
},

{
  "question": "Hvilken verdi har denne pausen?",
  "choices": ["Helnote", "Halvnote", "Fjerdedel"],
  "correct": "Fjerdedel",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/note1.png"
}, 

{
  "question": "Hvor mange takter har man i et musikkstykke?",
  "choices": ["Fire", "Seksten", "Så mange man vil"],
  "correct": "Så mange man vil",
  //"image": "https://home.hbv.no/884618/elaering/quizbilder/note4.png"
}, 

{
  "question": "Hvor mange fjerdedeler trenger man for å fylle in takt i taktarten 3/4?",
  "choices": ["Seks", "Fire", "Tre"],
  "correct": "Tre"
  //"image": "https://home.hbv.no/884618/elaering/quizbilder/note2.png"
}, 


{
  "question": "Hvilken taktart er dette?",
  "choices": ["Tre fjerdedel", "Fire fjerdedel", "Fem fjerdedel"],
  "correct": "Fire fjerdedel",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/taktart1.png"
}, 


{
  "question": "Hvilken taktart er dette?",
  "choices": ["Tre fjerdedel", "Fire fjerdedel", "Fem fjerdedel"],
  "correct": "Tre fjerdedel",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/taktart2.png"
},

{
  "question": "Hvor mange åttendeler trengs for å fylle en takt i denne taktarten?",
  "choices": ["Seksten", "Åtte", "Fire"],
  "correct": "Åtte",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/firefjerdedel.png"
},

{
  "question": "Hvilken verdi har denne pausen?",
  "choices": ["Sekstendel", "Åttendel", "Halvnote"],
  "correct": "Sekstendel",
  "image": "https://home.hbv.no/884618/elaering/quizbilder/pause4.png"
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
	leggTil(score);
 var  total = skriv();

  content.innerHTML = "<h3>Du har fullført quizen!</h3>" +
    "<h3>Her er dine resultater:</h3>" +
    "<h3>" + score + " av " + quiz.length + " spørsmål, " +
    Math.round(score / quiz.length * 100) + "%</h3><br/><br/>"
	+ total;
    // document.cookie=Math.round(score / quiz.length * 100); -->
    //console.log(document.cookie);

	 
}

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
});

