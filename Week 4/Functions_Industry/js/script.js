/*Jonathan Reynolds
 * WPF1405-01
 * Industry Function Assignment
 * May 29, 2014
 * 
 * For my Industry function assignment I decided to do an Accruals calculator that will calculate how many accrual hours the user can expect to receive per year based upon tenure. Once that information is obtained it will also calculate what the value of those hours are based upon the employee's dollar per hour. The Accrual policy will be tiered on 3 levels continegent on how many years the employee has been with the company. The program wil obtain the user's tenure information and then make the appropriate calculations after.
 */


//The first step is for me to figure out and define what my re-usable code is going to be.

function calcHoursValue (hours,rate)
{//Will calculate the dollar value of the accruals

	var dollarValue = hours * rate
	return dollarValue
}

function calcAnnualHours (pRate, hoursPWeek)
{//will calculate the accrual hours earned for the year
	var weeksInAYear = 52;
	var totalAnnualWorkHours = hoursPWeek * weeksInAYear;
	var annualHours = pRate * totalAnnualWorkHours;
	return annualHours
}

function calcAnnualAccrualRate (days, hoursPWeek)
{//Will calculate the accrual rate based on policy
	var weeksInAYear = 52;
	var workDaysInWeek = 5;
	var totalAnnualWorkHours = hoursPWeek * weeksInAYear;
	var hoursPerDay = hoursPWeek / workDaysInWeek;
	var totalAccrualHours = days * hoursPerDay;
	var finalRate = totalAccrualHours / totalAnnualWorkHours;
	return finalRate
}

function calcAccrHoursPerWeek(rate,hoursPWeek)
{//Will calculate how many hours of PTO are earned per week.
	var accrHoursPerWeek = rate * hoursPWeek;
	return accrHoursPerWeek
}



//I will be listing out the constants for the calculator next. I will list out what the tiers for the PTO. If an employee has been with the company 3 years or less they receive 5 days, 3 - 10 years they receive 10 days, 10 years or more they receive 20 days.

const tierOne = 5;
const tierTwo = 10;
const tierThree = 20;

//Starting the initial prompts to obtain information.

var name = prompt("Hello, welcome to the PTO Calculator. To begin, please provide your first name");
var ratePerHour = Number(prompt("Thanks "+name+", next we will need your dollar per hour rate"));
var hoursPerWeek = Number(prompt("How many hours do you work per week?"));
var employeeTenure = Number(prompt("Lastly, we will need to know how long have you been with the company?(Please round up to the nearest year)"));

//This is the required Ternary condition for the assignment.
var nextStep = (ratePerHour > 0) ? 1:2

//This is the required If + Else If + Else requirement for the course.
if (nextStep === 1){
	if (employeeTenure < 3){
		var accrualRate = calcAnnualAccrualRate(tierOne,hoursPerWeek);
		var accrualTotalHours = calcAnnualHours(accrualRate,hoursPerWeek);
		var accrualPerWeek = calcAccrHoursPerWeek(accrualRate,hoursPerWeek);
		var accrualWeeklyDollarAmount = calcHoursValue(accrualPerWeek,ratePerHour)
		var accrualDollarAmount = calcHoursValue(accrualTotalHours,ratePerHour);
		
		accrualRate = +accrualRate.toFixed(4);
		accrualPerWeek = +accrualPerWeek.toFixed(4);
		accrualWeeklyDollarAmount = +accrualWeeklyDollarAmount.toFixed(2);
		accrualDollarAmount = +accrualDollarAmount.toFixed(2);
		
		alert(name+", you will earn a total of "+tierOne+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
		
		console.log(name+", you will earn a total of "+tierOne+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
		
	}else if(employeeTenure >= 3 && employeeTenure < 10){
		var accrualRate = calcAnnualAccrualRate(tierTwo,hoursPerWeek);
		var accrualTotalHours = calcAnnualHours(accrualRate,hoursPerWeek);
		var accrualPerWeek = calcAccrHoursPerWeek(accrualRate,hoursPerWeek);
		var accrualWeeklyDollarAmount = calcHoursValue(accrualPerWeek,ratePerHour)
		var accrualDollarAmount = calcHoursValue(accrualTotalHours,ratePerHour);
		
		accrualRate = +accrualRate.toFixed(4);
		accrualPerWeek = +accrualPerWeek.toFixed(4);
		accrualWeeklyDollarAmount = +accrualWeeklyDollarAmount.toFixed(2);
		accrualDollarAmount = +accrualDollarAmount.toFixed(2);
		
		alert(name+", you will earn a total of "+tierTwo+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
		
		console.log(name+", you will earn a total of "+tierTwo+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
	}else{
		var accrualRate = calcAnnualAccrualRate(tierThree,hoursPerWeek);
		var accrualTotalHours = calcAnnualHours(accrualRate,hoursPerWeek);
		var accrualPerWeek = calcAccrHoursPerWeek(accrualRate,hoursPerWeek);
		var accrualWeeklyDollarAmount = calcHoursValue(accrualPerWeek,ratePerHour)
		var accrualDollarAmount = calcHoursValue(accrualTotalHours,ratePerHour);
		
		accrualRate = +accrualRate.toFixed(4);
		accrualPerWeek = +accrualPerWeek.toFixed(4);
		accrualWeeklyDollarAmount = +accrualWeeklyDollarAmount.toFixed(2);
		accrualDollarAmount = +accrualDollarAmount.toFixed(2);
		
		alert(name+", you will earn a total of "+tierThree+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
		
		console.log(name+", you will earn a total of "+tierThree+" days of PTO. This means that you have an approximate accrual rate of "+accrualRate+" per hour worked. With you working "+hoursPerWeek+" hours per week, you will approximately earn "+accrualPerWeek+" hours per week in accruals($"+accrualWeeklyDollarAmount+" a week). This will provide you an annual PTO dollar value of $"+accrualDollarAmount+" dollars.")
	}
	
}else{
	alert("Hi "+name+", please provide a valid Dollar Per Hour Rate. Thank you.")
	console.log("Hi "+name+", please provide a valid Dollar Per Hour Rate. Thank you.")
}
