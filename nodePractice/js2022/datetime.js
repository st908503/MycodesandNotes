//Date and Time in Javascript



/*
javascript date object represent a single moment in time in a platform independent format. Date objects contain a 
number that repesents milliseconds since 1st january 1970
*/

// there are 4 ways to create a new date object

// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds) // takes 7 arguments
// new Date(milliseconds) // we can't avoid month section
// new Date(date string)

//Date objects are created usinig new Date() constructor

// 1st way
let currDate = new Date();
console.log(currDate) //2022-09-22T17:13:17.810Z
console.log(new Date()) //2022-09-22T17:13:17.810Z
console.log(new Date().toLocaleString()) //9/22/2022, 10:50:38 PM  (gives perfect date and time)

/*
Date.now()
returns the numeric value corresponding to the current time - the number of milliseconds elapsed since
1 january 1970 00:00:00 UTC
*/

console.log(Date.now()); // milliseconds since 1 january 1970 00:00:00 UTC


//javascript counts months from 0 to 11
//new Date(year,month,day,hours,minutes,seconds,milliseconds)

var d = new Date(2018,11,24,10,33,30,0); // to get a date detail we can include all 7 parameters
console.log(d.toLocaleString()) //12/24/2018, 10:33:30 AM
console.log(new Date(0)) //1970-01-01T00:00:00.000Z

//minimum there should be two arguments that means month argument should be mentioned in all cases.
//Because it has second position in the argument

var dd = new Date(2022,0); // 1/1/2022, 12:00:00 AM (0 denotes january)
console.log(dd.toLocaleString())

//new Date(dateString) - creates a new date object from a new string

var ddd = new Date("October 13, 2021, 11:13:00")
console.log(ddd) //2021-10-13T05:43:00.000Z
console.log(ddd.toLocaleString()) //10/13/2021, 11:13:00 AM

//4th way
var t = new Date(1663869639415)
console.log(t.toLocaleString())

//-------------------------------------

//Date Methods

const curDate = new Date();

console.log(curDate.toLocaleString()); // perfect date and time
console.log(curDate.getFullYear()); // year
console.log(curDate.getMonth()); // month number 
console.log(curDate.getDate()); // date of noth
console.log(curDate.getDay()); //day of week


//how to set individual date
console.log(curDate.setFullYear(2022)) // this method can set optionally month and day
console.log(curDate.setFullYear(2022,10,5))
console.log(curDate.setMonth(10))
console.log(curDate.setDate(5))
console.log(curDate.toLocaleString())

//Times Method

const curTime = new Date();

console.log(curTime.getTime());
console.log(curTime.getHours()); // 00-23
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

//how to set individual time
//console.log(curTime.setTime()) // this method can set optionally month and day
console.log(curTime.setHours(5)) // here it is returning millisec but when used in browser then will return correct format
console.log(curTime.setMinutes(5))
console.log(curTime.setSeconds(5))
console.log(curTime.setMilliseconds(5))


//practice

//for only Date 
console.log(new Date().toLocaleDateString())
//for only time
console.log(new Date().toLocaleTimeString())


