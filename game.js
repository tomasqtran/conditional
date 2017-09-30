

var secretNumber = 4;

var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);

if (guess === secretNumber) {
	alert("you got it right!");
}

esle if(guess > secretNumber) {
	alert("guess again, too high");
}

esle {
	alert("guess again, too low");
}