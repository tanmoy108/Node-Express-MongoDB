const express =require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();

let count = 0;
//event handle
event.on("COUNT",()=>{
  console.log(count++);
})

app.get("/",(req,res)=>{
  res.send("get api 1");
  event.emit("COUNT") // event generate 
})
app.get("/search",(req,res)=>{
  res.send("get api 2")
  event.emit("COUNT")
})
app.get("/upload",(req,res)=>{
  res.send("get api 3")
  event.emit("COUNT")
})

app.listen(8000,()=>{
  console.log("started");
})