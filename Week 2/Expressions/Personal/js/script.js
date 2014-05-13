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
var Tip15 = TotalDinnerCost * Fifteen;
var Tip20 = TotalDinnerCost * Twenty;
var Tip25 = TotalDinnerCost * TwentyFive;
var TipUser = TotalDinnerCost * (DesiredTip/100);
var Welcome = "Hello, Welcome to the Restaurant Tip Calculator";
var TotalBill;

//Adding the inital prompts/alerts

alert(Welcome);
DesiredTip = prompt("Please enter the desired tip percentage that you would like to tip the waiter/waitress. No percentage sign needed. Thanks");
TotalDinnerCost = prompt("How much is the total for your meal?");

console.log(TotalDinnerCost,DesiredTip, Tip15, Tip20,Tip25,TipUser);
