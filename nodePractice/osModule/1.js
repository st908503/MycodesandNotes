const os = require("os");

/* os modules */

console.log(os.arch())
console.log(os.hostname())
console.log(os.tmpdir())
console.log(os.platform())
console.log(os.type())

const freememory = os.freemem() 
console.log(`${freememory/1024/1024/1024}`)

const totalmemory = os.totalmem() 
console.log(`${totalmemory/1024/1024/1024}`)


