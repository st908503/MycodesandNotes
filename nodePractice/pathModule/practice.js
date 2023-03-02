const path = require("path");

console.log(path.dirname("/Users/shashanktripathi/Desktop/untitled folder/react/tinder/nodePractice/pathModule/practice.js"))

console.log(path.extname("/Users/shashanktripathi/Desktop/untitled folder/react/tinder/nodePractice/pathModule/practice.js"))

console.log(path.basename("/Users/shashanktripathi/Desktop/untitled folder/react/tinder/nodePractice/pathModule/practice.js"))

const myPath = path.parse("/Users/shashanktripathi/Desktop/untitled folder/react/tinder/nodePractice/pathModule/practice.js");
console.log(myPath.name)

