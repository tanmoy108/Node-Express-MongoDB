const os = require("os")
console.log(os.hostname()) //ShTanmoy
console.log(os.freemem()/(1024*1024*1024)) //free of ram
console.log(os.totalmem()/(1024*1024*1024)) //total
console.log(os.arch()) //architecture X64
console.log(os.platform()) //win32
console.log(os.userInfo()) 