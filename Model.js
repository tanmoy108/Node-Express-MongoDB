const mongoose = require("mongoose");
const {Schema,model} = mongoose;


const StudentSchema = new Schema({
    name:String,
    class:Number,
    roll:Number,
    gender:String,
    bloodGroup: String
})

const StudentModel = model("students",StudentSchema)

module.exports = StudentModel 