const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors')
app.use(cors())

//get request
app.get('/', async (req, res) => {
  const data = await connection.find()
  res.send(data)
})


//create todo
app.post('/', async (req, res) => {
  const { titile, body } = req.body
  const data = await connection.create(req.body)
  console.log(data)

  res.send('added data to db')
})


//delete todo
app.post('/delete', async (req, res) => {
  const { id } = req.body
  console.log(id)
  const data = await connection.findOneAndRemove({ id: id })
  console.log(data)
  res.send('deleted data from db')
})


//update todo
app.post('/update', async (req, res) => {
  const { id, title, body } = req.body
  // console.log(req.body)
  const data = await connection.findOneAndUpdate({ id: id },
    { $set: { title: title, body: body } })
  console.log(data)
  res.send('updated data from db')
})






app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;   