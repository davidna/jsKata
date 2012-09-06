// function helloWorld(){
  	
//	return "Hello World";

// };

function Game() {
	var rolls = new Array();
	var currentRoll = 0;

	var isSpare = function(rollIndex) {
		return (rolls[rollIndex] + rolls[rollIndex + 1]) == 10;
	}

	this.roll = function(pinsDown) {
		rolls[currentRoll++] = pinsDown;
	}

	this.score = function() {
		var total = 0;
		var rollIndex = 0;

		for(var frame = 0; frame < 10; frame++) {

			if (isSpare(rollIndex)) {
				total += 10 + rolls[rollIndex + 2];
				rollIndex += 2;
			} else {
				total += rolls[rollIndex] + rolls[rollIndex + 1];
				rollIndex += 2;
			}
			
		}

		return total;
	}


};