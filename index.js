const fs = require('fs');
const path = require('path');

// console.log(path.join(__dirname,'files'))
let dirPath = path.resolve(__dirname, 'files');
console.log(dirPath)

for(let i =0; i<5 ;i++)
{
    fs.writeFileSync(`${dirPath}/data${i+1}.txt`,`this is text ${i+1}`)
}

fs.readdir(dirPath, (err, files) => {
    console.log(files); //[ 'data1.txt', 'data2.txt', 'data3.txt', 'data4.txt', 'data5.txt' ]
    files.forEach((item) =>
        console.log(item)
    )
})