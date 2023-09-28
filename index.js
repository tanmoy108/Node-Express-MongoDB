const express = require("express");
const StudentModel = require("./Model");
require("./DBconnection")

const app = express();
app.use(express.json())

// search multiple field
app.get("/search/:key",async(req,res)=>{
  console.log(req.params.key)
  const getData = await StudentModel.find(
    {
    "$or":[
      {"name":{$regex:req.params.key}},
      {"bloodGroup":{$regex:req.params.key}},
      {"gender":{$regex:req.params.key}},
    ]
  })
  res.send(getData);
})

app.listen(8000, () => {
  console.log("started")
})



