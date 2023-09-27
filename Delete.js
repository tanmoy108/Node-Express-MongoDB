const dbConnection = require('./DBConnection');

const main = async () => {
  const fullDB = await dbConnection();
  // const data = await fullDB.deleteOne({ "name": "Tanmoy Sharma" })
  const data = await fullDB.deleteMany({"class":{$lt:5}})
  console.log(data);
  if (data.acknowledged && data.deletedCount) {
    console.log("deleted")
  }
}
main();