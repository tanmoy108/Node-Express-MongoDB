const express = require("express");
const app = express();
const dbConnection = require("./DBConnection");
const {ObjectId} = require("mongodb")

app.delete("/:id",async(req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.deleteOne({_id:new ObjectId(req.params.id)});
  res.send(data);
})

app.listen(8000, () => {
  console.log("started")
})