const express = require("express");
const app = express();
const dbConnection = require("./DBConnection");
const {ObjectId} = require("mongodb")

app.use(express.json())

app.get("/", async (req, res) => {
  const fullDB = await dbConnection();
  const data = await fullDB.find().toArray();
  res.send(data);
})

app.post("/",async (req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.insertOne(req.body);
  res.send(data);
})

app.put("/update/:id",async(req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.updateOne({_id:new ObjectId(req.params.id)},{$set:req.body});
  res.send(data);
})

app.delete("/:id",async(req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.deleteOne({_id:new ObjectId(req.params.id)});
  res.send(data);
})

app.listen(8000, () => {
  console.log("started")
})