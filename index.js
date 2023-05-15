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

//write route here

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;   