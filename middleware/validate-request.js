const schemas = require("./schemas");

const validateRequest = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        if (error) {
            const { details } = error;
            const message = details.map(i => i.message).join(',')
            //console.log("error", message);
            res.status(400).json({ error: message })
        } else {
            next();
        }
    }
}

const validateFastRequest = (schema, property) => {
    return (req, res, next) => {

        /**
         * Validate the single line of the string input. You could call single validation on each row
         * 
         * Optimiza tanto
         */

        var { error } = schemas.bounds.validate(req[property]);
        if (error) {
            const { details } = error;
            const message = details.map(i => i.message).join(',')
            //console.log("error", message);
            res.status(400).json({ error: message })
        } else {
            error = schemas.coordinates.validate(req[property]);
            if (error) {
                const { details } = error;
                const message = details.map(i => i.message).join(',')
                //console.log("error", message);
                res.status(400).json({ error: message })
            } else {
                error = schema.validate(req[property]);
                if (error) {
                    const { details } = error;
                    const message = details.map(i => i.message).join(',')
                    //console.log("error", message);
                    res.status(400).json({ error: message })
                } else {
                    next();
                }
            }
        }
    }
}

module.exports = {
    validateRequest,
    validateFastRequest
};