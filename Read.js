const dbConnection = require("./DBConnection")

// 01. Read .....................................

// // promise handle one way
// // console.log(dbConnection()) // promise FullDB
// dbConnection().then((res)=>{
//   // console.log(res.find().toArray()) // promise only data
//   res.find().toArray().then((data)=>{
//     console.log(data)
//   })
// })

//another way
const main = async()=>{
const FullDB= await dbConnection();
const data = await FullDB.find().toArray()
console.log(data)
}
main()