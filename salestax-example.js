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
		return (Math.round((item.price*item.taxApplicable/100)*100/5)*5/100);
	};
}

var tax = new Tax();

var BillGenerator = function(bill){
	var billDetails = {};
	billDetails["Sales Taxes"] = billDetails["Total"] = 0;
	bill.forEach(function(item){
		var taxed = tax.calculate(item);
		billDetails["Sales Taxes"] += taxed;
		billDetails["Total"] = billDetails["Total"] + item["price"] + taxed;

		billDetails[item["name"]] = Number(item["price"]).toFixed(2);
	});
	billDetails["Total"] = billDetails["Total"].toFixed(2);
	billDetails["Sales Taxes"] = billDetails["Sales Taxes"].toFixed(2);
	return billDetails;
};