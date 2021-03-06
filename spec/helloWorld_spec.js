// describe("Hello World", function(){

//	it("should return hello world", function(){
//		expect(helloWorld()).toEqual("Hello World");
//	});
// });

describe("Bowling Game TDD Kata", function() {
	var g = null;

	function rollMany(rolls, pinsDown) {
		for(var i = 0; i < rolls; i++) {
		 	g.roll(pinsDown);
		}	
	}

	function rollSpare() {
		g.roll(5);
		g.roll(5);
	}

	beforeEach(function() {
		g = new Game;
	});

	it('test #1 Gutter Game', function() {
		rollMany(20, 0);

		expect(g.score()).toEqual(0);
	});

	it('test #2 all-ones Game', function() {
		rollMany(20, 1);

		expect(g.score()).toEqual(20);
	});

	it('test #3 one-spare Game', function() {
		rollSpare();
		g.roll(3);
		rollMany(17, 0);

		expect(g.score()).toEqual(16)
	});
});