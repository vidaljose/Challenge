const Actor = require('../models/actor');
const Director = require('../models/director');
const Tvshow = require('../models/tvshow');

module.exports = {
    index: async ( req, res, next ) =>{
        const { name }  = req.params;
        const tvshow = await Tvshow.findOne({name: name})
            .populate('actors')
            .populate('seasons')
            .exec();
        res.status(200).json(tvshow);
    },
    newTvshow: async (req, res, next) =>{
        const newTvshow = new Tvshow(req.body);
        const tvshow = await newTvshow.save();
        res.status(200).json(tvshow);
    },
}