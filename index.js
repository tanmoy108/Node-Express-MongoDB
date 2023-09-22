const fs = require("fs");
const path = require("path");
const dirPath = path.resolve(__dirname, "crud");

//create -------------------
fs.writeFileSync(`${dirPath}/data.txt`, "this is crud operation through fs module");
const filePath = path.resolve(dirPath, "data.txt");

//async read ----------------------------
// fs.readFile(filePath,(err,item)=>{
//     console.log(item) // buffer value
// })

fs.readFile(filePath, 'utf-8', (err, item) => {
    console.log(item);
})

//async update text or add text --------------------
setTimeout(() => {
    fs.appendFile(filePath, " added later", (err) => {
        if (!err) console.log("text updated")
    })
}, 5000)

//rename text file
setTimeout(() => {
    fs.rename(filePath, `${dirPath}/reName.txt`, (err) => {
        if (!err) console.log("rename successful")
    })
}, 7000)

//delete file .........................
setTimeout(() => {
    fs.unlinkSync(`${dirPath}/reName.txt`)
}, 9000)