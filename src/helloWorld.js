// function helloWorld(){
  	
//	return "Hello World";

// };

function Game() {
	var total = 0;

	this.roll = function(pinsDown) {
		total += pinsDown;
	}

	this.score = function() {
		return total;
	}
};