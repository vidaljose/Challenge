const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    name: String,
    lastName: String,
    born: Number,
    education: String
})

module.exports = mongoose.model('director',directorSchema);