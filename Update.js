const dbConnection = require('./DBConnection');

const main = async() =>{
    const fullDB = await dbConnection();
    const data = await fullDB.updateOne({"name":"nelson"},{$set:{"roll":1,"class":1}},{upsert:true})
    //if multiple match which object will be update ? ans is first object, if we want all multiple match shoould be updated then we write update({},{})
    if(data.matchedCount)
    {
      console.log("updated")
    }
    else
    {
      console.log("inserted")
    }
}
main();