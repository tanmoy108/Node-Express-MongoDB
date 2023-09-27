const express = require("express");
const app = express();
const dbConnection = require("./DBConnection");

app.use(express.json())

app.post("/",async (req,res)=>{
  const fullDB = await dbConnection();
  const data = await fullDB.insertOne(req.body);
  res.send(data);
})

app.listen(8000, () => {
  console.log("started")
})