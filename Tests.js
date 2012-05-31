var should = chai.should();
describe("Sales Tax example", function() {
  afterEach(function(){
    console.log(bill);
  });

  describe("when 'input' 1 is fed", function() {
    it("should return Total: 29.83, Sales Taxes: 1.50 woth correct individual prices", function() {

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


  describe("when 'input' 2 is fed", function() {
    it("should return Total: 65.15, Sales Tax: 7.65", function() {

      var input2 = [
            {name: "1 imported box of chocolates", price: 10.00, type: "food", imported: true},
            {name: "1 imported bottle of perfume", price: 47.50, type: "other", imported: true}
          ];

      var bill = new Bill(input2);
      bill.should.be.a("object");
      bill["1 imported box of chocolates"].should.equal(10.5);
      bill["1 imported bottle of perfume"].should.equal(54.65);
      bill["Sales Taxes"].should.equal(7.65);
      bill["Total"].should.equal(65.15);
    });
  });


  describe("when 'input' 3 is fed", function() {
    it("should return Total: 65.15, Sales Tax: 7.65", function() {

      var input3 = [
        {name: "1 imported bottle of perfume", price: 32.19, type: "other", imported: true},
        {name: "1 bottle of perfume", price: 20.89, type: "other", imported: false},
        {name: "1 packet of headache pills", price: 9.75, type: "medicine", imported: false},
        {name: "1 imported box of chocolates", price: 11.85, type: "food", imported: true}
      ];

      var bill = new Bill(input3);
      bill.should.be.a("object");
      bill["1 imported bottle of perfume"].should.equal(32.19);
      bill["1 bottle of perfume"].should.equal(20.89);
      bill["1 packet of headache pills"].should.equal(11.85);
      bill["Sales Taxes"].should.equal(6.70);
      bill["Total"].should.equal(74.68);
    });
  });
});