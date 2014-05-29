/*Jonathan Reynolds
 * WPF1405-01
 * Personal Calculator
 * May 29, 2014
 * 
 * For my Personal calculator I am going to create a basic car payment calculator because a friend of mine just purchased a new vehicle
 */


//I will be using an anonymous function to make the calculation for the car payment. I was able to obtain the formula for car payment from http://www.calcunation.com/calculators/business%20and%20finance/vehicle-payment.php. In order to make the formula work I had to investigate how to do the Power of in Javascript. I was able to find the answer via http://www.w3schools.com/jsref/jsref_pow.asp After trial and error I found that the best way to calculate a negative power is to do the math inverse of the power and make it 1 over the positive power. THat is why the Math.pow is setup like it is now.


//This variable will meet the requirements for an Anonymous function as well as a function requiring 3 parameters.

var carPayment = function(rate,principal,months){
	var payment = (rate * principal) / (1 - (Math.pow(1/(1 + rate), months)))
	return payment
}

//This function will be used to calculate the rate which is (apr/100)/12

function calcRate(apr){
	var rate = (apr/100)/12
	return rate
}

//This function will be used to calculate principal

function calcPrincipal(carCost,trade,downPayment){
	var principal = carCost - (trade + downPayment)
	return principal
}

//This function will calculate the cost of the car plus tax
function calcPrice(carCost){
	var carWithTax = carCost * 1.065 //6.5% Sales Tax
	return carWithTax
}

//Starting the prompts to obtain all of the information needed

var name = prompt("Hello, Welcome to the Car Loan Payment Estimator. Please enter your First Name.")
var carCost = prompt("Thanks "+name+", How much is the car that you are looking to purchase?")
var tradeIn = Number(prompt("Do you plan on trading in a car? If so, what is the estimated value of that Car?", 0))
var downPayment = Number(prompt("How much of a Down payment do you plan on making on this vehicle?", 2000))
var apr = Number(prompt("What is the expected Annual Percentage Rate you expect to recieve?"))
var length = Number(prompt("How many months do you plan on financing for?"))

//Calculations that are needed to take place

var rawCost = calcPrice(carCost)

var rawRate = calcRate(apr)
var rawPrincipal = calcPrincipal(rawCost,tradeIn,downPayment)

var finalCost = carPayment(rawRate,rawPrincipal,length)
finalCost = +finalCost.toFixed(2)

alert("Your estimated monthly payment for your vehicle will be $"+finalCost+". Thanks for using!")
console.log("Your estimated monthly payment for your vehicle will be $"+finalCost+". Thanks for using!")

