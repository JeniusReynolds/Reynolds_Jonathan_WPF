/*Jonathan Reynolds
 * WPF1405-01
 * Wacky Conditional Assignment
 * May 22, 2014
 * 
 * For my wacky assignment I have decided to ATTEMPT to make a number guessing game where the user has to guess the Mystery Number which will be a constant.
 * 
 */

//Defining the constant/"mystery number" as well as obtaining user information

const mysteryNumber = 8;
name = prompt("Hello, Welcome to the Mystery Number Game. To get started please provide your first name")
firstGuess = Number(prompt("Thanks "+name+". I am thinking of a number 1 - 10. Guess what it is!"));

//Adding If and If/Else statments to funnel the user into guessing the mystery number

if(firstGuess === mysteryNumber){
	alert("Lucky Guess! You guessed correctly. The mystery number was "+mysteryNumber+".")
}else {
	difference = mysteryNumber - firstGuess
	posDiff = (difference > 0) ? difference : -difference
	console.log (posDiff)
}
