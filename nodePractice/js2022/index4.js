// Function

//DRY--- Do not repeat yourself

function sum(a,b){ // a and b are parameters
    var c= a+b;
    console.log(c);
}

sum(23,87); // 27 and 87 are arguments

//while difining function, values under parameters are called parameters and while calling function, values under parameters are called arguments

//IQ4 why functions?  ---> ans- for code reusability

//Function expression;
//Function vexpressions means creating a function and putting it into a variable

function sub(a,b){ 
    var c= a-b;
    console.log(c);
}

var funexpression = sub(23,87);
funexpression;

//return keyword
//when javascript reaches a return statement function will stop executing
//function often compute a return value. The return value is returned back to the caller?


function mul(a,b){ 
    var c= a*b;
    return c;
}

var funexpression = mul(23,87);
console.log(funexpression);


//anonymous function expression

var calc = function (a,b){  
    return c= a/b;
}
console.log(calc(23,87));



