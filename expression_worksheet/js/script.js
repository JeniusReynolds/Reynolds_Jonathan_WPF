//Problem: Dog Years
//Calculate how old Sparky the pitbull is in dog years based on his actual age
var SparkyHumanYrs = 3;
//Multiply Sparky's Human Years x 7 to get the equivalent in Dog Years
var SparkyDogYrs = SparkyHumanYrs * 7;
//Print Out The Results
console.log("Sparky is " + SparkyHumanYrs + " human years old which is " + SparkyDogYrs + " in dog years");






//Problem: Slice Of Pie Part 1
//Define the given variables and Constants
const SlicesPerPizza = 9;
var People = 32;
var NumberOfPizzaPies = 13;
//Calculate the number of slices per person
var TotalSlices = NumberOfPizzaPies * SlicesPerPizza
var SlicesPerPerson = TotalSlices / People
//Print out the results
console.log("Each person had the ability to eat " + SlicesPerPerson + " slices.");






//Problem: Slice Of Pie Part 2
SparkySlices = parseInt(TotalSlices) % People
//Print out the results
console.log ("Sparky got "+SparkySlices +" slices of Pizza");





//Problem: Average Shoppping Bill
//Define the given variable array
var ShoppingBills = [173.22,130.83,110.45,101.56,181.29];
//Calculate the total amount of Groceries as well as find the average
var TotalCost = ShoppingBills[0] + ShoppingBills[1] + ShoppingBills[2] + ShoppingBills[3] + ShoppingBills[4];
var AverageSpending = TotalCost / 5;
//Print Out The Results
console.log("You have spent a total of $"+TotalCost+" on groceries in the last 5 weeks. That is an average of $"+AverageSpending+" per week");





//Problem: Discount
//Define the given variables
var OriginalPrice = 3200;
var DiscountPerc = 40;
var ItemDescription = "Sony 4k Television";
var SalesTax = 6.5;
//Calculate the discount Price with and without taxes
var DiscountPrice = OriginalPrice - (OriginalPrice * (DiscountPerc/100));
var DiscountPriceWT = DiscountPrice * (1 +(SalesTax/100))
//Print out the results
console.log("Your "+ItemDescription+ " was originally $"+OriginalPrice+", but after a "+DiscountPerc+"% discount, it is now $"+DiscountPrice+" without tax, and $"+DiscountPriceWT+ " with "+SalesTax+"% Sales tax.")
