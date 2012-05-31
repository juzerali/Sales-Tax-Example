var Tax = function(salesTaxValue, importTaxValue){
	var salesTax = salesTaxValue || 10;
	var importTax = importTaxValue || 5;

	this.exempted = ["food", "books", "medicines"]

	this.getSalesTax = function(type){
		if(this.exempted.indexOf(type) == -1) return 0;
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
		taxApplicable = this.getSalesTax(item.type) + this.getImportTax(item.imported);
		return (Math.round((item.price*taxApplicable/100)*100/5)*5/100).toFixed(2);
	};
}

var tax = new Tax();

var BillGenerator = function(bill){
	var billDetails = {};
	billDetails["Sales Taxes"] = 0;
	$.each(bill, function(index, item){
		console.log(JSON.stringify(item));
		billDetails[item["name"]] = Number(item["price"]).toFixed(2);
		var taxed = tax.calculate(item);
		billDetails["Sales Taxes"] += Number(taxed);
		billDetails["Total"] += (Number(billDetails[item["name"]])+taxed);
	});
	//billDetails["Total"] = billDetails["Total"].toFixed(2);
	//billDetails["Sales Taxes"] = billDetails["Sales Taxes"].toFixed(2);
	return billDetails;
};