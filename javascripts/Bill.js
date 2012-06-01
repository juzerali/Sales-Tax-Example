/*
*	Bill class is the class which will return the bill object
*/
var Bill = function(items){
	var bill = this;	// Caching the context

	bill["Sales Taxes"] = 0, 
	bill["Total"] = 0

	items.forEach(function(item){

		if(item.price < 0) throw new Error("Price Cannot be negative");
		var taxValue = tax.calculate(item); 
		bill[item["name"]] = Number((item["price"]+taxValue).toFixed(2));
		bill["Sales Taxes"] = Number((bill["Sales Taxes"]+taxValue).toFixed(2));
		bill["Total"] = Number((bill["Total"]+item["price"]+taxValue).toFixed(2));
	});
};