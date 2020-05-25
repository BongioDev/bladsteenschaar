
var steen = document.getElementById("steen");
var schaar = document.getElementById("schaar");
var spelerKeuze;
var compKeuze = ["blad", "steen", "schaar"]
var spelerScore = 0;
var compScore = 0;

document.getElementById("bladComp").style.display = "none";
document.getElementById("steenComp").style.display = "none";
document.getElementById("schaarComp").style.display = "none";


document.getElementById("blad").onclick = function() {
    spelerKeuze = "blad";
    i = Math.floor(Math.random()*compKeuze.length);
    if(spelerKeuze == "blad" && compKeuze[i] == "steen") {
        spelerScore++;
        document.getElementById("speler").innerHTML = spelerScore;
        document.getElementById("speler").style.color = "green";
        document.getElementById("steenComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("steenComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("speler").style.color = "black"; 
        }, 1000);
    } else if(spelerKeuze == "blad" && compKeuze[i] == "schaar") {
        compScore++;
        document.getElementById("comp").innerHTML = compScore
        document.getElementById("comp").style.color = "green";
        document.getElementById("schaarComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("schaarComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("comp").style.color = "black"; 
        }, 1000);
    } else {
        document.getElementById("bladComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("bladComp").style.display = "none"; 
           }, 1000);
    }
    // check score
    if(spelerScore == 10){
        alert("You won!");
        spelerScore = 0;
        compScore = 0;
    } else if(compScore == 10) {
        alert("the pc won!");
        spelerScore = 0;
        compScore = 0;
    }
};

document.getElementById("steen").onclick = function() {
    spelerKeuze = "steen";
    i = Math.floor(Math.random()*compKeuze.length);
    if(spelerKeuze == "steen" && compKeuze[i] == "schaar") {
        spelerScore++;
        document.getElementById("speler").innerHTML = spelerScore
        document.getElementById("speler").style.color = "green";
        document.getElementById("schaarComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("schaarComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("speler").style.color = "black"; 
        }, 1000);
    } else if(spelerKeuze == "steen" && compKeuze[i] == "blad") {
        compScore++;
        document.getElementById("comp").innerHTML = compScore;
        document.getElementById("comp").style.color = "green";
        document.getElementById("bladComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("bladComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("comp").style.color = "black"; 
        }, 1000);
    } else {
        document.getElementById("steenComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("steenComp").style.display = "none"; 
           }, 1000);
    }
    // check score
    if(spelerScore == 10){
        alert("You won!");
        spelerScore = 0;
        compScore = 0;
    } else if(compScore == 10) {
        alert("the pc won chhhhunt");
        spelerScore = 0;
        compScore = 0;
    }     
    };


document.getElementById("schaar").onclick = function() {
    spelerKeuze = "schaar";
    i = Math.floor(Math.random()*compKeuze.length);
    if(spelerKeuze == "schaar" && compKeuze[i] == "blad") {
        spelerScore++;
        document.getElementById("speler").innerHTML = spelerScore;
        document.getElementById("speler").style.color = "green";
        document.getElementById("bladComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("bladComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("speler").style.color = "black"; 
        }, 1000);
    } else if(spelerKeuze == "schaar" && compKeuze[i] == "steen") {
        compScore++;
        document.getElementById("comp").innerHTML = compScore;
        document.getElementById("comp").style.color = "green";
        document.getElementById("steenComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("steenComp").style.display = "none"; 
           }, 1000);
        setTimeout(function(){
        document.getElementById("comp").style.color = "black"; 
        }, 1000);
    } else {
        document.getElementById("schaarComp").style.display = "block";
        setTimeout(function(){
            document.getElementById("schaarComp").style.display = "none"; 
           }, 1000);
    }
    // check score
    if(spelerScore == 10){
        alert("You won!");
        spelerScore = 0;
        compScore = 0;
    } else if(compScore == 10) {
        alert("the pc won chhhhunt");
        spelerScore = 0;
        compScore = 0;
    }
};

