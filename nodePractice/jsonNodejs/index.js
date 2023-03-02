const fs = require("fs")
const bioData = {
    name : "Shashank",
    age: "24",
    company: "TCS"
};
/*object property dont have double quotes but json property has double quote*/


//console.log(bioData.company)

// to convert object to json //
/*const jsonData = JSON.stringify(bioData)
console.log(jsonData)*/
//console.log(bioData.company) we cannot do this for getting value in json

//to convert json to object
/*const objData = JSON.parse(jsonData)
console.log(objData)*/

/*
1.  Convert to json
2. Add to other File
3. Read File
4. Again convert back to obj
5. console.log 
*/

//  const jsonData = JSON.stringify(bioData)
// fs.writeFile("text.json", jsonData, (err)=>{
//     console.log("done")
// })
/* let the data in text.json be API and we want to read as per 3rd point */
fs.readFile("text.json", "utf8" , (err,data)=>{
    console.log(data)
const objData = JSON.parse(data)
console.log(objData)
 })



