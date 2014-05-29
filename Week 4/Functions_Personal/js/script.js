/*Jonathan Reynolds
 * WPF1405-01
 * Personal Calculator
 * May 29, 2014
 * 
 * For my Personal calculator I am going to create a basic car payment calculator because a friend of mine just purchased a new vehicle
 */


//I will be using an anonymous function to make the calculation for the car payment. I was able to obtain the formula for car payment from http://www.calcunation.com/calculators/business%20and%20finance/vehicle-payment.php. In order to make the formula work I had to investigate how to do the Power of in Javascript. I was able to find the answer via http://www.w3schools.com/jsref/jsref_pow.asp


//This variable will meet the requirements for an Anonymous function as well as a function requiring 3 parameters.

var carPayment = function(rate,principal,months){
	var payment = (rate * principal) / 1 - (Math.pow((1+r),(-1*months)))
}
