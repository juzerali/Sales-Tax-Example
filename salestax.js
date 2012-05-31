/*
*	@Author : Juzer Ali
*	Description: This is the implementation of Sales Tax Problem
*/

/*
*	@Class Tax(salesTaxValue, importTaxValue)
*			Default Values: salesTaxValue=10, importTaxValue=5
*		
*/
var Tax = function(salesTaxValue, importTaxValue){
	/*
	*	salesTax and importTax are private variables and cannot be accessed directly
	*/
	var salesTax = salesTaxValue || 10;
	var importTax = importTaxValue || 5;

	/*
	*	exempted is another private variable which is an array of types which should be exempted
	*	from local Sales Tax. This is an enum like object as in strongly typed languages.	
	*/
	var exempted = ["food", "book", "medicine"]

	//getter that returns value according to the passed type
	this.getSalesTax = function(type){
		return (exempted.indexOf(type) != -1)? 0:salesTax;
	};

	this.setSalesTax = function(value){
		salesTax = value;
	};

	//getter which returns value depending upon whether the item is imported
	this.getImportTax = function(imported){
		return imported?importTax:0;
	};

	this.setImportTax = function(value){
		importTax = value;
	};

	//This Method has the business logic
	this.calculate = function(item){
		item.taxApplicable = this.getSalesTax(item.type) + this.getImportTax(item.imported);
		return Math.ceil((item.price*item.taxApplicable/100)*100/5)*5/100;
	};
}

/*
*	We will assume that the tax object will be present in the environment in which the bill is
*	processed and calculated
*/
var tax = new Tax();

/*
*	Bill class is the class
*/
var Bill = function(bill){

	if(typeOf(bill) !== "Object") return null;

	var taxedBill = {
		"Sales Taxes" : 0, 
		"Total" : 0
	};

	bill.forEach(function(item){
		var taxValue = tax.calculate(item); 
		taxedBill[item["name"]] = Number((item["price"]+taxValue).toFixed(2));
		taxedBill["Sales Taxes"] = Number((taxedBill["Sales Taxes"]+taxValue).toFixed(2));
		taxedBill["Total"] = Number((taxedBill["Total"]+item["price"]+taxValue).toFixed(2));
	});

	return taxedBill;
};