/* Jonathan Reynolds
 * WPF1405-01
 * May 22, 2014
 * 
 * For my Personal Conditional exercise I have decided to create a simple calculator to ask the user if they have more shoes than me. If they have less shoes than me it will display the amount less that they have than me and vice versa if they have more
 * 
 */

//Stating constant variable as well as obtaining user's name and the amount of shoes they have.

const myShoes = 71;
name = prompt("Hello welcome to the Shoe Comparison Exercise. Can you please provide me with your first name?");
amountOfShoes = Number(prompt("Thanks "+name+". Now tell me, how many pairs of shoes do you own?"));

//Adding the conditionals

//This is my Ternary Operator to determine which step to take next depending on the amount of shoes the individual has
nextStep = (amountOfShoes <= myShoes) ? 1:2

//If the user has less or equal shoes than me then this If/Else statement will take place. It will first determine if the user has the same amount of shoes than me. If they do then the first alert/console log will occur.
if(nextStep ===1){
	if(amountOfShoes === myShoes){
		alert("You have the same amount of shoes as me!")
		console.log("You have the same amount of shoes as me!")
	}else{//If it is determined that the user does not have the same amount of shoes than me then it will run this set of code.
		difference = myShoes - amountOfShoes;
		alert("Hey "+name+", you have "+difference+" less shoes than me.")
		console.log("Hey "+name+", you have "+difference+" less shoes than me.")
	}
}else{//This code will run if the user does not have less or equal the amount of shoes that I have. This means they have more so it will run this set of code.
	difference = amountOfShoes - myShoes
	alert("Hey "+name+", you have "+difference+" more shoes than I do.")
	console.log("Hey "+name+", you have "+difference+" more shoes than I do.")
}

