const mongoose = require('mongoose');
const { Schema } = mongoose;


if (mongoose.connect('mongodb://127.0.0.1:27017/school')) { console.log("db connected") }

//schema..................... 
const StudentSchema = new Schema({
  name: String,
  class: Number,
  roll: Number,
  gender: String
});

//Create ...............................................
const DataInput = async()=>{
const StudentModel = mongoose.model('students', StudentSchema);
const student = new StudentModel({ name: 'sh ', class: 5, roll: 4, gender: "male" });
const inputData = await student.save();
console.log(Data)
}
// DataInput()

//Update ..................................................
const DataUpdate = async()=>{
  const StudentModel = mongoose.model("students",StudentSchema);
  const updateData = await StudentModel.updateOne({name :"sh tanmoy"},{$set: {class:6,roll:45}})
  console.log(updateData)
}
// DataUpdate()

//Delete ...............................................
const DataDelete = async()=>{
  const StudentModel = mongoose.model("students",StudentSchema);
  const deleteData = await StudentModel.deleteMany({name:"sh tanmoy"})
  console.log(deleteData)
}
// DataDelete()

//Read .................................................
const DataFind = async ()=>{
  const StudentModel = mongoose.model("students",StudentSchema);
  const findData = await StudentModel.find()
  console.log(findData)
}
// DataFind()