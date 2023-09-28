const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/school');
  console.log("db connected")

  //schema..................... 
  const StudentSchema = new Schema({
    name: String,
    class: Number,
    roll: Number,
    gender: String
  });

  //model ...................
  const StudentModel = mongoose.model('students', StudentSchema);

}
main()


