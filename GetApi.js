const express = require("express");
const app = express();
const dbConnection = require("./DBConnection");

app.get("/", async (req, res) => {
  const fullDB = await dbConnection();
  const data = await fullDB.find().toArray();
  res.send(data);
})


app.listen(8000, () => {
  console.log("started")
})