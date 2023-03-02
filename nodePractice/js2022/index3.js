// Control statements and Loops

//Ternary Operator
// Its a conditional oerator that takes three operands

var age = 16;
console.log((age>18)?"you can vote":"you can't vote");

//Switch Statement

/*
var area = 'circle';

var PI= 3.14 , l= 5, b =4 , r=3;


switch(area){
    case 'circle':
        console.log(3.14*r*r);
    break;
    case 'rectangle':
        console.log((l*b)/2);
    case 'square':
        console.log(l*b);
     default:
    console.log("not found");
}
*/

//above code is printing all cases. To tackle this we have break statement

var area = 'circle';
var PI= 3.14 , l= 5, b =4 , r=3;

switch(area){
    case 'circle':
        console.log(3.14*r*r);
    break;
    case 'rectangle':
        console.log((l*b)/2);
    case 'square':
        console.log(l*b);
     default:
    console.log("not found");
}
 

//while loop

// this loop executes a condition as long as the condition is true

var num = 0;
//block scope (below {..}) while loop first check the condition then only it enters that block scope
while(num<=10){
    console.log(num)
    num++;
}

//dowhile loop


var numm = 0;
do{
    debugger
    console.log(numm)// this line while execute in do while even before checking the condition
    numm++
} while(numm<=10);

//Do while is not preffered so much as it will execute atleast onece befoew checking the condition. Hence giving one output atleast. 


//For Loop

for (var n = 0; n <= 10 ; n++){
    console.log(n)
}


// table using for loop

for (var n=1; n<=10; n++){
    var tableof = 8;
    console.log(tableof*n);
}