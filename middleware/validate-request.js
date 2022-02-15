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

module.exports = validateRequest