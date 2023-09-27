const express = require("express");
const app = express();
const dbConnection = require("./DBConnection");
const {ObjectId} = require("mongodb")

app.use(express.json())

app.put("/update/:id",async(req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
  res.send(data);
})

app.listen(8000, () => {
  console.log("started")
})