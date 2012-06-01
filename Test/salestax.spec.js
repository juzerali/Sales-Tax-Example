var should = chai.should();
chai.Assertion.includeStack = true;
describe("In Sales Tax with sales tax 10% and import tax 5%", function() {

  describe("An exempted item which is not imported", function() {
    it("should have its price unchanged", function() {

      var input = {name: "1 book", price: 12.49, type: "book", imported: false};
        var bill = new Bill(input);
        bill["1 book"].should.equal(12.49);
        bill["Total"].should.equal(12.49);
        bill["Sales Taxes"].should.equal(0);
    });
  });

  describe("A non-exempted item which is not imported", function() {
    it("should have its price accrued 10% as tax which is rounded to nearest 0.05", function() {

      var input = [
        {name: "1 Music CD", price: 14.99, type: "music", imported: false},
      ];
        var bill = new Bill(input);
        bill["1 Music CD"].should.equal(16.49);
        bill["Total"].should.equal(16.49);
        bill["Sales Taxes"].should.equal(1.5);
    });
  });

  describe("An exempted item which is imported", function() {
    it("should have its price accrued 5% as tax which is rounded to nearest 0.05", function() {

      var input = [
        {name: "1 imported box of chocolates", price: 10.00, type: "food", imported: true},
      ];
        var bill = new Bill(input);
        bill["1 imported box of chocolates"].should.equal(10.5);
        bill["Total"].should.equal(10.5);
        bill["Sales Taxes"].should.equal(0.50);
    });
  });

  describe("A non-exempted item which is imported", function() {
    it("should have its price accrued 15% as tax which is rounded to nearest 0.05", function() {

      var input = [
        {name: "1 imported bottle of perfume", price: 27.99, type: "perfume", imported: true},
      ];
        var bill = new Bill(input);
        bill["1 imported bottle of perfume"].should.equal(32.19);
        bill["Total"].should.equal(32.19);
        bill["Sales Taxes"].should.equal(4.2);
    });
  });

  describe("If supplied with negative price", function() {
    it("should throw an error", function() {

      var input = [
        {name: "1 imported bottle of perfume", price: -27.99, type: "perfume", imported: true},
      ];
        (new Bill(input)).should.Throw(new Error("Price Cannot be negative"));
    });
  });

  describe("Crude Test", function(){
    describe("input 1", function() {
      it("should return Total: 29.83, Sales Taxes: 1.50 with correct individual prices", function() {

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


    describe("input 2", function() {
      it("should return Total: 65.15, Sales Tax: 7.65 with correct individual prices", function() {

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


    describe("input 3", function() {
      it("should return Total: 74.68, Sales Tax: 6.70 with correct individual prices", function() {

        var input3 = [
          {name: "1 imported bottle of perfume", price: 27.99, type: "other", imported: true},
          {name: "1 bottle of perfume", price: 18.99, type: "other", imported: false},
          {name: "1 packet of headache pills", price: 9.75, type: "medicine", imported: false},
          {name: "1 imported box of chocolates", price: 11.25, type: "food", imported: true}
        ];

        var bill = new Bill(input3);
        bill.should.be.a("object");
        bill["1 imported bottle of perfume"].should.equal(32.19);
        bill["1 bottle of perfume"].should.equal(20.89);
        bill["1 imported box of chocolates"].should.equal(11.85);
        bill["Sales Taxes"].should.equal(6.70);
        bill["Total"].should.equal(74.68);
      });
    });
  });
});