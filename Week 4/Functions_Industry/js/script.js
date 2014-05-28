/*Jonathan Reynolds
 * WPF1405-01
 * Industry Function Assignment
 * May 29, 2014
 * 
 * For my Industry function assignment I decided to do an Accruals calculator that will calculate how many accrual hours the user can expect to receive per year based upon tenure. Once that information is obtained it will also calculate what the value of those hours are based upon the employee's dollar per hour. The Accrual policy will be tiered on 3 levels continegent on how many years the employee has been with the company. The program wil obtain the user's tenure information and then make the appropriate calculations after.
 */


//The first step is for me to figure out and define what my re-usable code is going to be. The first function calcHoursValue will be used to calculate the dollar amount value. The second one will calculate the total Accrual hours the employee will earn. The third function will be used to calculate the per hour accrual rate by breaking down the amount of days into hours. 

function calcHoursValue (hrs,rate)
{
	var dollarValue = hrs * rate)
	return dollarValue
}

function calcAnnualHours (pRate)
{
	var totalAnnualWorkHours = 2080
	var annualHours = pRate * totalAnnualWorkHours
	return annualHours
}

function calcAnnualAccrualRate (days)
{
	var totalAnnualWorkHours = 2080
	var hoursPerDay = 8
	var totalAccrualHours = days * hoursPerDay
	var finalRate = totalAccrualHours / totalAnnualHours
	return finalRate
}


//I will be listing out the constants for the calculator next. I will list out what the tiers for the PTO. If an employee has been with the company 3 years or less they receive 5 days, 3 - 10 years they receive 10 days, 10 years or more they receive 20 days.

var tierOne = 5;
var tierTwo = 10;
var tierThreeDays = 20;
