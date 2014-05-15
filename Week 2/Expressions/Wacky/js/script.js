/* Jonathan Reynolds
 * WPF1405-01
 * Wacky Calculator
 * May 15, 2014
 
For My Wacky Calculator, I decided to do a calculator that isn't necessarily "Wacky" in nature.
I chose to do something that would require quite a few expressions as well as some of the other functions we have learned thus far.
I am choosing to create a BMI[Body Mass Index] calculator.
I visited www.wikihow.com to find the calculation for Body Mass Index. The Steps are:
Obtain Weight
Obtain Height in Inches -- For this step I will get height in Feet and Inches from the user then convert the values to inches for calculations
Square the height in inches
Divide Weight by the Squared number
Multiply that answer by a conversion factor of 703. That number is the BMI
Once BMI is obtained I will create an alert informing the user of BMI as well as what the ranges should be.
*/



//Going to create Constant and Variables. Some more may be needed after.

const ConversionFactor = 703;
var weight;
var heightInInches;
var heightFeet;
var heightInches;
var heightSquared;
var bmiCalc1;
var bmiFinal;

