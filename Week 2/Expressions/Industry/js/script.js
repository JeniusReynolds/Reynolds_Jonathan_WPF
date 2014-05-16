/* Jonathan Reynolds
 * WPF1405-01
 * Industry Calculator
 * May 15, 2014
 *
 *For My Industry calculator I decided to create a Wage Calculator. I chose this idea becuase I currently work for a Payroll and Software company.
 *The calculator will do the following things:
 *1. Obtain The User's Annual Salary
 *2. It will Then Calculate The User's Pay Per Hour based upon a 40 Hour Work Week.
 *3. It will also provide the Users Gross Monthly, Weekly, Semi-Monthly, and BiWeekly Salary
 *4. As a way to increase complexity I will add an additional prompt at the end to allow the user to see what the results would be if they were to recieve
 *a merrit increase.
 */

//Creating Initial Variables and Prompts

const welcome = "Welcome to the Salary Calculator";
const biWeeklyPayPeriods = 26;
const weeklyPayPeriods = 52;
const monthlyPayPeriods = 12;
const semiMonthlyPayPeriods = 24;
const annualHours = 2080;
alert(welcome);
userSalary=Number(prompt("Please enter your gross annual salary. No dollar sign is needed"));


//Creating the calculations needed

hourlyRate = userSalary / annualHours;
hourlyRate = +hourlyRate.toFixed(2);

biWeeklyRate = userSalary / biWeeklyPayPeriods;
biWeeklyRate = +biWeeklyRate.toFixed(2);

weeklyRate = userSalary / weeklyPayPeriods;
weeklyRate = +weeklyRate.toFixed(2);

monthlyRate = userSalary/monthlyPayPeriods;
monthlyRate = +monthlyRate.toFixed(2);

semiMonthlyRate = userSalary/semiMonthlyPayPeriods;
semiMonthlyRate = +semiMonthlyRate.toFixed(2);

//Creating the Final Alert and Console Log
console.log("Your annual salary is $"+userSalary+" which means your base rate is $"+hourlyRate+" an hour. Your monthly salary is $"+monthlyRate+" a month. Your semi-monthly rate is $"+semiMonthlyRate+". Your weekly and bi-weekly rates are $"+weeklyRate+ " and $"+biWeeklyRate+".")

alert("Your annual salary is $"+userSalary+" which means your base rate is $"+hourlyRate+" an hour. Your monthly salary is $"+monthlyRate+" a month. Your semi-monthly rate is $"+semiMonthlyRate+". Your weekly and bi-weekly rates are $"+weeklyRate+ " and $"+biWeeklyRate+".")


