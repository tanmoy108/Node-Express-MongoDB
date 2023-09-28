const mongoose = require("mongoose");
const dbConnect = mongoose.connect("mongodb://127.0.0.1:27017/school")
if(dbConnect)
{
    console.log("database connected");
}
module.exports = dbConnect;

