
const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname,"crud")
const filePath = `${dirPath}/read.txt`

// create operation 

fs.writeFileSync(filePath,'this is read file')

// read operation 

// fs.readFile(filePath,'utf8',(err,item) => {
//     console.log(item);
// })

// for append something 

// fs.appendFile(filePath," add new way to update text file",(err) => {
//     if(!err){
//         console.log("file updated succesfully");
//     }
// })

// how to rename file 

// fs.rename(filePath,`${dirPath}/reName.txt`,(err) => {
//         if(!err){
//             console.log("file updated succesfully");
//         }
// })

// for delete operation 

// fs.unlinkSync(`${dirPath}/reName.txt`);


