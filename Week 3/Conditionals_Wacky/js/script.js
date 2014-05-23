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
firstGuess = Number(prompt("Thanks "+name+". I am thinking of a number 1 - 25. Guess what it is!"));

//Adding If and If/Else statments to funnel the user into guessing the mystery number
//This step will check whether or not the number is within range
nextStep = (firstGuess <= 25) ? 1:2

if(nextStep === 1){
	if(firstGuess === mysteryNumber){//if the user guesses the number on the first try
		alert("Lucky Guess "+name+"! You guessed correctly. The mystery number was "+mysteryNumber+".")
	}else { //If not, they are given another opportunity to guess the number after being given the numb
		difference = mysteryNumber - firstGuess
		posDiff = (difference > 0) ? difference : -difference
		secondGuess = Number(prompt("Your first guess was off by "+posDiff+". Please make another guess."))
		
		if(secondGuess === mysteryNumber){//If the user gets it on the second guess then they will receive this message.
			alert("Great job "+name+" you got it on your second guess")
		}else{//if not then they will have a 3rd and final guess
			difference = mysteryNumber - secondGuess
			posDiff = (difference > 0) ? difference : -difference
			thirdGuess = Number(prompt("Your second guess was off by "+posDiff+". Please make another guess."))
			
			if(thirdGuess === mysteryNumber){
				alert("You did a decent job "+name+". You figured it out on your 3rd try.")
			}else{
				alert("GAME OVER. You did not guess the number in the appropriate amount of tries.")
			}
		}
	}
}else{
		newNumber = Number(prompt("You did not provide a number that is within 1 - 25. Please choose a number that is 1 - 25!"))
		nextStep = (newNumber <= 25) ? 1:2
		
		if(nextStep === 1){
			if(newNumber === mysteryNumber){//if the user guesses the number on the first try
				alert("Lucky Guess "+name+"! You guessed correctly. The mystery number was "+mysteryNumber+".")
		}else{
			difference = mysteryNumber - newNumber
			posDiff = (difference > 0) ? difference : -difference
			secondGuess = Number(prompt("Your first guess was off by "+posDiff+". Please make another guess."))
			
			if(secondGuess === mysteryNumber){
				alert("Great job "+name+" you got it on your second guess")
			}else{
				difference = mysteryNumber - secondGuess
				posDiff = (difference > 0) ? difference : -difference
				thirdGuess = Number(prompt("Your second guess was off by "+posDiff+". Please make another guess."))
				
				if(thirdGuess === mysteryNumber){
					alert("You did a decent job "+name+". You figured it out on your 3rd try.")
				}else{
					alert("GAME OVER. You did not guess the number in the appropriate amount of tries.")
				}
			}
		}
	}	
}	