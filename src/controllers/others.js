const Actor = require('../models/actor');
const Director = require('../models/director');

module.exports = {
    indexActor: async ( req, res, next ) =>{
        const actor = await Actor.find({});
        res.status(200).json(actor);
    },
    indexDirector: async ( req, res, next ) =>{
        const director = await Director.find({});
        res.status(200).json(director);
    },
    newActor: async (req, res, next) =>{
        const newActor = new Actor(req.body);
        const actor = await newActor.save();
        res.status(200).json(actor);
    },
    newDirector: async (req, res, next) =>{
        const newDirector = new Director(req.body);
        const director = await newDirector.save();
        res.status(200).json(director);
    },
}