/*Jonathan Reynolds
 * WPF1405-01
 * May 29, 2014
 * 
 * For my Wacky Calculator I have decided to create a simple Discount Calculator. Truthfully my other two Functional Calculators took a lot out of me in regards to creativity. I would say my Industry Calculator could also moonlight as my wacky calculator in terms of true complexity for a beginner. I digress. The Discount calculator will obtain from the user the initial price of an item and how much the discount is. From that information a function will take place to calculate the total discount as well as provide the final price after discount including tax
 */

//Creating the constants and primary functions

const salesTax = .065

function percentageCalc(percentage){
	var decimalPercentage = percentage/100
	return decimalPercentage
}

function discountCalc (itemPrice,dPercentage){
	var discountedPrice = itemPrice - (itemPrice * dPercentage)
	return discountedPrice
}

function totalCalc (newPrice,tax){
	var itemTotal = newPrice * (1+tax)
	return itemTotal
}
