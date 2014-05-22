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

nextStep = (amountOfShoes <= myShoes) ? 1:2

if(nextStep ===1){
	if(amountOfShoes === myShoes){
		alert("You have the same amount of shoes as me!")
	}else{
		difference = myShoes - amountOfShoes;
		alert("Hey "+name+", you have "+difference+" less shoes than me.")
		console.log("Hey "+name+", you have "+difference+" less shoes than me.")
	}
}else{
	difference = amountOfShoes - myShoes
	alert("Hey "+name+", you have "+difference+" more shoes than I do.")
	console.log("Hey "+name+", you have "+difference+" more shoes than I do.")
}

