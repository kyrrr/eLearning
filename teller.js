
var teller = parseInt(localStorage.getItem("teller"));


function reset(){
teller = 0;
localStorage.setItem("teller",0);
}

function leggTil(tall){
teller = teller + parseInt(tall);
localStorage.setItem("teller",teller);
}

function skriv(){
return (" <h3> Totalt antall riktige fra alle quizzer er: " + teller + " (av 57), " + Math.round(teller*100/57) + "% </h3>");
}







