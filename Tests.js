describe("Sales Tax example", function() {


  describe("when 'input' 1 is fed", function() {
    it("Output should be", function() {
    	/*
    	*   Input 1:
		*	1 book at 12.49
		*	1 music CD at 14.99
		*	1 chocolate bar at 0.85
		*/
      var input1 = [
      	{name: "1 book at 12.49", price: 12.49, type: "book", imported: false},
      	{name: "1 music CD at 14.99", price: 14.99, type: "other", imported: false},
      	{name: "1 chocolate bar at 0.85", price: 0.85, type: "food", imported: false}
      ];
      	var bill = tax.calculate(input1);
      	bill.total.should.equal(29.83);
      	bill.SalesTax.should.equal("1.50");
    });
  });
/*
  describe("when a number is passed in", function() {
    it("returns the number", function() {
      var result = StringCalculator.add("2");
      assert(result === 2);
    });
  });

  describe("when string is passed in", function() {
    it("returns NaN", function() {
      var result = StringCalculator.add("a");
      assert(isNaN(result));
    });
  });

  describe("when '1,2' is passed in", function() {
    it("returns 3", function() {
      var result = StringCalculator.add("1,2");
      assert(result === 3);
    });
  });
});
*/