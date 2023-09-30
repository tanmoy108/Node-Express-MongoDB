const express = require("express");
const app = express();
const connection = require("./DBconnection")

app.use(express.json())

app.get("/", (req, res) => {

  connection.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.send("can't get data")
    }
    else res.send(result)
  })

})
app.post("/", (req, res) => {
// const data = {name:"punam" , class:"5",gender:"female", roll:4, bloodGroup:"A+" } // static
const data = req.body;
  connection.query("INSERT INTO students SET?",data, (err, result) => {
    if (err) {
      res.send("can't get data")
    }
    else res.send(result)
  })

})

app.put("/:id", (req, res) => {
// const data = ['bijoy',7,'male',2,'O-',1]; //static
const data = [req.body.name,req.body.class,req.body.gender,req.body.roll,req.body.bloodGroup,req.params.id]
  connection.query("UPDATE students SET name=?, class=?, gender=?, roll=?, bloodGroup=? WHERE id=?",data, (err, result) => {
    if (err) {
      res.send("can't get data")
    }
    else res.send(result)
  })

})
app.delete("/:id", (req, res) => {
  connection.query("DELETE FROM students Where id="+req.params.id,(err, result) => {
    if (err) throw err
    else res.send(result)
  })

})

app.listen(8000, () => {
  console.log("started");
})