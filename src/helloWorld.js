// function helloWorld(){
  	
//	return "Hello World";

// };

function Game() {
	var rolls = new Array(21);
	var currentRoll = 0;

	this.roll = function(pinsDown) {
		this.rolls[currentRoll] = pinsDown;
	}

	this.score = function() {
		var total = 0;

		for(var i = 0; i < this.rolls.length; i++)
			total += this.rolls[i];

		return total;
	}
};