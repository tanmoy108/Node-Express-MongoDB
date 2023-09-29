const express = require("express");
const multer = require('multer')
const app = express();
app.use(express.json())

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './asset/upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+".jpg")
    }
  })
}).single('uploaded_file')

app.post("/upload", upload, (req, res) => {
  res.send("file uploaded")
})

app.listen(8000, () => {
  console.log("started")
})



