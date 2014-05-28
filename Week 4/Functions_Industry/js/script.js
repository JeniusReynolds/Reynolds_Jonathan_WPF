/*Jonathan Reynolds
 * WPF1405-01
 * Industry Function Assignment
 * May 29, 2014
 * 
 * For my Industry function assignment I decided to do an Accruals calculator that will calculate how many accrual hours the user can expect to receive per year based upon tenure. Once that information is obtained it will also calculate what the value of those hours are based upon the employee's dollar per hour. The Accrual policy will be tiered on 3 levels continegent on how many years the employee has been with the company. The program wil obtain the user's tenure information and then make the appropriate calculations after.
 */


//The first step is for me to figure out and define what my re-usable code is going to be.

function calcHoursValue (hrs,rate)
{//dollar value calculation. Will be used last.
	var dollarValue = hrs * rate)
	return dollarValue
}

function calcAnnualHours (pRate, hoursPWeek)
{//will calculate the accrual hours earned for the year
	var totalAnnualWorkHours = hoursPWeek * weeksInAYear
	var annualHours = pRate * totalAnnualWorkHours
	return annualHours
}

function calcAnnualAccrualRate (days, hoursPWeek)
{//Will calculate the accrual rate based on policy
	var weeksInAYear = 52
	var workDaysInWeek = 5
	var totalAnnualWorkHours = hoursPWeek * weeksInAYear
	var hoursPerDay = hoursPWeek / workDaysInWeek
	var totalAccrualHours = days * hoursPerDay
	var finalRate = totalAccrualHours / totalAnnualHours
	return finalRate
}

function calcHoursToDays (totalHours, hoursPWeek)
{
	var hoursPerDay = hoursPWeek / workDaysInWeek
	var amountOfDays = totalHours / hoursPerDay
}



//I will be listing out the constants for the calculator next. I will list out what the tiers for the PTO. If an employee has been with the company 3 years or less they receive 5 days, 3 - 10 years they receive 10 days, 10 years or more they receive 20 days.

const tierOne = 5;
const tierTwo = 10;
const tierThreeDays = 20;

//Starting the initial prompts to obtain information.

var name = prompt("Hello, welcome to the PTO Calculator. To begin, please provide your first name")
var ratePerHour = Number(prompt("Thanks "+name+", next we will need your dollar per hour rate"))
var hoursPerWeek = Number(prompt("How many hours do you work per week?"))
var employeeTenure = Number(prompt("Lastly, we will need to know how long have you been with the company?(Please round up to the nearest year)"))

//This is the required Ternary condition for the assignment.
var nextStep = (ratePerHour > 0) ? 1:2

if (nextStep === 1){
	if (employeeTenure < 3){
		var accrualRate = calcAnnualAccrualRate(tierOne,hoursPerWeek);
		console.log(accrualRate);
		
	}else if(employeeTenure >= 3 && employeeTenure < 10){
		
	}else{
		
	}
	
}else{
	alert("Hi "+name+", please provide a valid Dollar Per Hour Rate. Thank you.")
}
