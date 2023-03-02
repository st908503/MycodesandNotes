const c = require("chalk")
const validator  = require ("validator")

// console.log(chalk.blue.italic("Hello"))

const res = validator.isEmail("shashank@123.com");
console.log(res ? chalk.green(res) :chalk.red(res))
 