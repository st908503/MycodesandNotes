/*
1. Data Types- undefined, boolean, number, string, bigint, symbol
2. In js we have only var but in ecmascript we have let and const
*/

console.log(10+"12"); //output 1012
console.log(9-"5"); //output is 4 but thats' a bug1
console.log("abc"-"def"); //output NaN(not a number)
console.log(true+true); // output 2

/*
Interview Question -  

IQ1----> Diff between null and undefined

1. Null is value that can be assigned to a variable undefined is data type
2. When you don’t assign any value to a variable then that variable  remains of type undefined
*/

var a = null;
console.log(a); //output null
console.log(typeof(a));// output is object but thats a bug2

var b ;
console.log(b); // output undefined
console.log(typeof(b)); // output undefined

/*
IQ2----> What is NaN?
NaN is property of global object
In other words it's a variable in global scope
The initial value of NaN is not a number
If we subtract two string as we did above, the output will be NaN (not a number)
*/

var c = "sjhdfb"
console.log(isNaN(c)); // output true

var d = 353;
console.log(isNaN(d)); // output false

console.log(NaN === NaN); // output false
console.log(Number.NaN === NaN); // output false
console.log(isNaN(NaN)); // output true
console.log(isNaN(Number.NaN)); // output true
console.log(Number.isNaN(NaN)); // output true


