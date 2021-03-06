/*A constructor is a special method of a class or structure in object-oriented programming
 that initializes an object of that type. 
 A constructor is an instance method that usually has the same name as the class, 
 and can be used to set the values of the members of an object, 
 either to default or to user-defined values */


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
var user=prompt("Please enter your name");	//ok and cancel options along with text box
alert(user);

//confirm
var result=confirm("Do you really want to leave this page ?");
if (result == true){
	alert("Thanks for visiting");
}
else{
	alert("Thanks for staying with us");
}


/*object vs variable
object->many values as property:value
variable->one value for each variable*/
var person={
	name: "John",
	age: 31;
	favColor:"green",
	height:183
};

//access object properties
//objectName.propertyName or  objectName['propertyName']
var x= person.age;
var y= person['name'];	//calculate length = person.name.length
/*Object Methods*/
//objectName.methodName()
/*create multiple objects of similar type*/
//use constructors
function person(name, age, color){
	this.name = name;	//this keyword refers to current object
	this.age = age;
	this.favColor = color;
}
//create object
var p1= new person("John", 42, "green");
var p2= new person("Amy", 25, "yellow");
//get output
document.write(p1.age);	//42
document.write(p2.name);	//Amy



/*object initialization*/
//object literal/initializer syntax
var John= {name: "John", age:25, color:"green"};

//access it
document.write(John.age);	//25
document.write(John['color']);	//green



/*Methods*/
//functions stored as object properties i.e. similar to functions
//methodName= function() {code lines}
//Access method
//objectName.methodName()	//can be referenced using this keyword as it refers to current object

function person(name, age){
	this.name= name;
	this.age = age;
	this.changeName= function(name){
		this.name=name;
	}
}
//create an object
var p= new person("David", 21);
//change name
p.changeName("John);
//verify changes
document.write(p.name);	//John
document.write(p['age']);	//21


//define function outside constructor and associate it with object
function person(name, age){
	this.name= name;
	this.age= age;
	this.yearOfBirth = bornYear;
}
function bornYear(){
	return 2016 - this.age;
}
//call
var p = new person("A", 22);
document.write(p.yearOfBirth());	//1994

/*Core Objects*/

//Arrays ~ special type of objects
//declare
var courses= new Array("a","b");
var c2=["JS","C++"];	
//var course= new Array(2); course[0]="a"; courses[1]="b";
//var courses=new Array(); i.e. no size defined
//var courses=["a","b"];

//access
document.write(courses[0]);	//a
//length
document.write(courses.length);	//2
//concat
var newCourse=courses.concat(c2);
//associative array(i.e. text index instead of number)~ JS don't support, but an object will be created
var person=[];	//empty array
person["name"]="John";
person["age"]=46;
document.write(person["age"]);	//46 as object instead of array


//Math Object
/*properties	description
	E			Euler's constant
	LN2			Natural Log base 2
	LN10		Natural log base 10
	LOG2E		Natural log of e base 2
	PI			Value of pi
*/
//example
document.write(Math.PI);	//3.14592653589793	//no constructor, thus no need create math object

/*Methods			Description
	abs(x)			Absolute of x
	acos(x)			arccosine of x in radians
	asin(x)			arcsine of x in radians
	atan(x)			arctangent of x as numeric between -pi/2 and pi/2 radians
	atan2(y,x)		arctangent of quotient of its arguments
	ceil(x)			round up to nearest integer
	floor(x)		round down to nearest integer
	cos(x)			cosine of x(x in radians)
	exp(x)			value of E^x
	log(x)			natural log(base e) of x
	max(x,y..n)		maximum
	min(x,y..n)		minimum
	pow(x,y)		x^y
	random()		random number between 0 and 1	//random between 1 and 10= Math.ceil(Math.random*10).....and so on
	round(x)		round x to nearest integer
	sin(x)			sine of x (x in radians)
	sqrt(x)			square root of x
	tan(x)			tangent of angle
*/
//example
var number= Math.sqrt(4);
document.write(number);	//2


//date functions

//setinterval()
function myAlert(){
	alert("Hi");
}
setInterval(myAlert,3000)	//time in milliseconds

//date
var d= new Date();	//current date and time in d
//new Date(milliseconds)
//new Date(dateString)
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d1= new Date(86400000);
var d2= new Date("January 2, 2015 10:42:00");
var d3= new Date(88,5,11,11,42,0,0);	//Sat Jun 11 1988 11:42:00
//JS counts months from 0 to 11
//date is static--not change once defined until changed by user

/*date methods			description
	getFullYear()		get year
	getMonth()			get month
	getDate()			get day of month
	getDay()			get day of week
	getHours()			get hour
	getMinutes()		get minutes
	getSeconds()		get seconds
	getMilliseconds()	get the milliseconds
*/
var d= new Date();
var hours = d.getHours();	//current hour


/*DOM*/
//Document Object Model---> Object oriented model of its logical structure
/*Dom Tree-->	Document->html->head->title
							  |
							  ->body->h1
									|
									->a
*/
//imp to understand relationship to manipulate using JS


//in JS, document object is owner(root) of all objects from webpage
document.body.innerHTML="Some Text";	//body is element of DOM, change content of innerHTML property
//innerHTML used on almost all HTML elements to change contents


//all HTML elements are objects(have properties and methods)
/*
//find element by id
document.getElementById(id);

//find element by class name
document.getElementsByClassName(name);

//find element by tag name
document.getElementsByTagName(tname);
*/
var elem = document.hetElementById("demo");
elem.innerHTML="Hello World!";

/*relationship methods:-
element.childNodes
element.firstChildelement
element.lastChildelement
element.hasChildNodes
element.nextSibling
element.previousSibling
element.parentNode
element.cloneNode
document.createElement(element)
document.createTextNode(text)
element.removeChild(node)
element.replaceChild(newNode,oldNode)
// note element is not literal, but the element where work to be done. Document is literal
*/
//needed to be appended to existing element with one of following methods
/*element.appendChild(newNode)
element.insertBefore(node1, node2) i.e. node 1 before node 2
*/
//one node can have only one parent node


//change style of HTML
window.onload=function(){	//call the function in window.onload to make sure HTML is loaded
	var x = document.getElementById("demo");
	c.style.color='#6600FF';
	x.style.width='100px';
};
//all CSS properties can be set and modified by JS
//dashes(-) can't be used, instead camelCasing is used
//example:- background-color(CSS) ~ backgroundColor(JS)



//VVVVVV IMP
/* Event Handling*/

//Events--> user clicks, moves mouse, submit form etc.
//handler function
/*Event							Description
	onclick
	onload
	onunload
	onchange					of form element, selection, checked state changed
	onmouseover 				mouse onto element/child of that element
	onmouseout					user moves mouse out of element
	onmousedown					press mouse button over element
	onmouseup					release mouse button over element
	onblur
	onfocus
*/

function show(){
	alert("Hi There");
}

window.onload= function(){
	var x = document.getElementById('demo');
	x.onclick= function(){
		document.body.innerHTML= Date();
	}
};

//on change event
function change(){
	var x= document.getElementById('name');
	x.value=x.value.toUpperCase();
}


//eventlistener
//element.addEventListener(event, function, useCapture);

//remove itself after execution
window.onload= function(){
	var btn=document.getElementById("demo1");
	btn.addEventListener("click", myFunction);
	function myFunction(){
		alert(Math.random());
		btn.removeEventListener("click", myFunction);
	}
};


/*Event Propagation*/
//methods-->bubbling & capturing

//bubbling-->innermost element's event is handled first
//elem1.addElentListener(event, function, useCapture);	//false for bubbling(default)

//capturing-->outermost element's event handled first
//elem1.addElentListener(event, function, useCapture);	//true for capturing


/*Image Slider*/


/*Form Validation*/
function validate(){
	var n1= document.getElementById('num1');
	var n2= document.getElementById('num2');
	if(n1.value != '' && n2.value != ''){
		if(n1.value == n2.value){
			return true;
		}
	}
	alert("The values should be equal and not blank");
	return false;
}
//not get submitted if onsubmit(html) is false
