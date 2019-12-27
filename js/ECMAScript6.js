//ECMAScript(ES6) scripting language specification
//standardize JS

//ES6 introduced oops

/*variable declaration*/
var a = 10;		//defines globally or locally to entire function regardless of block scope
const b='hello';	//can't be changed(immutable), but same scope as let
let c=true;		//limited in scope to block,statement or expression
//example
if(true){
	let name='Jack';
}
alert(name);	//generates error as name has scope inside function only


//very good example, please read thoroughly
function varTest(){
	var x=1;
	if (true){
		var x=2;
		console.log(x);		//2
	}
	console.log(x);		//2
}
function letTest(){
	let x=1;
	if (true){
		let x=2;	//different variable than defined above
		console.log(x);		//2
	}
	console.log(x);		//1
}
//let can be est used in for/while loops
//let is not subject to variable hoisting i.e. do not move to top of current execution context



/*Template literals*/
//way to output variable in string

//old method
let name='David';
let msg='Welcome'+name+'!';
console.log(msg);		//Welcome David!

//ES6 method
let name='David';
let msg=`Welcome ${name}!`;		//${expression} to extract value from variable(placeholder) to string enclosed in Backticks(``)
console.log(msg);		//Welcome David!

//ES6 example 2
let a=8;
let b=6;
let msg=`The sum is ${a+b}`;
console.log(msg);		//The sum is 14
//to escape backtick, use backslash \ before the backtick


/*Loops in ES6*/

//for loopslet arr=[1,2,3];
for (let k=0;k<arr.length;k++){
	console.log(arr[k]);		//1 2 3
}

//for...in loop(for each loop in other languages)
let obj={a:1, b:2 , c:3};
for(let v in obj){		//should not be used to iterate over array as it can iterate in arbitrary order
	console.log(v);		//a b c
}		//also iterating variable is string

//for...of loop
let list=["x", "y" , "z"];
for (let val of list){
	console.log(val);		//x y z
}
//works for other iterable too(including newly introduced Map, Set, WeakMap and WeakSet)



/*function definition*/
//old syntax
function add(x,y){
	var sum=x+y;
	console.log(sum);		
}
add(35,7);		//42

//new syntax
const add=(x, y) =>{
	let sum= x+y;
	console.log(sum);		
}		//skip function and return keywords as well as some parentheses and braces
add(35,7);		//42

//new syntax2
const greet= x => "Welcome "+x;
alert(greet("David");		//Welcome David

//new syntax3
const x= () => alert("Hi");
x();		//Hi
//if there are no parentheses, empty pair of parentheses should be used//useful for inline functions


//old syntax inline
var arr=[2, 3, 7, 8];
arr.forEach(function(el){		//we want to execute function for each element of array
	console.log(el*2);			//4 6 14 16
});

//ES6 syntax inline
const arr=[2 , 3, 7, 8];
arr.forEach(v=>{
	console.log(v * 2);		//4 6 14 16
});



/*default parameters*/
//default values right while decalring
function test(a, b=3, c=42)
{
	return a+b+c;
}
console.log(test(5));		//50

//arrow function
const test=(a, b=3, c=42) 
=>{
	return a+b+c;
}
console.log(test(5));		//50
//default values evaluated at function call time from left to right
//default expressions can thus use values of previously-filled parameters


/*ES6 objects*/
//object have properties
//objects can have properties that are function definitions called as methods
//ES6 introduced shorthand notations and computed property namespaceURI

//method definition shorthand does not require colon(:) or function keyword
let tree={
	height:10,
	color:'green',
	grow(){		//grow function of tree object
			this.height +=2;
	}
};
tree.grow();
console.log(tree.height);		//12
//in case of duplicate properties, the last property value overrites prior ones


//computed property names
//using square beacket[]

//example1
let prop='name';
let id='1234';
let mobile='08923';
let user={
	[prop]:'Jack';
	[`user_${id}`]:'${mobile}`
};
console.log(user.name);		//Jack
console.lo(user.user_1234);		//08923

//example2
var i=0;
var a={
	['foo'+ ++i]:i,
	['foo'+ ++i]:i,
	['foo'+ ++i]:i
};
console.log(a.foo1);		//1
console.log(a.foo2);		//2
console.log(a.foo3);		//3

//example3
var param='size';
var config={
[param]:12,
['mobile'+param.charAt(0).toUpperCase()+param.slice(1)]:4		//mobileSize:4
};
console.log(config.mobileSize);		//4			




/*assign()*/
//new object method
//combine multiple sources to one target to create single object
//Object.assign() also useful to create duplicate of existing object

//create new object
let person={
	name:'Jack',
	age:18,
	sex:'male'
};
let student={
	name:'Bob'
	age:20,
	xp:'2'
};
let newStudent= Object.assign({},person,student);

console.log(newStudent.name);		//Bob
console.log(newStudent.age);		//20
console.log(newStudent.sex);		//male
console.log(newStudent.xp);			//2
//Object.assign(targetObject,source1,source2...)
//properties of source1 overridden by properties of source2 and so on, so order is imp


//create duplicate object
//case to handle
let person={
	name:'Jack',
	age:18
};
let newPerson=person;	//newPerson references person
newPerson.name='Bob';

console.log(person.name);		//Bob
console.log(newPerson.name);		//Bob
//to avoid the case(mutations), use Object.assign() to create new object
let person={
	name:'Jack',
	age:18
};
let newPerson=Object.assign({}, person);	//newPerson references person
newPerson.name='Bob';

console.log(person.name);		//Jack
console.log(newPerson.name);		//Bob


//assign a value to abject property
let person={
	name:'Jack',
	age:18
};
let newPerson=Object.assign({}, person,{name:'Bob'});
console.log(newPerson.name);		//Bob



/*Destructuring*/
//unpack values from arrays or properties form objects into distinct variables

//arrays destructuring
//example1
let arr=['1','2','3'];
let [obe, two, three] = arr;
console.log(one);		//1

//example2
let a=()=>{
	return [1, 3, 2];
};
let [one, , two]= a();
console.log(two);		//2

//example3(swap and assignment)
let a, b, c=4, d=8;
[a,b =6]=[2];		//a=2, b=6
[c,d]=[d,c];		//c=8, d=4


//object destructuring
//example1
let obj={h:100, s:true};
let {h,s}=obj;
console.log(h);		//100

//example2(assign without declaration)
let a,b;
({a,b}={a:'Hello', b:'Jack'});
console.log(a+b);		//Hello Jack

//example3
let {a,b}={a:'Hello', b:'Jack'};
console.log(a+b);		//Hello Jack

//example4(assign abject to new variable)
var o={h:42, s:true};
var{h:foo, s:bar}=o;

console.log(h);		//Error
console.log(foo);		//42

//example5(assign default values to variables in case value unpacked from object is undefined)
var obj={id:2,name:'Jack'};
let{id=10, age=20}=obj;
console.log(id);		//42
console.log(age);		//20



/*Rest & Spread*/
//rest parameters

//previously
function containsAll(arr){
	for(let k=1; k<arguments.length;k++){		//arguments object to pass arguments
		let num=arguments[k];
		if(arr.indexOf(num)===-1){
			return false;
		}
	}
	return true;
}
let x=[2,4,6,7];
console.log(containsAll(x,2,4,7));	//true
console.log(containsAll(x,6,4,9));	//false

//new(rest parameter)
function containsAll(arr,...nums){		//...nums(rest parameter) takes all extra arguments
	for (let num of nums){		//(...) spread operator
		if (arr.indexOf(num===-1){
			return false;
		}
	}
	return true;
}
let x=[2,4,6,7];
console.log(containsAll(x,2,4,7));	//true
console.log(containsAll(x,6,4,9));	//false



/*Classes*/
//not hoisted i.e can't access class before declaring
//example1
class Rectangle{
	constructor(height, width){		//constructor method important for initializing(only one each class)
		this.height=height;
		this.width=width;
	}
}
const square=new Rectangle(5,5);		//object created

//example2(named class)
var square= class Rectangle{
	constructor(height, width){		//constructor method important for initializing
		this.height=height;
		this.width=width;
	}
};

//example3(unnamed class)
var square= class {
	constructor(height, width){		//constructor method important for initializing
		this.height=height;
		this.width=width;
	}
};
//static methods cannot be called through class instance(no object creation reaquired)

//inheritance
//example
class Animal{
	constructor(name){
		this.name=name;
	}
	speak(){
		console.log(this.name+'makes a noise');
	}
}

class Dog extends Animal{
	speak(){		//no constructor in subclass
		console.log(this.name+'barks');
	}
}

let dog=new Dog('Rex');
dog.speak();		//Rex barks

class Dog extends Animal{
	speak(){		//no constructor in subclass
		super.speak();		//called parent class constructor
		console.log(this.name+'barks');
	}
}

let dog=new Dog('Rex');
dog.speak();		//Rex makes a noise	//Rex barks



/*Map*/
//key value pairs(object and primitive values)
//syntax---> new Map([iterable]) where iterable is array or any iterable object whose elements are array
let map=new Map([['k1','v1'],['k2','v2']]);
console.lo(map.size);		//2

/*Map Methods
get(key,value)
gey(key)
has(key)
delete(key)
clear()
keys()-->return iterator of keys
values()-->return iterator of values
entires()-->return iterator of array[key,value] in map for each element
*/

let map=new Map();
map.set('k1','v1').set('k2','v2');

console.log(map.get('k1'));		//v1
console.log(map.has('k2'));		//true

for(let kv of map.entries()){
	console.log(kv[0]+' : '+kv[1]);	//k1:v1		//k2:v2
}



/*Set*/
//unique values
//new Set([iterable])
/*Methods
add(value)
delete(value)
has(value)
clear()
values()
*/
let set=new Set();
set.add(5).add(9).add(59).add(9).add('9');
console.log(set.has(9);		//true

for(let v of set.values()){
	console.log(v);		//5 9 59 '9'
}
//NaN and undefined also stored in set

