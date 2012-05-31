var Tax = function(salesTaxValue, importTaxValue){
	var salesTax = salesTaxValue || 10;
	var importTax = importTaxValue || 5;

	this.exempted = ["food", "book", "medicine"]

	this.getSalesTax = function(type){
		if(this.exempted.indexOf(type) != -1) return 0;
		return salesTax;
	};

	this.setSalesTax = function(value){
		salesTax = value;
	};

	this.getImportTax = function(imported){
		return imported?importTax:0;
	};

	this.setImportTax = function(value){
		importTax = value;
	};

	this.calculate = function(item){
		item.taxApplicable = this.getSalesTax(item.type) + this.getImportTax(item.imported);
		return Math.ceil((item.price*item.taxApplicable/100)*100/5)*5/100;
	};
}

var tax = new Tax();


var Bill = function(bill){
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