//for naming a variable, first character must be either alphabet,_ or $(not number); must not contain mathematical/logical operators or spaces or hyphens(reserved for subtraction) or any reserved word
//escape character '\' to convert a special character into string
//string input number to get solution, use eval()
//modulus operator(%) for integers as well as floating point numbers
//equal(==) and strict equal(===), data type too equal; concatenation(+)

/*ternery operator
vaiable = (condition) ? value1(if True) : value2(if False); 
*/

/*
conditions:-
1. if
2. if-else(also using ternery operator(if(condition)?(true):(false);)
3. if-else ladder
4. switch case (default(not mandatory)) --->break/continue keyword to be used, usually in each case

loops:-
1. for(before,condition,after) loop, all part optional, break required to avoid infinite loop
2. while loop
3. do while loop (execute do, if while has condition true executed do again)
*/

/*function-block of reusable code
function fname(x,y){		->as many parameters as defined in definition separated by comma
	//code;
}
fname(x,y)		->same order of parameters.If more arguments provided than defined, it will be assigned to an array called arguments(arguments[0], arguments[1] and so on
*/
function sayHello(name){
	alert("Hello "+name);
}
sayHello("Zead");

//return statement(optional, used when result is needed
function myFunction(a, b){
	return a*b;
}
var x = myFunction(2,3);
document.write("Return statement function result = "+x);	//optionally document.write?(myFunction(2,3));

/*types of popups/dialogue boxes:-
1.Alert	--> alert("");	one paramenter
2.Prompt	--> prompt("");	usually inside alert
3.Confirm	-->confirm("");	usually inside alert
*/
// line break--> \n

//alert
alert("Hello");

//prompt
var user=prompt(Please enteryour name);
alert(user);

//confirm
var result=confirm("Do you really want to leave this page ?");
if (result == true){
	alert("Thanks for visiting);
}
else{
	alert("Thanks for staying with us");
}

