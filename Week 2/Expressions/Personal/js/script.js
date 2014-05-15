/* Jonathan Reynolds
 * WPF1405-01
 * Personal Calculator
 * May 15, 2014

For My Personal Assignment I decided to create a Tip Calculator. 
The tip calculator will calculate how much the EndUser should tip the waiter/waitress.
The calculator will base this information off of 4 percentages.
3 of them being 15% | 20% | 25% and the fourth being the User Input Amount
*/

//Declaration of Constants and Variables

const fifteen = .15;
const twenty = .20;
const twentyFive = .25;
var totalMealCost;
var desiredTip;
var welcome = "Hello, welcome to the Restaurant Tip Calculator";
var totalBill;

//Adding the inital prompts/alerts

alert(welcome);
desiredTip = prompt("Please enter the desired tip percentage that you would like to tip the waiter/waitress. No percentage sign needed. Thanks");
totalMealCost = prompt("How much is the total for your meal? No Dollar Sign Needed. Thanks");

//Calculations needed after initial prompts

var tip15 = totalMealCost * fifteen;
var tip20 = totalMealCost * twenty;
var tip25 = totalMealCost * twentyFive;
var tipUser = totalMealCost * (desiredTip/100);

//Creating a an Array to calculate the Final Bill for each Tip Amount. The final bill calculation is totalMealCost + The Various Tip Amounts

totalBill = [tipUser+parseFloat(totalMealCost) , tip15+parseFloat(totalMealCost) , tip20+parseFloat(totalMealCost) , tip25+parseFloat(totalMealCost)];

// This will be the final promp as well as console log for the calculator.

alert("Your desired tip percentage is "+desiredTip+"%. Your total meal cost is $"+totalMealCost+". This makes your tip amount $"+tipUser+". If you decide to tip this amount your total bill will be $"+totalBill[0]+". If you instead desire to tip 15%, 20%, or 25% the tip amounts would be $"+tip15+", $"+tip20+", or $"+ tip25+". Which would respectfully make your total bill costs $"+totalBill[1]+", $"+totalBill[2]+", or $"+ totalBill[3]+".");


console.log("Your desired tip percentage is "+desiredTip+"%. Your total meal cost is $"+totalMealCost+". This makes your tip amount $"+tipUser+". If you decide to tip this amount your total bill will be $"+totalBill[0]+". If you instead desire to tip 15%, 20%, or 25% the tip amounts would be $"+tip15+", $"+tip20+", or $"+ tip25+". Which would respectfully make your total bill costs $"+totalBill[1]+", $"+totalBill[2]+", or $"+ totalBill[3]+".");
