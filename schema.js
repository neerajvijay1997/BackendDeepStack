const { Schema } = require('mongoose');

const deepStackSchema = new Schema({
    id: Number,
    title: String,
    body: String
})

exports.deepStackSchema = deepStackSchema;
