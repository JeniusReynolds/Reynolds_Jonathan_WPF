/* Jonathan Reynolds
 * WPF1405-01
 * Wacky Calculator
 * May 15, 2014
 
For My Wacky Calculator, I decided to do a calculator that isn't necessarily "Wacky" in nature.
I chose to do something that would require quite a few expressions as well as some of the other functions we have learned thus far.
I am choosing to create a BMI[Body Mass Index] calculator.
I visited www.wikihow.com to find the calculation for Body Mass Index. 

The Steps are:
1. Obtain Weight in Pounds
2. Obtain Height in Inches -- For this step I will get height in Feet and Inches from the user then convert the values to inches for calculations
3. Square the height in inches
4. Divide Weight by the Squared number
5. Multiply that answer by a conversion factor of 703. That number is the BMI
6. Once BMI is obtained I will create an alert informing the user of BMI as well as what the ranges should be.
*/



//Going to create Constant and Variables. Some more may be needed after.

const conversionFactor = 703;
var weight;
var heightInInches;
var heightFeet;
var heightInches;
var heightSquared;
var bmiCalc1;
var bmiFinal;
const welcome = "Hello, Welcome to the BMI Calculator";

//Adding Initial Alerts and Prompts
alert(welcome);
weight = Number(prompt("To begin the calculation we would like to begin with your weight in pounds. Please enter your weight:"));
heightFeet = Number(prompt("Next, we will need to know how tall you are. Please enter your height(Feet Only). We will get any inches in the next step."));
heightInches = Number(prompt("Please provide the number of inches to your height that is in addition to your feet. If there aren't any 0 is a valid answer",0));

//Adding some of the calculations
heightInInches = (heightFeet *12) + heightInches;
heightSquared = heightInInches * heightInInches;
bmiCalc1 = weight / heightSquared;
bmiFinal = bmiCalc1 * conversionFactor;
bmiFinal = +bmiFinal.toFixed(2);

//Final prompt and Log
console.log("Your estimated BMI(Body Mass Index) based upon the information you gave us is " +bmiFinal+". BMI < 18 = Underweight. 18 < BMI < 18.5 = Thin For Height. 18.6 - 24.9 = Healthy Weight. 25 - 29.9 = Over-Weight. BMI > 30 = Obesity");

alert("Your estimated BMI(Body Mass Index) based upon the information you gave us is " +bmiFinal+". BMI < 18 = Underweight. 18 < BMI < 18.5 = Thin For Height. 18.6 - 24.9 = Healthy Weight. 25 - 29.9 = Over-Weight. BMI > 30 = Obesity");

//Going to add a few additional promps and calculations to add to the complexity of the calculator.

weightMin10 = weight - 10;
weightMin20 = weight - 20;
weightMin30 = weight - 30;
weightPlus10 = weight + 10;
weightPlus20 = weight + 20;
weightPlus30 = weight + 30;


bmiCalcM10 = weightMin10 / heightSquared;
bmiCalcM20 = weightMin20 / heightSquared;
bmiCalcM30 = weightMin30 / heightSquared;
bmiCalcP10 = weightPlus10 / heightSquared;
bmiCalcP20 = weightPlus20 / heightSquared;
bmiCalcP30 = weightPlus30 / heightSquared;

bmiFinalM10 = bmiCalcM10 * conversionFactor;
bmiFinalM10 = +bmiFinalM10.toFixed(2)
bmiFinalM20 = bmiCalcM20 * conversionFactor;
bmiFinalM20 = +bmiFinalM20.toFixed(2)
bmiFinalM30 = bmiCalcM30 * conversionFactor;
bmiFinalM30 = +bmiFinalM30.toFixed(2)
bmiFinalP10 = bmiCalcP10 * conversionFactor;
bmiFinalP10 = +bmiFinalP10.toFixed(2)
bmiFinalP20 = bmiCalcP20 * conversionFactor;
bmiFinalP20 = +bmiFinalP20.toFixed(2)
bmiFinalP30 = bmiCalcP30 * conversionFactor;
bmiFinalP30 = +bmiFinalP30.toFixed(2)

alert("The effects to your BMI if you gain 10, 20, or 30 pounds are as follows: "+bmiFinalP10+", "+bmiFinalP20+", "+bmiFinalP30+". The effects of losing the same weight to your BMI would be: "+bmiFinalM10+", "+bmiFinalM20+", "+bmiFinalM30+". Thanks for using.")

console.log("The effects to your BMI if you gain 10, 20, or 30 pounds are as follows: "+bmiFinalP10+", "+bmiFinalP20+", "+bmiFinalP30+". The effects of losing the same weight to your BMI would be: "+bmiFinalM10+", "+bmiFinalM20+", "+bmiFinalM30+". Thanks for using.")
