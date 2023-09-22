const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1> hello bro <h2/>")
    res.end()
}).listen(8000);