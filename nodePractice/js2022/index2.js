//Expressions and operators

const { json } = require("express/lib/response");

// 1. Assignment Operator

var e = 5;
var f = 5;

console.log("is x equals to y:" + e === f); // output false because + operator also present
console.log(e === f); // output is true
console.log(`is x equals to y: ${e === f}`); // output is true ecmascript way

// 2. Arithematic Operators +,-,*,/,%,(prefix postfix increment decrement operators --, ++)
// prefix postfix increment decrement operators

var num = 15;
var newNum = num++ + 5; // its same as (num +5)
console.log(num); // output is 16
console.log(newNum); // output is 20

var numm = 15;
var newNumm = ++numm + 5; // same as (num +1) + 5
console.log(numm); // output is 16
console.log(newNumm); // output is 21

var num1 = 15;
var newNum1 = num1-- - 5; // its same as (num - 5)
console.log(num1); // output is 16
console.log(newNum1); // output is 20

var numm1 = 15;
var newNumm1 = --numm1 - 5; //
console.log(numm1); // output is 16
console.log(newNumm1); // output is 21

// 3. Comparison operator  = , !=, >, <, >=, <=   result will be boolean

var g = 20;
var h = 34;
console.log(g != h); // output is true

//4. Logical operator  &&, ||, !  result is boolean

var i = 23;
var j = 43;
console.log(i > j && j < 0);
console.log(i < j || j < 0);
console.log(!(i > j && j < 0));


// 5. String Operators
// concatenation operator(+ )

var k = "frfw";
var l = "srgre";
console.log(k + l);

// 6. Ternary Operator

console.log(3 ** 3); //output 27 exponentiation operator
console.log(3 ** 3); // 

// swap two number without using third variable

var m = 45;
var n = 55;

m = m + n;
n = m - n;
m = m - n;

console.log(m);
console.log(n);

// IQ3 Difference between == and  ===

var o = 5;
var p = '5' // if we console.log this we will get 5 only not '5'

console.log(o == p); // output is true because == deals with only value both are 5 so true
console.log(o === p); // output is false because === checks the value as well as the data type also




//leap year

//code1

var a = 1998;

if ((a % 4 === 0) || (a % 100 != 0 && a % 400 === 0)) {
    console.log("leap");
}
else {
    console.log("not leap");
}

//code2

var year = 2020;
debugger
if (year % 4 === 0) {
    if (year % 4 === 0) {
        if (year % 4 === 0) {
            console.log("ly");
        }
        else {
            console.log("nly");
        }
    }
    else {
        console.log("ly")
    }
}
else{
    console.log("nly");
}

// What is truthy and falsy values
//we have total 5 falsy values in js. 0, "" , undefined, null, NaN

if(NaN){ // here if we mention any of the falsy values(0, "" , undefined, null, NaN) then the output will always be the statement in else part and '1' and true will be truthy values
    console.log("if part");
}
else{ 
    console.log("else part");
}