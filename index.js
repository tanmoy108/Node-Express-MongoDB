const express = require("express");
const StudentModel = require("./Model");
const { ObjectId } = require("mongodb");
require("./DBconnection")

const app = express();
app.use(express.json())

//create ..............................
app.post("/", async (req, res) => {
  const inputData = new StudentModel(req.body);
  const dataSave = await inputData.save();
  console.log(dataSave);
  res.send(dataSave);
})

//read
app.get("/", async (req, res) => {
  const readData = await StudentModel.find();
  res.send(readData);
})

//update
// app.put("/update/:name",async(req,res)=>{
//   const updateData = await StudentModel.updateOne({name:req.params.name},{$set:req.body})
//   res.send(updateData)
// })
app.put("/update/:_id", async (req, res) => {
  const updateData = await StudentModel.updateOne(req.params, { $set: req.body })
  res.send(updateData)
})

//delete
// app.delete("/delete/:id",async(req,res)=>{
//   const deleteData = await StudentModel.deleteOne({_id:req.params.id});
//   res.send(deleteData);
// })

app.delete("/delete/:_id", async (req, res) => {
  const deleteData = await StudentModel.deleteOne(req.params);
  res.send(deleteData);
})


app.listen(8000, () => {
  console.log("started")
})



