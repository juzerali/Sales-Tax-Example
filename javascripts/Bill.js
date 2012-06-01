/*
*	Bill class is the class which will return the bill object
*/
var Bill = function(items){
	if(!(items instanceof Array) && typeof(items) === 'object')
		items = [items];
	else if (!(items instanceof Array)) throw new Error("Was Expecting an {item} or an Array of it");

	var bill = this;	// Caching the context

	bill["Sales Taxes"] = 0, 
	bill["Total"] = 0

	items.forEach(function(item){
		if(!(typeof(item) === "object")) throw new Error("Item should've been an object");
		if(item.price < 0) throw new Error("Price Cannot be negative");
		
		var taxValue = tax.calculate(item); 
		bill[item["name"]] = Number((item["price"]+taxValue).toFixed(2));
		bill["Sales Taxes"] = Number((bill["Sales Taxes"]+taxValue).toFixed(2));
		bill["Total"] = Number((bill["Total"]+item["price"]+taxValue).toFixed(2));
	});
};