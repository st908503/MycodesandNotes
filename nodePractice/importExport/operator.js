//in node js each file is called module and the scope of module is private

 const add  = (a,b)=>{
    return a+b
 }

 const sub  = (a,b)=>{
    return a-b
 }

 const mult  = (a,b)=>{
    return a*b
 }

 const div  = (a,b)=>{
    return a/b
 }
/* 1.export single module */
//module.exports =  add; 
  
/* 2.export multiple modules */
//   module.exports.add = add
//   module.exports.sub = sub

  /* Best way */

  module.exports = {add,sub, mult, div}


  //now we can use add in other module/file

  // here we exported functions but similarily variables can also be exported 