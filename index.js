// Show dbs = for showing database
// use local(db name) = switch to local / new file create
// db.dropDatabase() = delete database it works on which database want to delete. Ami jodi youtube database delete korte cai tahole youtube database er upor ei cmd calate hobe . tarpor use admin run korte hobe.
// show collections
// db.createCollection(‘collection name’) = create collection
// db.collection_name.drop() = delete collection
// db.startup_log(collection name).find() = read korar jonno
// db.products(collection name).insertOne({'name':"fdfdf"}) = ekta insert korar jonno
// db.products.insertMany([ {},{},{} ]) = onek gulo insert korar jonno
// db.products.findOne({title:"dfdf"} jeta die khujbo oita likbo)
// eta abar onno vabe lekha jai
// db.products.find({......}) eta die korl array moddhe die asbe karon eta multiple search kore
// db.products.find({title: {$eq:"dfdfdf"}}) , eta mane equal dfdfdf er somman

// db.products.find({$and:[{rating:{$gt:4.5}},{price:{$lt:500}}]}).sort({"price":1}) /// 1 ascending, -1 descending

// gt, lt, and, or, eq, set
// db.products.find({},{titile:1,price:1,_id:0).sort({price:-1}).limit(2) // only show title and price
// db.products.countDocuments() 

// db.products.updateOne({id:6},{$set:{price:2000,title:'hello'}},{upsert:true}) // upsert mane jodi ei id na thake tahole notun arkti object create hobe .
// updateMany()
// replaceOne() // ekane $set lage na 
// deleteOne({id:7})
// deleteMany()
