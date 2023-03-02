// in  js array can store heterogeneous values

// in js we have Array class, and arrays  are part of that instance

var a = ['jhjb', 58, 'bjhn', true];

console.log(a.length);//to get length of array
console.log(a[a.length-1])// to get last element of array

// traverse array using normal for loop 

for (i = 0 ; i<a.length ; i++){
    console.log(a[i])
}

// for in loop and for of loop (defined in ES6)

//for in loop
for (let elements in a){
    console.log(elements); // it will give the index of elements for the array not their value ie (0,1,2,3)
}

//for of loop
for (let elements of a){
    console.log(elements); // it will give the elements of the array ie ('jhjb', 58, 'bjhn', true)
}

//forEach loop
//calls a function for each element in the array

a.forEach(function(element, index, array){
    console.log(element); // element of array
    console.log(index); // index of array
    console.log(array); // full array

})

//forEach using fat arrow function

a.forEach((element, index, array)=>{
    console.log(element); // element of array
    console.log(index); // index of array
    console.log(array); // full array

})

//search and filter in array


