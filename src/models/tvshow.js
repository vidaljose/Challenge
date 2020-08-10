const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actor = mongoose.model('actor');
const director = mongoose.model('director');

const tvshowSchema = new Schema({
    name: String,
    country: String,
    release: Number,
    seasons: [
        {
            nSeason:Number,
            episodes:[
                {
                    name: String,
                    cap: Number,
                    synopsis: String,
                    director: {
                        type: Schema.Types.ObjectId,
                        ref: 'director'
                    } 
                }
            ]
        }
    ],
    nEpisodes: Number,
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'actor'
    }]
    
})

module.exports = mongoose.model('tvshow',tvshowSchema);