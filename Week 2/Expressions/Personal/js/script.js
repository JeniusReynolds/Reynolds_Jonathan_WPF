//For My Personal Assignment I decided to create a Tip Calculator. 
//The tip calculator will calculate how much the EndUser should tip the waiter/waitress.
//The calculator will base this information off of 4 percentages.
//3 of them being 15% | 20% | 25% and the fourth being the User Input Amount

//Declaration of Constants and Variables

const Fifteen = .15;
const Twenty = .20;
const TwentyFive = .25;
var TotalDinnerCost;
var DesiredTip;
var Welcome = "Hello, Welcome to the Restaurant Tip Calculator";
var TotalBill;

//Adding the inital prompts/alerts

alert(Welcome);
DesiredTip = prompt("Please enter the desired tip percentage that you would like to tip the waiter/waitress. No percentage sign needed. Thanks");
TotalDinnerCost = prompt("How much is the total for your meal? No Dollar Sign Needed. Thanks");

//Calculations needed after initial prompts

var Tip15 = TotalDinnerCost * Fifteen;
var Tip20 = TotalDinnerCost * Twenty;
var Tip25 = TotalDinnerCost * TwentyFive;
var TipUser = TotalDinnerCost * (DesiredTip/100);

//Creating a an Array to calculate the Final Bill for each Tip Amount. The final bill calculation is TotalDinnerCost + The Various Tip Amounts

TotalBill = [TipUser+parseFloat(TotalDinnerCost) , Tip15+parseFloat(TotalDinnerCost) , Tip20+parseFloat(TotalDinnerCost) , Tip25+parseFloat(TotalDinnerCost)];

// This will be the final promp as well as console log for the calculator.

alert("Your desired tip percentage is "+DesiredTip+"%. Your total meal cost is $"+TotalDinnerCost+". If you decide to tip this amount your total bill will be $"+TotalBill[0]+". If you instead desire to tip 15%, 20%, or 25% the tip amounts would be $"+Tip15+", $"+Tip20+", or $"+ Tip25+". Which would respectfully make your total bill costs $"+TotalBill[1]+", $"+TotalBill[2]+", or $"+ TotalBill[3]+".");


console.log("Your desired tip percentage is "+DesiredTip+"%. Your total meal cost is $"+TotalDinnerCost+". If you decide to tip this amount your total bill will be $"+TotalBill[0]+". If you instead desire to tip 15%, 20%, or 25% the tip amounts would be $"+Tip15+", $"+Tip20+", or $"+ Tip25+". Which would respectfully make your total bill costs $"+TotalBill[1]+", $"+TotalBill[2]+", or $"+ TotalBill[3]+".");
