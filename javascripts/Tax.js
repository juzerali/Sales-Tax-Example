/*
*	@Author : Juzer Ali
*	Description: This is the implementation of Sales Tax Problem
*	@Class Tax(salesTaxValue, importTaxValue, exemptedFromSalesTaxTypes)
*			Default Values: salesTaxValue=0, importTaxValue=0, exemptedFromSalesTaxTypes=[]
*		
*/

(function(){
	var Tax = function(salesTaxValue, importTaxValue, exemptedFromSalesTaxTypes){
		/*
		*	salesTax, importTax are private variables stored in closure and cannot be accessed directly
		*/	

		/*
		*	exempted is another private variable which is an array of types which should be exempted
		*	from local Sales Tax. This is an enum like object as in strongly typed languages.	
		*/
		var exemptedFromSalesTax = [];

		//getter that returns value according to the passed type
		this.getSalesTaxValue = function(){
			return salesTaxValue;
		};

		this.deriveSalesTax = function(type){
			return (exemptedFromSalesTax.indexOf(type) != -1)? 0:salesTaxValue;
		};

		this.setSalesTaxValue = function(value){
			if(value < 0) throw new Error("Sales Tax value cannot be less than zero");
			salesTaxValue = Number(value) || 0;
		};

		//getter which returns value depending upon whether the item is imported
		this.getImportTaxValue = function(){
			return importTax;
		};

		this.deriveImportTax = function(imported){
			return imported?importTaxValue:0;
		};

		this.setImportTaxValue = function(value){
			if(value < 0) throw new Error("Import Tax value cannot be less than zero");
			importTaxValue = Number(value) || 0;
		};

		this.getExemptedFromSalesTaxTypes = function(){
			return exemptedFromSalesTax;
		}

		this.addExemptedFromSalesTaxTypes = function(types){
			if(typeof(types) === "string") exemptedFromSalesTax.push(types);
			else if(types instanceof Array){
				 types.forEach(function(type){
				 	if(typeof(type) === "string") exemptedFromSalesTax.push(type);
				 	else console.error("Invalid Input");
				 });
			}
		}

		/*
		*	This method has the business logic and will be used by Bill object to calculate sales tax
		*
		*/
		this.calculate = function(item){
			item.taxApplicable = this.deriveSalesTax(item.type) + this.deriveImportTax(item.imported);
			return Math.ceil((item.price*item.taxApplicable/100)*100/5)*5/100;
		};

		/*
		*	Instantiating the private variables
		*/
		this.setSalesTaxValue(salesTaxValue);
		this.setImportTaxValue(importTaxValue);
		this.addExemptedFromSalesTaxTypes(exemptedFromSalesTaxTypes);
	}

	return tax = new Tax();
})();



