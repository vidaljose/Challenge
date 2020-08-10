const Actor = require('../models/actor');
const Director = require('../models/director');
const Movie = require('../models/movie');

module.exports = {
    index: async ( req, res, next ) =>{
        const movie = await Movie.find({}).populate('actors').populate('director').exec();
        res.status(200).json(movie);
    },
    indexName: async ( req, res, next ) =>{
        const { name }  = req.params;
        const movie = await Movie.find({}).sort({"name":1}).populate('actors').populate('director').exec();
        res.status(200).json(movie);
    },
    indexLimit: async ( req, res, next ) =>{
        const { limit }  = req.params;
        const movie = await Movie.find({}).limit(parseInt(limit)).populate('actors').populate('director').exec();
        res.status(200).json(movie);
    },
    indexNameLimit: async ( req, res, next ) =>{
        const { limit }  = req.params;
        const movie = await Movie.find({}).limit(parseInt(limit)).sort({"name":1}).populate('actors').populate('director').exec();
        res.status(200).json(movie);
    },
    newMovie: async (req, res, next) =>{
        const newMovie = new Movie(req.body);
        const movie = await newMovie.save();
        res.status(200).json(movie);
    },
}