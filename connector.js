const mongodb = require('mongodb');

const mongoURI = "mongodb://localhost:27017/" + "deepstack"

let mongoose = require('mongoose');
const { deepStackSchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server "); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('deepstack', deepStackSchema)


exports.connection = collection_connection;
