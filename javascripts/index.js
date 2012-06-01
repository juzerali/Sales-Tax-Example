/*
*	This is like main method in other languages. This should instantiate the application
*	In this particular case, there is nothing to be initialized except to set values of tax object
*/

// Tax object is exposed to window

window.tax.setSalesTaxValue(10);
window.tax.setImportTaxValue(5);
window.tax.addExemptedFromSalesTaxTypes(["food", "book", "medicine"])
