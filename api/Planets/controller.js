const express = require('express');
const router = express.Router();
const service = require('./service');

// validation 
const validateRequest = require('../../middleware/validate-request');
const schemas = require('../../middleware/schemas');

// routes
router.post('/planets', validateRequest(schemas.bounds, "body"), initPlanet());
router.post('/fastDiscovery', validateRequest(schemas.instructions, "body"), fastDiscovery())

// route functions
function initPlanet(req, res, next) {
    const { highBound } = req.body
    service.initPlanet(highBound)
        .then(res.json({ code: 200, message: "Successfully planet creation" }))
        .catch(next);
}

function fastDiscovery(req, res, next) {
    const { instructions } = req.body
    service.fastDiscovery(instructions)
        .then(res.json({ code: 200, message: "Successfully robot creation" }))
        .catch(next);
}

module.exports = router;