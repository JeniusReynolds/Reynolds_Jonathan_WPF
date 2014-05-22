/* Jonathan Reynolds
 * WPF1405-01
 * Industry Calculator
 * May 22, 2014
 *
 *
 *For my industry portion I am going to create a "program" that will calculate a fictitous payroll tax. The tax percentage amount will be contingent tiered based upon amount. The calc is going to obtain the taxable amount from the user.
 */

//Obtain Initial information from user

welcome = "Welcome to the Federal School Tax calculator";
alert(welcome);
taxableAmount= Number(prompt("Please enter your total annual gross income for the past year. No dollar signs are needed"))

//If the employee has made less than 15k for the year then they will not be subject to the tax at all.
//If they have made more than 15k but less than 60k then they will be taxed 3%
//If they have made more than 60k but less than 100k then they will be taxed 18%
//If they have made anything more than 100k they will be taxed 27%

if(taxableAmount < 15000){
	
	alert("You have not made enough to be taxed by the Federal School System")
	console.log("You have not made enough to be taxed by the Federal School System")
	
}else if(taxableAmount >= 15000 && taxableAmount < 60000){
	
	taxCharged = taxableAmount * .03
	alert("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
	console.log("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
	
}else if(taxableAmount >= 60000 && taxableAmount < 100000){
	
	taxCharged = taxableAmount * .08
	alert("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
	console.log("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
	
}else {
	taxCharged = taxableAmount * .27
	alert("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
	console.log("You will be charged a total of $"+taxCharged+" in Federal School Tax.")
}


