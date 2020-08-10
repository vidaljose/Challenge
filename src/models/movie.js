const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actor = mongoose.model('actor');
const director = mongoose.model('director');

const movieSchema = new Schema({
    name: String,
    runningTime: Number,
    country: String,
    release: Number,
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'actor'
    }],
    director: {
        type: Schema.Types.ObjectId,
        ref: 'director'
    }
})

module.exports = mongoose.model('movie',movieSchema);