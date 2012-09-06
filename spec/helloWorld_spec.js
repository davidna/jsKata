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

	beforeEach(function() {
		g = new Game;
	});

	it('test Gutter Game', function() {
		rollMany(20, 0);

		expect(g.score()).toEqual(0);
	});

	it('test all-ones Game', function() {
		rollMany(20, 1);

		expect(g.score()).toEqual(20);
	});

	// it('test one-spare Game', function() {
	//	g.roll(5);
	//	g.roll(5);	//spare
	//	g.roll(3);

	//	rollMany(17, 0);

	//	expect(g.score()).toEqual(16)
	// })
});