const Joi = require("joi");

const schemas = {
    //latitude range -90/90
    //longitude range -180/180
    coordinates: Joi.object().keys({
        lat: Joi.number().required().max(90).min(-90).precision(9),
        long: Joi.number().required().max(180).min(-180).precision(9)
    })

    // define all the other schemas below 
};

module.exports = schemas;