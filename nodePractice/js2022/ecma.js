//since 2015 ES6 started and each year its coming with a new version

//In 2015 js cam with new updates in form of ES6 so mostly we will refer to ES6 or ES2015. This update included below points

/*
let and const
destructuring
template strings
object properties
default arguments
arrow functions
rest operator
spread operator
*/

// let vs const vs var
//var -> function scope
//let and const -> block scope (cant be used outsode a block)



// default parameters

function mul1 (a,b=9){
    return a*b;
}
console.log(mul1(3)); // output is 27 

function mul2 (a=7,b){
    return a*b;
}
console.log(mul2(3)); // output is  NaN (position of default parameter and argument is looked into)


//Fat Arrow function

const sum = (a,b) =>{
    return `sum is ${a+b}`
} 

console.log(sum(45,43));

//in case of fat arrow function always first define the function then call it but it traditional function call we can call anytime
// in fat arrow the name of function will be taken as a variable using const

