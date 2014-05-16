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
userSalary=Number(prompt("Please enter your gross annual salary. No commas or dollar signs are needed"));


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
console.log("Your gross annual salary is $"+userSalary+". This means your base rate is $"+hourlyRate+" an hour, your monthly salary is $"+monthlyRate+", your semi-monthly rate is $"+semiMonthlyRate+", your weekly rate is $"+weeklyRate+ ", and your bi-weekly rate is $"+biWeeklyRate+".")

alert("Your gross annual salary is $"+userSalary+". This means your base rate is $"+hourlyRate+" an hour, your monthly salary is $"+monthlyRate+", your semi-monthly rate is $"+semiMonthlyRate+", your weekly rate is $"+weeklyRate+ ", and your bi-weekly rate is $"+biWeeklyRate+".")


//This portion is added for complexity

desiredRaise = Number(prompt("If you were to ask for a raise based upon your current salary, what percentage increase would you like to see your salary go to?[No percentage sign is needed]"))

//Calculations
userSalaryR = userSalary * (1 + (desiredRaise/100))

hourlyRateR = userSalaryR / annualHours;
hourlyRateR = +hourlyRateR.toFixed(2);

biWeeklyRateR = userSalaryR / biWeeklyPayPeriods;
biWeeklyRateR = +biWeeklyRateR.toFixed(2);

weeklyRateR = userSalaryR / weeklyPayPeriods;
weeklyRateR = +weeklyRateR.toFixed(2);

monthlyRateR = userSalaryR /monthlyPayPeriods;
monthlyRateR = +monthlyRateR.toFixed(2);

semiMonthlyRateR = userSalaryR/semiMonthlyPayPeriods;
semiMonthlyRateR = +semiMonthlyRateR.toFixed(2);


console.log("If you received a "+desiredRaise+"% raise, your new gross annual salary would be $"+userSalaryR+". This means your new base rate would be $"+hourlyRateR+" an hour, your monthly salary would be $"+monthlyRateR+", your semi-monthly rate would be $"+semiMonthlyRateR+", your weekly rate would be $"+weeklyRateR+ ", and your bi-weekly rate would be $"+biWeeklyRateR+".")

alert("If you received a "+desiredRaise+"% raise, your new gross annual salary would be $"+userSalaryR+". This means your new base rate would be $"+hourlyRateR+" an hour, your monthly salary would be $"+monthlyRateR+", your semi-monthly rate would be $"+semiMonthlyRateR+", your weekly rate would be $"+weeklyRateR+ ", and your bi-weekly rate would be $"+biWeeklyRateR+".")

