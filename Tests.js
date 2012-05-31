var should = chai.should();
describe("Sales Tax example", function() {


  describe("when 'input' 1 is fed", function() {
    it("should return Total: 29.83, Sales Taxes: 1.50", function() {

    	/*
    	*  Input 1:
  		*	1 book at 12.49
  		*	1 music CD at 14.99
  		*	1 chocolate bar at 0.85
  		*/
      var input1 = [
      	{name: "1 book", price: 12.49, type: "book", imported: false},
      	{name: "1 music CD", price: 14.99, type: "other", imported: false},
      	{name: "1 chocolate", price: 0.85, type: "food", imported: false}
      ];
      	var bill = new Bill(input1);
        bill["1 music CD"].should.equal(16.49);
      	bill["Total"].should.equal(29.83);
      	bill["Sales Taxes"].should.equal(1.5);
    });
  });
/*
  describe("when 'input' 2 is fed", function() {
    it("should return output", function() {
  /* 1 imported bottle of perfume: 32.19
  * 1 bottle of perfume: 20.89
  * 1 packet of headache pills: 9.75
  * 1 imported box of chocolates: 11.85
  */


/*
  Input 2: 1 imported box of chocolates at 10.00 1 imported bottle of perfume at 47.50

  var input2 = [
        {name: "1 imported box of chocolates at 10.00", price: 10.00, type: "food", imported: true},
        {name: "1 imported bottle of perfume at 47.50", price: 47.50, type: "other", imported: true}
      ];

  1 imported bottle of perfume: 32.19
  1 bottle of perfume: 20.89
  1 packet of headache pills: 9.75
  1 imported box of chocolates: 11.85

  var input3 = [
        {name: "1 imported bottle of perfume: 32.19", price: 32.19, type: "other", imported: true},
        {name: "1 bottle of perfume 20.89", price: 20.89, type: "other", imported: false},
        {name: "1 packet of headache pills: 9.75", price: 9.75, type: "medicine", imported: false},
        {name: "1 imported box of chocolates: 11.85", price: 11.85, type: "food", imported: true}
      ];
}*/

});