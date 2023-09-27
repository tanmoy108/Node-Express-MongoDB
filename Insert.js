const dbConnection = require('./DBConnection');

const main = async() =>{
    const fullDB = await dbConnection();
    // const data = await fullDB.insertOne({"name":"hydra","class":9,"roll":2,"gender":"male"})
    const data = await fullDB.insertMany(
    [
      {"name":"hydra","class":2,"roll":20,"gender":"male"},
      {"name":"nebula","class":3,"roll":29,"gender":"female"},
      {"name":"pepcicum","class":6,"roll":82,"gender":"male"},
      {"name":"dracula","class":10,"roll":42,"gender":"female"},
    ])
    if(data.acknowledged)
    {
      console.log("inserted")
    }
}
main();