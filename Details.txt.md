#Sales Tax

This file illustrates the flow and assumptions made during development of this application.

####With respect to application as a whole, following assumptions have been made.

* This is not intended for end user, as such there is no GUI, but just an api.
* Test cases are written to test the complete environment, there are no test cases to test individual components (classes).
* The environment of this program is a browser window.
* Object tax and Class Bill will be exposed to window. Test in following way
	- `tax.setSalesTaxValue`, `tax.setImportTaxValue`, `tax.addExemptedFromSalesTaxTypes`
	- `var bill = new Bill(items /* An array of JSON objects described below*/);`
		This api is sufficient and, can and should be used to test any other input values. Input is expected in form of JSON objects of type item as described below.


#Components

##private class Tax

`var tax = new Tax(salesTax, importTax, exemptedItems);
	
	* This class embodies the tax structure. It has lots of private variables held as closures.
	The constructor accepts 3 optional arguments, salesTaxValue and importTaxValue and array of exempted products which are passed to private instance variables with the same names. If no arguments are passed the variables are initialized with  default values 0, 0, and an empty array respectively.

	* This class is not directly exposed to the (window) environment, but just an instance of this class named tax is exposed which can be directly accessed in context of the browser window through window object (window.tax).
	The class is wrapped around a code block which, on initialization returns a tax object with empty values, these values have to be set in main-like function, which is /javascript/index.js in our case


##public class Bill

* This is the class which accepts **items** which is an array of **item** JSON object (mentioned below) with given properties

```javascript
item = { 
	name: String,
	price: Number,
	type: String /* Type of item, this will determine whether the item is to be exempted from sales tax */,
	imported: Boolean 
}
```